import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./App.module.css";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";
import popTransition from "./transitions/pop.module.css";
import shortid from "shortid";
import { connect, useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import contactsActions from "../redux/contacts/contactsActions";
//import addFromStorage from '../redux/contacts/contactsActions';
//remeka
const App = (props) => {
  // state = {
  //   contacts: [],
  //   filter: "",
  // };

  // componentDidMount() {
  //   const savedCotacts = localStorage.getItem("contacts");
  //   if (savedCotacts) {
  //     this.setState({ contacts: JSON.parse(savedCotacts) });
  //   }
  // }

  // onAddItem = (name, number, id) => {
  //   this.setState(({ contacts }) => {
  //     const newArr = [...contacts, { name, number, id: id }];
  //     return {
  //       contacts: newArr,
  //     };
  //   });
  // };

  // onAddItem = (name, number, ) => {
  //   const contact = {
  //     name,
  //     number,
  //     id: shortid.generate(),
  //   };

  //   this.setState(prevState => {
  //     return {
  //       contacts: [...prevState.contacts, contact],
  //     };
  //   });
  // };

  // onDeleteItem = (id) => {
  //   this.setState(({ contacts }) => {
  //     const idx = contacts.findIndex((el) => el.id === id);
  //     const newArr = [...contacts.slice(0, idx), ...contacts.slice(idx + 1)];
  //     return {
  //       contacts: newArr,
  //     };
  //   });
  // };

  // handleChange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  // onFilterItemsToRepaint = (items, filter) => {
  //   if (filter.length === 0) {
  //     return items;
  //   }
  //   return items.filter((item) => {
  //     return item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase());
  //   });
  // };

  // onFilterChange = (filter) => {
  //   this.setState({ filter });
  // };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  //   }
  // }
  const dispatch = useDispatch();

  useEffect(() => {
    const raw = localStorage.getItem("contacts") || [];
    console.log("props",props)
    console.log("raw", raw);
    if(raw.length){
      props.addFromStorage(JSON.parse(raw))
      //dispatch(contactsActions.addFromStorage(JSON.parse(raw)));
    }

    // props.addFromStorage(JSON.parse(raw))
  }, []);

  useEffect(() => {
    props.items.length && localStorage.setItem("contacts", JSON.stringify(props.items));
  }, [props.items]);
  //const state = useSelector(state => state.state)
  //console.log(state);
  
  //from Repeta filter items (other method than have i)

  // getVisibleContacts = () => {
  //   const { contacts, filter } = this.state;
  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  // const { filter, contacts } = this.state;
  // const nameArr = contacts.map((item) => item.name);

  // console.log(props.items)
  return (
    <div>
      <h1>FF</h1>
      <ContactForm />
      
      <Filter/>
      <ContactList />
    </div>

    // <div className={styles.app}>
    //   <CSSTransition in={true} classNames={popTransition} timeout={200}>
    //     <h2 className={styles.title}>Phonebook</h2>
    //   </CSSTransition>
    //   <ContactForm onAddItem={this.onAddItem} nameArr={nameArr} />

    //   <h2>Contacts</h2>
    //   <Filter handleFilter={this.onFilterChange} />
    // <ContactList
    //   contacts={this.onFilterItemsToRepaint(contacts, filter)}
    //   onDeleteItem={this.onDeleteItem}
    // />
    // </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.contacts.items,
});

const mapDispatchToProps = {
  addFromStorage: contactsActions.addFromStorage,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
