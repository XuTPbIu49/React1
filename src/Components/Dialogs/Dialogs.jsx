import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let line = "/dialogs/" + props.Id;
    return <div className={s.dialog}>
        <NavLink to={line} activeClassName={s.active}>{props.name}</NavLink>
    </div>
}
const Message = (props) => {
    return <div className={s.massage}>{props.text}</div>
}
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name="Олег" Id="1"/>
                <DialogItem name="Саня" Id="2"/>
                <DialogItem name="Валера" Id="3"/>
                <DialogItem name="Олень" Id="4"/>
                <DialogItem name="Тракторист" Id="5"/>
                <DialogItem name="Ubivator3000" Id="6"/>
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