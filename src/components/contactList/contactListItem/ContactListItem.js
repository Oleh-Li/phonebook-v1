const ContactListItem = (props) => {
  return (
    <>
      {props.name}: {props.number} <button>Delete</button>
    </>
  );
};

export default ContactListItem;
