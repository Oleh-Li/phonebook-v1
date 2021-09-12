import ContactListItem from "./contactListItem/ContactListItem";
import styles from "./ContactList.module.css"

const ContactList = ({ contacts, onDeleteItem }) => {
  const elements = contacts.map((item) => {
    const { id, ...itemProps } = item;
    return <li key={id}>
        <ContactListItem {...itemProps}
        onDeleteItem={()=>onDeleteItem(id)}/>
    </li>;
  });
  return (
    <ul>
      {elements}
    </ul>
  );
};

export default ContactList;
