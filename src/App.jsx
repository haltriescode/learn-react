import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Student.jsx'

function App() {
  return(
      <div className="student">
        <Card/>
        <Button/>
        <Student name="Hal" country="Indonesia" isStudent={true}/>
      </div>
      
);
}

export default App
