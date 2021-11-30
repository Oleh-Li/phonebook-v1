import ContactListItem from "./contactListItem/ContactListItem";
import styles from "./ContactList.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import slideTransition from "../transitions/slide.module.css";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";

const ContactList = ({ contacts, onDeleteItem }) => {
  const elements = contacts.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <CSSTransition key={id} classNames={slideTransition} timeout={200}>
        <li>
          <ContactListItem
            {...itemProps}
            onDeleteItem={() => onDeleteItem(id)}
          />
        </li>
      </CSSTransition>
    );
  });
  return (
    <TransitionGroup component="ul" className={styles.contacstList}>
      {elements}
    </TransitionGroup>
  );
};

const mapStateToProps = (state) => {
  const {contacts} = state
  const visibleContacts = contacts.items.filter((contact) =>
    contact.name?.toLowerCase().includes(contacts.filter.toLowerCase())
  );
  return {
    contacts: visibleContacts,
  };
};

const mapDispatchToProps = {
  onDeleteItem: contactsActions.onDeleteItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
