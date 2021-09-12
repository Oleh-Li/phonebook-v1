import React, { Component } from "react";
import "./App.css";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
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

  render() {
    const { filter, contacts } = this.state;
    return (
      <div className="App">
        <h2>Phonebook</h2>
        <ContactForm onAddItem={this.onAddItem} />

        <h2>Contacts</h2>
        <h3>Find contact by name</h3>
        <Filter handleFilter={this.onFilterChange} />
        <ContactList contacts={this.onFilterItemsToRepaint(contacts, filter)} />
      </div>
    );
  }
}
