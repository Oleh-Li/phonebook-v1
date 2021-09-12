import ContactListItem from "./contactListItem/ContactListItem";

const ContactList = ({ contacts }) => {
  const elements = contacts.map((item) => {
    const { id, ...itemProps } = item;
    return <li key={id}>
        <ContactListItem {...itemProps}/>
    </li>;
  });
  return (
    <ul>
      {elements}
    </ul>
  );
};

export default ContactList;
