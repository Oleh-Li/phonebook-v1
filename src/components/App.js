import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./App.module.css";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";
import popTransition from "./transitions/pop.module.css";

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const savedCotacts = localStorage.getItem("contacts");
    if (savedCotacts) {
      this.setState({ contacts: JSON.parse(savedCotacts) });
    }
  }

  onAddItem = (name, number, id) => {
    this.setState(({ contacts }) => {
      const newArr = [...contacts, { name, number, id: id }];
      return {
        contacts: newArr,
      };
    });
  };

  onDeleteItem = (id) => {
    this.setState(({ contacts }) => {
      const idx = contacts.findIndex((el) => el.id === id);
      const newArr = [...contacts.slice(0, idx), ...contacts.slice(idx + 1)];
      return {
        contacts: newArr,
      };
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFilterItemsToRepaint = (items, filter) => {
    if (filter.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase());
    });
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter, contacts } = this.state;
    const nameArr = contacts.map((item) => item.name);
    return (
      <div className={styles.app}>
 
        <CSSTransition in={true} classNames={popTransition} timeout={200}>
          <h2 className={styles.title}>Phonebook</h2>
        </CSSTransition>
        <ContactForm onAddItem={this.onAddItem} nameArr={nameArr} />

        <h2>Contacts</h2>
        <Filter handleFilter={this.onFilterChange} />
        <ContactList
          contacts={this.onFilterItemsToRepaint(contacts, filter)}
          onDeleteItem={this.onDeleteItem}
        />
      </div>
    );
  }
}
