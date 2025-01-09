function AnotherButton(){
    const handleClick = (e) => e.target.textContent ="Hello World";

    return (
        <button onClick ={(e) => handleClick(e)}>Click Here!</button>
    )
}

export default AnotherButton