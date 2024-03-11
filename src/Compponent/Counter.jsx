import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByCount } from "../Feature/counterSlice";

const Counter = () => {
   const {count} = useSelector(state => state.counter)
   const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(increment())}>increment</button>
            <div>
                <h1>{count}</h1> 
            </div>  
            <button onClick={() => dispatch(decrement())}>decrement</button>
            <br />
            <br />
            <button onClick={() => dispatch(incrementByCount(5))}>+5 count</button>
        </div>
    );
};

export default Counter;