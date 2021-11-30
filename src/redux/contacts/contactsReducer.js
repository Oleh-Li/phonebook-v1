import { combineReducers } from "redux";
import actionTypes from "./contactsActionTypes";

const items = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      return [...state, payload];

    case actionTypes.DELETE:
      return state.filter((contact) => contact.id !== payload.id);

    case actionTypes.ADD_FROM_STORAGE:
      return [...state, ...payload];

    default:
      return state;
  }
};

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case actionTypes.FILTER_CHANGE:
      return payload.filter;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});

//   state = {
//     contacts: [],
//     filter: "",
//   };

//   onAddItem = (name, number, ) => {
//     const contact = {
//       name,
//       number,
//       id: shortid.generate(),
//     };

//     this.setState(prevState => {
//       return {
//         contacts: [...prevState.contacts, contact],
//       };
//     });
//   };

//   onDeleteItem = (id) => {
//     this.setState(({ contacts }) => {
//       const idx = contacts.findIndex((el) => el.id === id);
//       const newArr = [...contacts.slice(0, idx), ...contacts.slice(idx + 1)];
//       return {
//         contacts: newArr,
//       };
//     });
//   };

//   onFilterChange = (filter) => {
//     this.setState({ filter });
//   };
