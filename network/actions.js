import { getBooksList, getMoreBooks } from ".";
import { addBooks, clearBooks, setBooksLoading } from "./../reducer/Books";
export const fetchAndSetBooks = (searchParams = {}) => dispatch => {
  dispatch(clearBooks());
  dispatch(setBooksLoading());

  let paramString = "?mime_type=image%2F";
  Object.keys(searchParams).map(
    item =>
      searchParams[item] &&
      (paramString = paramString.concat(`&${item}=${searchParams[item]}`))
  );
  getBooksList(paramString)
    .then(res => {
      const { next, results, count } = res.data;
      const reformatedData = results.map(result => book(result));

      dispatch(addBooks({ data: reformatedData, next, count }));
    })
    .catch(thrown => {
      if (axios.isCancel(thrown)) {
        console.log("Request cancelled");
      } else {
        console.log("Error");
      }
    });
};

export const fetchMoreBooks = nextUri => dispatch => {
  dispatch(setBooksLoading());

  getMoreBooks(nextUri).then(res => {
    const { next, results, count } = res.data;
    const reformatedData = results.map(result => book(result));

    dispatch(addBooks({ data: reformatedData, next, count }));
  });
};
const book = item => ({
  id: item.id,
  name: item.title,
  author: item.authors.length > 0 ? item.authors[0].name : "",
  image: item.formats["image/jpeg"],
  link:
    item.formats["text/html; charset=iso-8859-1"] ||
    item.formats["application/zip"] ||
    item.formats["application/pdf"] ||
    item.formats["text/plain; charset=utf-8"] ||
    item.formats["application/zip"] ||
    false
});
