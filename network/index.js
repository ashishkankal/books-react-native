const BASE_URL = "http://skunkworks.ignitesol.com:8000";
import axios from "axios";

export const GET_BOOKS_PATH = "/books";

const requestId = "search_request";
export const getBooksList = searchString =>
  axios.get(BASE_URL + GET_BOOKS_PATH + searchString);

export const getMoreBooks = nextUri => axios.get(nextUri);
