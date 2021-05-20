import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css"

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountRef = useRef();
    const submItHandler = event => {
        event.preventDefault();
        const eneteredAmount  = amountRef.current.value;
        const amountNumber  = +eneteredAmount;
        if(eneteredAmount.trim().length ==0 || amountNumber < 1 || amountNumber > 5){
            setAmountIsValid(false);
            return;
        }
        props.onAddItem(amountNumber);
    };
    return (
        <form className={classes.form} onSubmit={submItHandler}>
            <Input 
            ref={amountRef}
            input={{
                type: "number",
                id: "amount_"+props.id,
                min:"1",
                max: "5",
                step: "1",
                defaultValue:"1"
            }} 
            label={"Amount"}/>
            <button>+ Add</button>
            {!amountIsValid && <p>Please Enter Amount (1-5)</p>}
        </form>
    );
};

export default MealItemForm;