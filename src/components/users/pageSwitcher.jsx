import React from "react";
import s from "./Users.module.css"
const pageSwitcher=(props)=>{
    let pages=[];
    //сначала заполняем массив
    switch(props.page){
        case 1,2,3:
            //<1,2,3,4,5 ... lastPage>
            for (i==0; i<=5; i++){
                pages[i]=i+1;
            }
        case {lastPage, lastPage-2, lastPage-3}:
            //<1...lastPage-2-3-4-5>
        default:
            //page-2, page-1,page,page+1,page+2, ..., lastPage
    }
    return  (
        pages.map(p=><button className={p==page && s.selected} onClick={props.selectPage}>p</button>)
    )
}
export default pageSwitcher;