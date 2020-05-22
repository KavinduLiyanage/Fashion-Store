import React, {Component} from 'react';
import axios from "axios";
import {TOKEN_ID} from "../config";
import {serverUrl} from "../config";

class DisplayComment extends Component {

    constructor(props) {
        super(props);

        this.state={

            comments:[],
            proId:this.props.comment



        };
    }


    componentDidMount() {

       //const pid =this.props.comment;

       // console.log(pid);

        //const {id} = this.props.match.params;


        //console.log(this.state.proId);


      const pid = this.state.proId;


        axios.get(serverUrl+'/comment/commentDetails/'+localStorage.getItem(TOKEN_ID))

            .then(response => {

                this.setState({comments: response.data});
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })








    }




    render() {

        const pid = this.props.comment;
        return (
            <div>



                {
                    this.state.comments.map(function(value,i)  {

                        return (


                            <div className="bg-light">


                                {value.comment_des}<br/>

                                {value.comment_uname}


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