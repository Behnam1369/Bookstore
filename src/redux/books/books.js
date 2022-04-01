const ADDBOOk = 'book-store/books/ADD BOOK';
const REMOVEBOOk = 'book-store/books/REMOVE BOOK';
const SETLOADING = 'book-store/books/SET LOADING';
const GETBOOKS = 'book-store/books/GET BOOK';

const defaultState = {
  loading: false,
  books: [],
  failureAPI: false,
  failuraMessage: '',
};

export default function booksReducer(state = defaultState, action) {
  switch (action.type) {
    case ADDBOOk:
      return { ...state, books: [...state.books, action.book] };
    case REMOVEBOOk:
      return {
        ...state,
        books: state.books.filter((el) => el.item_id !== action.itemid),
      };
    case SETLOADING:
      return { ...state, loading: action.loading };
    case GETBOOKS:
      return {
        ...state,
        books: [...action.books],
        failureAPI: action.failureAPI,
        failuraMessage: action.failuraMessage,
      };
    default:
      return state;
  }
}

export function addBook(book) {
  return async (dispatch) => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(book),
      redirect: 'follow',
    };

    const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/38b59qFydtEoTzEgXCix/books/', requestOptions)
      .then((response) => response.text())
      .then((result) => result)
      .catch((error) => `Adding Failed. ${error}`);
    if (response === 'Created') {
      dispatch({ type: ADDBOOk, book });
    }
  };
}

export function removeBook(itemid) {
  return async (dispatch) => {
    const requestOptions = {
      method: 'DELETE',
      redirect: 'follow',
    };
    const response = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/38b59qFydtEoTzEgXCix/books/${itemid}`, requestOptions)
      .then((response) => response.text())
      .then((result) => result)
      .catch((error) => `Adding Failed. ${error}`);
    if (response === 'The book was deleted successfully!') {
      dispatch({ type: REMOVEBOOk, itemid });
    }
  };
}

export function setLoading(loading) {
  return { type: SETLOADING, loading };
}

export function getBooks() {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const books = [];
    let failureAPI = false;
    let failureMessage = '';
    await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/38b59qFydtEoTzEgXCix/books')
      .then((response) => {
        if (response.ok) {
          return response.text();
        }
        failureAPI = true;
        failureMessage = `Loading Failed. ${response}`;
        return null;
      })
      .then((result) => {
        const tempArr = JSON.parse(result);
        Object.keys(tempArr).forEach((e) => {
          books.push({ ...tempArr[e][0], item_id: e });
        });
        return null;
      })
      .catch((error) => {
        failureAPI = true;
        failureMessage = `Loading Failed. ${error}`;
        return null;
      });
    dispatch(setLoading(false));
    dispatch({
      type: GETBOOKS, books, failureAPI, failureMessage,
    });
  };
}
