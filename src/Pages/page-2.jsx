import UserGreeting from '../Components/UserGreeting.jsx'

function Page2(){
    return(
        <UserGreeting isLoggedIn={false} username="Hal"/>
    );
}

export default Page2