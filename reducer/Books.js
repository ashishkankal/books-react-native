const ADD_TO_BOOKS = "add/books";
const CLEAR_BOOKS = "clear/books";
const SET_BOOKS_LOADING = "load/books";
export const initialState = {
  loading: true,
  Data: [],
  DataCount: 0,
  NextUri: null
};
const books = (state = initialState, { type, payload }) => {
  switch (type) {
    case CLEAR_BOOKS:
      return initialState;
    case ADD_TO_BOOKS: {
      const { data = [], next, count } = payload;
      const newData = [...state.Data, ...data];
      return {
        ...state,
        NextUri: next,
        Data: newData,
        DataCount: count,
        loading: false
      };
    }
    case SET_BOOKS_LOADING: {
      return {
        ...state,
        loading: true
      };
    }

    default:
      return state;
  }
};

export default books;

/** Action creators */
export const addBooks = ({ data, next, count }) => ({
  type: ADD_TO_BOOKS,
  payload: { data, next, count }
});
export const clearBooks = () => ({
  type: CLEAR_BOOKS
});

export const setBooksLoading = () => ({
  type: SET_BOOKS_LOADING
});
