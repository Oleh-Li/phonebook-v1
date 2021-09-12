import styles from "./ContactListItem.module.css"
const ContactListItem = (props) => {
  return (
    <>
      <span className={styles.itemContactSpan}>{props.name}: {props.number}{" "}</span>
      <button className={styles.contactBuuton} onClick={props.onDeleteItem}>Delete</button>
    </>
  );
};

export default ContactListItem;
