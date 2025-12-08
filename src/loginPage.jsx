import LoginPrompt from './components/loginPrompt.jsx'

const LoginPage = ({setIsLoggedIn}) => {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <LoginPrompt setIsLoggedIn={setIsLoggedIn}/>
            <div>This page is not developed, clicking the Login button does the function</div>
        </div>
    )
}

export default LoginPage;