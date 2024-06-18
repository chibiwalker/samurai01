import React from "react";
import userPhoto from "../../assets/images/defaultUserPhoto.png"
import s from "./Users.module.css"
import axios from 'axios'
class Users extends React.Component{
    componentDidMount(){
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}`)
        .then(response=>{
            this.props.SetUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);      
        });
        }
    onPageChange=(page)=>{
        this.props.SelectPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}`)
        .then(response=>{
            this.props.SetUsers(response.data.items);});
    }           
    render(){
        console.log(this.props.users);
        console.log(this.props.totalCount);
        let pagesCount=Math.ceil(this.props.totalCount/10);
        let pages=[];
           switch (this.props.page) {
      case 1:
      case 2:
      case 3:{
        for (let i = 1; i <= 5; i++) 
          pages.push(i);
        pages.push(pagesCount);
        break;
        }
      case pagesCount:
      case pagesCount-1:
      case pagesCount-2:  {
        pages.push(1);
        for (let i = this.props.page - 5; i <= this.props.page; i++) 
          pages.push(i);
        break;
        }
      default:{
        pages.push(1);
        for (let i = this.props.page-2; i <= this.props.page + 2; i++) 
          pages.push(i);
        pages.push(pagesCount);
        break;
        }
    }
    console.log(pages);
        // for (let i=this.props.page-2; i<=this.props.page+2; i++){
        //     pages.push(i);
        // }
        return (<div>
            <div>
            {
                pages.map(p=>
                    <span className={(p==this.props.page) && s.pageSelected} onClick={e=>this.onPageChange(p)}> {p}</span>
                )
            }
        </div>  
        {    
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
                    </div>
                   ) }
    </div>          )
}
}

export default Users;