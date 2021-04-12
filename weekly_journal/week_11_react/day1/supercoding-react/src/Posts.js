import React, {Component} from 'react';
import './Posts.css'


class PostsList extends Component{
    render(){


        const postitems = this.props.allposts.map((post,index) => {
            return <div className ="posts-container">
               <div className = "posts-container-body">
                <div className="post-body-title">
                    <h3>{post.title}</h3>
                </div>
                <div className="post-body-body">
                   <p> {post.body} </p>
                </div>
                </div>
                <div className="reaction-container">
                    <div className = "reaction-box">
                        {post.comments}
                    </div>
                    <div className = "reaction-box">
                        {post.likes}
                    </div>
                </div>
                <br></br>

            </div>
        })

        
        return(
            <div>
            {postitems}
            </div>
        )
    }
}


export default PostsList