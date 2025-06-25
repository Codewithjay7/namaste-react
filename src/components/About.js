import User from "./User.js";
import UserClass from "./UserClass.js";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);

       // console.log("perent component");
    }
    componentDidMount(){
      //  console.log("perent component did mount");
      }
    render(){
      //  console.log("perent render");

        return(
            <div>
                <h1>About</h1>
                <h3>This is about from react</h3>
                {/* <User name = {"jay chavda(function)"}/> */}
                <UserClass name = {"first"} location = {"vatva class"}/>
                
            </div>
        );
    };
};


export default About;