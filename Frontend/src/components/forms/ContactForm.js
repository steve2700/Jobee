import { useState } from "react";
import CustmInput from "../UI/CustmInput";

function ContactForm() {
    const [formData, setFormData ] = useState({});

    const handleChange = (e) => {

    } 

    const handleSubmit = () => {
        console.log(formData);
    }

    return (
        <div className="px-4 space-y-8 py-4">
            <div className="flex justify-between">
                <CustmInput handleChange={handleChange} label={'Full Name'} name={'Fname'} placeholder={'your name...'} />
                <CustmInput handleChange={handleChange} label={'Email'} name={'email'} placeholder={'email'} />
            </div>
            <div>
                <textarea className="p-2 h-64 border rounded w-full" placeholder="your message here...">
                </textarea>
            </div>
            <button onClick={handleSubmit} className="bg-[#6300B3] w-full h-10 rounded-lg text-white font-bold text-xl">Login</button>
        </div>
    )
}

export default ContactForm;