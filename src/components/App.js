import React, { Component } from "react";
import styles from "./App.module.css";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Logen Ninefingers", number: "459-66-56" },
      { id: "id-2", name: "Rudd Threetrees", number: "663-89-22" },
      { id: "id-3", name: "Ardee West", number: "865-47-99" },
      { id: "id-4", name: "Ferro Maljinn", number: "448-51-62" },
    ],
    filter: "",
  };

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

  componentDidMount() {
    const savedCotacts = localStorage.getItem("contacts")
    if(savedCotacts){
      this.setState({contacts: JSON.parse(savedCotacts)})
    }
  }
  

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
        <h2 className={styles.title}>Phonebook</h2>
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
