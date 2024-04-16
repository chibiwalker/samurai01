import React from "react";
import userPhoto from "../../assets/images/defaultUserPhoto.png"
import s from "./Users.module.css"
import axios from 'axios'
let users=[
    {
        "name": "Saved Messages",
        "id": 0,
        "uniqueUrlName": null,
        "photos": {
            "small": '../../avatars/0.jpg',
            "large": null
        },
        "status": null,
        "followed": false
    },
    {
        "name": "Lonely Wolf",
        "id": 1,
        "uniqueUrlName": null,
        "photos": {
            "small": '../../avatars/1.jpg',
            "large": null
        },
        "status": null,
        "followed": false
    },
    {
        "name": "sadgirl",
        "id": 2,
        "uniqueUrlName": null,
        "photos": {
            "small": '../../avatars/2.jpg',
            "large": null
        },
        "status": null,
        "followed": false
    },
    {
        "name": "Ded Inside",
        "id": 3,
        "uniqueUrlName": null,
        "photos": {
            "small":'../../avatars/3.jpg',
            "large": null
        },
        "status": null,
        "followed": false
    }
    ]
class Users extends React.Component{
    constructor(props){
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response=>{
            this.props.SetUsers(response.data.items);
        });
    }
    // componentDidMount(){
    //      axios.get("https://social-network.samuraijs.com/api/1.0/users")
    //     .then(response=>{
    //         this.props.SetUsers(response.data.items);
    //     });
    //     }
    
    render(){ 
         return (  
            users.map(u=> <div className={s.userTable} key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small!=null? u.photos.small:userPhoto} className={s.userimg}/>
                    </div>
                    <div>
                    {u.followed?
                    <button onClick={this.props.unfollow}>
                        Unfollow
                    </button>:
                    <button onClick={this.props.follow}>
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