import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let line = "/dialogs/" + props.id;
    return <div className={s.dialog}>
        <NavLink to={line} activeClassName={s.active}>{props.name}</NavLink>
    </div>
}
const Dialogs = (props) => {
    const Message = (props) => {
        return <div className={s.massage}>{props.message}</div>
    }
    let dialogs = [
        {id: 1, name: "Олег"},
        {id: 2, name: "Саня"},
        {id: 3, name: "Валера"},
        {id: 4, name: "Олень"},
        {id: 5, name: "Тракторист"},
        {id: 6, name: "Ubivator3000"}
    ];
    let messages = [
        {id: 1, message: "Привет"},
        {id: 2, message: "Где мои деньги"},
        {id: 3, message: "Гавнюююк!!!!"},
        {id: 4, message: "Аванс пришел!!!!"},
        {id: 5, message: "Аванс пришел!!!!"}
    ];
    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message message={m.message}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.massages}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs;