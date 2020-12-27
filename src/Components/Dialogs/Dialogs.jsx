import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let line = "/dialogs/" + props.id;
    return <div className={s.dialog}>
        <NavLink to={line} activeClassName={s.active}>{props.name}</NavLink>
    </div>
}
const Message = (props) => {
    return <div className={s.massage}>{props.text}</div>
}
const Dialogs = (props) => {
    let DialogsData = [
        { id: 1, name: "Олег"},
        {id: 2, name: "Саня"},
        {id: 3, name: "Валера"},
        {id: 4, name: "Олень"},
        {id: 5, name: "Тракторист"},
        {id: 6, name: "Ubivator3000"}
    ]
    let MessegeData = [
        { id: 1, message: "Олег"},
        {id: 2, message: "Саня"},
        {id: 3, message: "Валера"},
        {id: 4, message: "Олень"},
        {id: 5, message: "Тракторист"},
        {id: 6, message: "Ubivator3000"}
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name={DialogsData[0].name} id={DialogsData[0].id}/>
                <DialogItem name={DialogsData[1].name} id={DialogsData[1].id}/>
                <DialogItem name={DialogsData[2].name} id={DialogsData[2].id}/>
                <DialogItem name={DialogsData[3].name} id={DialogsData[3].id}/>
                <DialogItem name={DialogsData[4].name} id={DialogsData[4].id}/>
                <DialogItem name={DialogsData[5].name} id={DialogsData[5].id}/>

            </div>
            <div className={s.massages}>
                <Message text="Привет"/>
                <Message text="Где мои деньги?"/>
                <Message text="Гавнюююк!!!!"/>
                <Message text="Аванс пришел!!!!"/>
            </div>
        </div>
    )
}
export default Dialogs;