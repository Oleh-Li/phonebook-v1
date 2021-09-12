import { Component } from "react";

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
      <input
        onChange={this.onSearchChange}
        name="filter"
        autoComplete="off"
        value={this.state.filter}
      />
    );
  }
}
