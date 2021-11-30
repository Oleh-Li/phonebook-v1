import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";
import styles from "./ContactForm.module.css";
import { useState } from "react";

const ContactForm = (props) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const onInputNameChange = (e) => {
    setName(e.target.value);
  };

  const onInputNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { onAddItem, contacts } = props;
    console.log(contacts);
    if (contacts.indexOf(name) > -1) {
      alert(`${name} is already in contact`);
      setName("");
      setNumber("");
      return;
    }
    onAddItem(name, number);
    setName("");
    setNumber("");
  };

  return (
    <form className={styles.contactForm} onSubmit={onSubmit}>
      <h3>Name</h3>

      <input
        className={styles.nameInput}
        onChange={onInputNameChange}
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
        onChange={onInputNumberChange}
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
};

const mapDispatchToProps = {
  onAddItem: contactsActions.addContact,
};

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});

//or same

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onAddItem: (name, number) =>
//       dispatch(contactsActions.addContact(name, number)),
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
