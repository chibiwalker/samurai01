import React from "react";
import userPhoto from "../../assets/images/defaultUserPhoto.png"
import s from "./Users.module.css"
import axios from 'axios'
class Users extends React.Component{
    componentDidMount(){
         axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response=>{
            this.props.SetUsers(response.data.items);
        });
        }        
    // constructor(props){
    //     console.log("constructor call")
    //     super(props)
    //              axios.get("https://social-network.samuraijs.com/api/1.0/users")
    //     .then(response=>{
    //         this.props.SetUsers(response.data.items);
    //     });
    // }
    render(){
        console.log(this.props.users);
        return (  
            this.props.users.map(u=> <div className={s.user_table} key={u.id}>
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
                    <span className={s.userinfo}>
                        <h2>{u.name}</h2>
                        <div>{u.status}</div>
                    </span> 
                    </div>)
            )

}
}

export default Users;