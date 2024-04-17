import React from "react";
import userPhoto from "../../assets/images/defaultUserPhoto.png"
import s from "./Users.module.css"
import axios from 'axios'
class Users extends React.Component{
    // constructor(props){
    //     super(props);
    //     axios.get("https://social-network.samuraijs.com/api/1.0/users")
    //     .then(response=>{
    //         this.props.SetUsers(response.data.items);
    //     });
    // }
    componentDidMount(){
         axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response=>{
            this.props.SetUsers(response.data.items);
        });
        }
    
    render(){ 
    if (!this.props.users){
        return null
    }
         return (  
            this.props.users.map(u=> <div className={s.userTable} key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small!=null? u.photos.small:userPhoto} className={s.userimg}/>
                    </div>
                    <div>
                    {u.followed?
                    <button onClick={()=>{this.props.unfollow(u.id)}}>
                        Unfollow
                    </button>:
                    <button onClick={()=>{this.props.follow(u.id)}}>
                    Follow
                    </button>
                        }
                    </div>
                    </span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span> 
                    </div>)
            )

}
}

export default Users;