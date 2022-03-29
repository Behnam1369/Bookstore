const ADDBOOk = 'book-store/books/ADD BOOK';
const REMOVEBOOk = 'book-store/books/REMOVE BOOK';

const defaultState = [];

export default function booksReducer(state = defaultState, action) {
  switch (action.type) {
    case ADDBOOk:
      return [...state, action.book];
    case REMOVEBOOk:
      return state.filter((el, i) => i !== action.index);
    default:
      return state;
  }
}

export function addBook(book) {
  return { type: ADDBOOk, book };
}

export function removeBook(index) {
  return { type: REMOVEBOOk, index };
}
