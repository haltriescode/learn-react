// Updater Function
// A function passed as an argument to seState() usually ex. setYear(arrow function)
// Allow for safe updates based on the previous state used with multiple state updates and asynchrounous functions
// Good practices to use updater functions

import React, {useState} from 'react';

function AnotherCounter(){
    const [count, setCount] = useState(0);

    function increment(){
        // Uses the CURRENT state to calculate the NEXT state.
        // set functions do not trigger an update.
        // React batches together state updates for performances reasons.
        // NEXT state becomes the CURRENT state after an update.

        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);

        //UPDATE
    };

    function decrement(){
        setCount(count => count - 1);
        setCount(count => count - 1);
        setCount(count => count - 1);
    };

    function reset(){
        setCount(c => c = 0);
    }

    return(<div className="counter-container">
        <p className='count-display'>{count}</p>
        <button className='counter-button' onClick={decrement}>Decrement</button>
        <button className='counter-button' onClick={reset}>Reset</button>
        <button className='counter-button' onClick={increment}>Increment</button>

    </div>)
}

export default AnotherCounter