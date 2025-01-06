import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Student.jsx'

function App() {
  return(
      <div className="container">
        <div className="student">
        <Card username="@haltriescode" status="Sleeping"/>
        <Button/>
        <Student name="Hal" country="Indonesia" isStudent={true}/>
      </div>
      <div className="student">
        <Card/>
        <Button/>
        <Student/>
      </div>
      </div>
      
      
);
}

export default App
