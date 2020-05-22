import React, {Component} from 'react';
import axios from 'axios';
import {TOKEN_FNAME, TOKEN_ID} from "../config";
import {serverUrl} from "../config";


class Comment extends Component {

    constructor(props) {
        super(props);

        this.onChangeComment = this.onChangeComment.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={

            comment_des:'',
            comment_cid:'',
            comment_pid:'',
            comment_uname:''
            //proId:'',

        }
    }



     componentDidMount() {


         this.setState({

             comment_cid:localStorage.getItem(TOKEN_ID),
             comment_uname: localStorage.getItem(TOKEN_FNAME),
             //comment_pid:this.props.body,



         });


     }

    onChangeComment(e){

        this.setState({

            comment_des : e.target.value

        });
    }



    onSubmit(e){




        e.preventDefault();
       /* console.log('The values are :' +this.state.comment);

        this.setState({

            comment:'',

        });*/


       const comment ={

           comment_cid :this.state.comment_cid,
           comment_pid :this.props.body,
           comment_uname:this.state.comment_uname,
           comment_des :this.state.comment_des,



       };





       axios.post(serverUrl+'/comment/addComment', comment)

           .then(response=>{

               console.log(response.data);
              window.location.reload();

           })
           .catch(function (error) {
               console.log(error);
           });



        this.setState({

            comment_des:'',
            comment_cid :'',
            comment_pid :'',
            comment_uname:'',


        });

    }



    render() {
        //const pro = this.props.body;

        const mystyle = {
            width:"500px",
            padding:"50px"

        };

        return (
            <div>


                <form  onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="comment">Comment:</label>
                        <input type="text"  style={mystyle} className="form-control"  value={this.state.comment_des} onChange={this.onChangeComment}/>


                    </div>
                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </div>
                </form>


            </div>
        );
    }
}

export default Comment;