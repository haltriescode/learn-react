import React, {useState} from 'react';

function FoodList(){
    // Array destructuring
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f, newFood]); // f is for foods
    }

    function handleRemoveFood(index){
        setFoods(foods.filter((_, i) => i !== index )); // i is for index
    }

    return (<div>
        <h2>List of food</h2>
        <ul>
            {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
        </ul>
        <input type="text" id="foodInput" placeholder="Enter food name"></input>
        <button onClick={handleAddFood}>Add Food</button>
    </div>)
}

export default FoodList