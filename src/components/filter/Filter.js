import { Component } from "react";
import styles from './Filter.module.css'

export default class Filter extends Component {
  state = {
    filter: "",
  };

  onSearchChange = (e) => {
    const filter = e.target.value;
    this.setState({ filter });
    this.props.handleFilter(filter);
  };

  render() {
    return (
      <>
        <h3>Find contact by name</h3>
        <input
        className={styles.filterInput}
          onChange={this.onSearchChange}
          name="filter"
          autoComplete="off"
          value={this.state.filter}
        />
      </>
    );
  }
}
