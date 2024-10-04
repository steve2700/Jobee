import CustmInput from "../UI/CustmInput";


function LoginForm() {
    return (
        <div className="px-8 space-y-6  basis-1/2 mt-28">
            <CustmInput label={'Username/Email'} name={'username'} placeholder={'username/email'} />
            <CustmInput label={'Password'} name={'password'} placeholder={'password'} />
            <div className="flex justify-between">
                <div className="flex items-center space-x-4">
                    <input type="checkbox" className="w-5 h-5" />
                    <p>Remember me</p>
                </div>
                <p>Forgot Password?</p>
            </div>

            <button className="bg-[#6300B3] w-full h-10 rounded-lg text-white font-bold text-xl">Login</button>
        </div>
    )
}

export default LoginForm;