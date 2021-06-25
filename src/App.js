import React from "react";

class App extends React.Component {
  state = {
    name: "React",
    password: "Password123"
  };

  handleChange = (e) => {
    console.log([e.target.name]);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form>
        <label>Name: </label>
        <input
          onChange={this.handleChange}
          name="name"
          value={this.state.name}
          type="text"
        />
        <br />
        <br />
        <label>Password: </label>
        <input
          onChange={this.handleChange}
          name="password"
          value={this.state.password}
          type="text"
        />
      </form>
    );
  }
}

export default App;
