import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default", 
      },
    };
    console.log("Constructor");
  }

  async componentDidMount() {
    // API call to fetch user data
    const data = await fetch("https://api.github.com/users/punitsharma32112");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  componentDidUpdate(){
    console.log("component did update");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt={`${name}'s avatar`} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @punit091</h4>
      </div>
    );
  }
}

export default UserClass;
