import React, { useState } from 'react';

function FavoriteCar(){
    const [car, setCar] = useState({year: 2024,
                                    make: "Ford",
                                    model: "Mustang",
    });

    function handleYearChange(event){
        // Spread operator
       // setCar({...car, year: event.target.value}); //now we can retain previous properties
          setCar(car => ({...car, year: event.target.value}))
    }

    function handleMakeChange(event){
        setCar(car => ({...car, make: event.target.value}))
    }

    function handleModelChange(event){
        setCar(car => ({...car, model: event.target.value}))
    }

    return(<div>
        <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

        <input type="number" value={car.year} onChange={handleYearChange}></input>
        <input type="text" value={car.make} onChange={handleMakeChange}></input>
        <input type="text" value={car.model} onChange={handleModelChange}></input>
    </div>)
}

export default FavoriteCar