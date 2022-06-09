import axios from 'axios';

const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';
const POST_BOOK_SUCCESS = 'POST_BOOK_SUCCESS';
const REMOVE_BOOK_SUCCESS = 'REMOVE_BOOK_SUCCESS';
const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';

const fetchBookRequest = () => ({
  type: FETCH_BOOKS_REQUEST,
});

const getBookSuccess = (books) => ({
  type: GET_BOOKS_SUCCESS,
  payload: books,
});

const postBookSuccess = () => ({
  type: POST_BOOK_SUCCESS,
});

const removeBookSuccess = () => ({
  type: REMOVE_BOOK_SUCCESS,
});

const fetchBookFailure = (error) => ({
  type: FETCH_BOOKS_FAILURE,
  payload: error,
});

const initialBookState = {
  loading: false,
  books: {},
  error: '',
};

const bookReducer = (state = initialBookState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        books: action.payload,
        error: '',
      };

    case POST_BOOK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
      };

    case REMOVE_BOOK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
      };

    case FETCH_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        books: {},
        error: action.payload,
      };

    default:
      return state;
  }
};

export const fetchBooks = () => (dispatch) => {
  dispatch(fetchBookRequest());
  axios
    .get(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/0i5ZmUZgKaj314YhYQZG/books',
    )
    .then((response) => {
      dispatch(getBookSuccess(response.data));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(fetchBookFailure(errorMsg));
    });
};

export const postBook = (book) => (dispatch) => {
  dispatch(fetchBookRequest());
  axios
    .post(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/0i5ZmUZgKaj314YhYQZG/books',
      book,
    )
    .then(() => {
      dispatch(postBookSuccess());
      dispatch(fetchBooks());
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(fetchBookFailure(errorMsg));
    });
};

export const removeBook = (id) => (dispatch) => {
  dispatch(fetchBookRequest());
  axios
    .delete(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/0i5ZmUZgKaj314YhYQZG/books/${id}`,
      {
        item_id: id,
      },
    )
    .then(() => {
      dispatch(removeBookSuccess());
      dispatch(fetchBooks());
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(fetchBookFailure(errorMsg));
    });
};

export default bookReducer;
