import { Component } from "react";
import shortid from "shortid";
import styles from "./ContactForm.module.css";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const { onAddItem } = this.props;
    if (this.props.nameArr.indexOf(name) > -1) {
      alert(`${name} is already in contact`);
      this.setState({ name: "", number: "" });
      return;
    }
    onAddItem(name, number, shortid.generate());
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.contactForm} onSubmit={this.onSubmit}>
        <h3>Name</h3>

        <input
          className={styles.nameInput}
          onChange={this.onInputChange}
          type="text"
          name="name"
          autoComplete="off"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <h3>Number</h3>
        <input
          className={styles.numberInput}
          onChange={this.onInputChange}
          type="tel"
          name="number"
          autoComplete="off"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
        <br />
        <button type="submit">Add contact {name}</button>
      </form>
    );
  }
}
