import { Component } from "react";
import styles from "./Filter.module.css";
import { connect } from "react-redux";
import contactsAction from "../../redux/contacts/contactsActions";
import contactsActions from "../../redux/contacts/contactsActions";

const Filter = (props) => {
  return (
    <>
      <h3>Find contact by name</h3>
      <input
        className={styles.filterInput}
        onChange={(e) => props.onChangeFilter(e.target.value)}
        name="filter"
        autoComplete="off"
        value={props.value}
      />
    </>
  );
};

const mapStatetToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.onFilterChange,
};

export default connect(mapStatetToProps, mapDispatchToProps)(Filter);

// export default class Filter extends Component {
//   state = {
//     filter: "",
//   };

//   onSearchChange = (e) => {
//     const filter = e.target.value;
//     this.setState({ filter });
//     this.props.handleFilter(filter);
//   };

//   render() {
//     return (
//       <>
//         <h3>Find contact by name</h3>
//         <input
//         className={styles.filterInput}
//           onChange={this.onSearchChange}
//           name="filter"
//           autoComplete="off"
//           value={this.state.filter}
//         />
//       </>
//     );
//   }
// }
