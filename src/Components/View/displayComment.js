import React, { Component } from "react";
import axios from "axios";
import { serverUrl } from "../config";

class DisplayComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    console.log(this.props.comment);
    //this.getComment();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    axios
      .get(serverUrl + "/comment/commentDetails/" + this.props.comment)
      .then((response) => {
        this.setState({ comments: response.data });
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    //const pid = this.props.comment;
    return (
      <div>
        {this.state.comments.map(function (value, i) {
          return (
            <div key={value._id} className="bg-light">
              {value.comment_des}
              <br />
              {value.comment_uname} {value.comment_lname}
              <br />
              <br />
            </div>
          );
        })}
      </div>
    );
  }
}

export default DisplayComment;
