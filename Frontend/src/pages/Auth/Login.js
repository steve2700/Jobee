import NavBar from "../../components/NavBar";
import LoginForm from '../../components/forms/LoginForm.js'

function Login() {

    return (
        <div>
            <NavBar />
            <div className="px-10 pt-10 mx-36">
                <div className="flex flex-col">
                    <span className="text-3xl font-bold">Login In To Your Account</span>
                    <span>Welcome back! Select the below login methods.</span>
                </div>
                <div className="border shadow-lg  mt-4">
                    <div className="flex flex-row justify-between">
                        <LoginForm />
                        <div className="basis-1/2 flex items-center justify-center">
                            <img src="/static/images/login.png"  alt="Login" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;