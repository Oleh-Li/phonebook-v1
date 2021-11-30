import shortid from "shortid";
import actionTypes from "./contactsActionTypes";

const addContact = (name, number) => ({
  type: actionTypes.ADD,
  payload: {
      name,
      number,
      id: shortid.generate(),
  },
});

const addFromStorage = (items) => ({
  type: actionTypes.ADD_FROM_STORAGE,
  payload: items
});

const onDeleteItem = (id) => ({
  type: actionTypes.DELETE,
  payload: { id },
});

const onFilterChange = (filter) => ({
  type: actionTypes.FILTER_CHANGE,
  payload: {
    filter,
  },
});

export default {
  addContact,
  addFromStorage,
  onDeleteItem,
  onFilterChange,
};
