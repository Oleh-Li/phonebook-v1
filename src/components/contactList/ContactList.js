import ContactListItem from "./contactListItem/ContactListItem";
import styles from "./ContactList.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import slideTransition from "../transitions/slide.module.css"

const ContactList = ({ contacts, onDeleteItem }) => {
  const elements = contacts.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <CSSTransition key={id} classNames={slideTransition} timeout={200}>
        <li >
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

export default ContactList;
