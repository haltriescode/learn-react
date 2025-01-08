import PropTypes from 'prop-types';

function List({category= "Category", items = []}){
    
    //Sort
    //fruits.sort((a,b) => a.name.localCompare(b.name)); //Alphabetical
    //fruits.sort((a,b) => b.name.localCompare(a.name)); //Reverse Alphabetical
    //fruits.sort((a,b) => a.calories - b.calories); //Numeric
    //fruits.sort((a,b) => a.calories - b.calories); //Reverse Numeric

    //filter
    //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100); // Low Calories fruitss
    //const highCalFruits = fruits.filter(fruit => fruit.calories >= 100); // High Calories fruits
    
    const categoryName = category;
    const itemList = items;

    const listItems = itemList.map(item => <li key={item.id}>
                                        {item.name}: &nbsp;
                                        <b>{item.calories}</b>
                                        </li>);

    return(<>
            <h3 className="list-category">{categoryName}</h3>
            <ol className="list-items">{listItems}</ol>
         </>);

}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                              name: PropTypes.string,
                                              calories: PropTypes.number
    })),
}

export default List