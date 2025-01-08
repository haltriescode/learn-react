import UserGreeting from '../Components/UserGreeting.jsx'

function Page2(){
    return(
        <UserGreeting isLoggedIn={true} username="Hal"/>
    );
}

export default Page2