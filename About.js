import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("child constructor");
  }
  componentDidMount(){
    //console.log("parent component did mount")
  }

  render() {
   // console.log("child render");
    return (
      <div>
        <h1>About class component</h1>
        <h2>This is namaste React project</h2> 
        <UserClass name={"Punit sharma (class)"} location={"ghaziabad class"} />
      </div>
    );
  }
}

export default About;
