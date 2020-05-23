import React, {Component} from 'react';
import axios from "axios";
import {TOKEN_ID} from "../config";
import {serverUrl} from "../config";

class DisplayComment extends Component {

    constructor(props) {
        super(props);

        this.state={

            comments:[],




        };
    }

    componentDidMount() {

        //this.getComment();
    }


    getComment() {


        axios.get(serverUrl+'/comment/commentDetails/'+this.props.comment)

            .then(response => {

                this.setState({comments: response.data});
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })








    }




    render() {

        this.getComment();

        const pid = this.props.comment;
        return (
            <div>



                {
                    this.state.comments.map(function(value,i)  {

                        return (


                            <div className="bg-light">


                                {value.comment_des}<br/>

                                {value.comment_uname} {value.comment_lname}


                                <br/>
                                <br/>


                            </div>



                        )


                    })
                }




            </div>
        );
    }
}

export default DisplayComment;