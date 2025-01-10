import React, {useState} from 'react'


function Counter(){
    //Array destructuring
    const [count, setCount] = useState(0);

    //Function to increase the number
    const increment = () => {
        setCount(count + 1);
    }

    //Function to decrease the number
    const decrement = () => {
        setCount(count - 1);
    }

    //Function to reset
    const reset = () => {
        setCount(0);
    }

    //Display
    return(<div className="counter-container">
            <p className='count-display'>{count}</p>
            <button className='counter-button' onClick={decrement}>Decrement</button>
            <button className='counter-button' onClick={reset}>Reset</button>
            <button className='counter-button' onClick={increment}>Increment</button>

        </div>)
}

export default Counter