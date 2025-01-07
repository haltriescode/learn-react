import Card from '../components/Card.jsx'
import Button from '../Components/Button/Button.jsx'
import Student from '../Components/Student.jsx'

function Page1(){
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
};

export default Page1