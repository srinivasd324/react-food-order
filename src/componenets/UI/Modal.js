import { Fragment } from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";

const OverLay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};
const BackDrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>
};
const portalElement = document.getElementById('overlays');
const Modal = (props) => {
    return <Fragment>
        {ReactDom.createPortal(<BackDrop onClose={props.onClose}/>, portalElement)}
        {ReactDom.createPortal(<OverLay>{props.children}</OverLay>, portalElement)}
    </Fragment>
};
export default Modal;