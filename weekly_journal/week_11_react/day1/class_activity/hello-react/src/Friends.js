import {Component} from "react";

class FriendList extends Component{
    render (){
        const friendItems = this.props.allFriends.map((friend,index) => {
            return <li key = {index}>name: {friend.name}</li>
        })
        return(
            <div>
                <h2>list of friends:-</h2>
                {friendItems}
            </div>
        )
    }
}
export default FriendList