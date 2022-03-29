const ADDBOOk = 'book-store/books/ADD BOOK';
const REMOVEBOOk = 'book-store/books/REMOVE BOOK';

const defaultState = [
  { genre: 'Comedy', title: 'Harry Potter', author: 'JK Rowling' },
  { genre: 'Sport', title: 'I am footbAll', author: 'Zlatan Ibrahimovic' },
];

export default function booksReducer(state = defaultState, action) {
  switch (action.type) {
    case ADDBOOk:
      return [...state, action.book];
    case REMOVEBOOk:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
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
