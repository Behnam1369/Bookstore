const CHECKSTATUS = 'book-store/categories/CHECK STATUS';
const defaultState = 'Unknown status';

export default function categoriesReducers(state = defaultState, action) {
  switch (action.type) {
    case CHECKSTATUS:
      return 'Under construction';
    default:
      return state;
  }
}

export function checkStatus() {
  return { type: CHECKSTATUS };
}
