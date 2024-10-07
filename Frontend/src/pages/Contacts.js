import NavBar from "../components/NavBar";
import Footer from "../components/footer";
import ContactForm from  '../components/forms/ContactForm.js'

import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { VscLocation } from "react-icons/vsc";



function Contacts() {
    return (
        <div>
            <NavBar />
            <div>
                <span>Contacts</span>
                <div className="md:grid grid-cols-2 gap-10 mx-6 my-4">
                    <div className="px-4 space-y-10">
                        <div className="flex flex-col space-y-2">
                            <span className="text-4xl font-bold">We’d Love to Hear from You!</span>
                            <span>
                                Looking for support? Have questions? Our 
                                team is here to provide assistance every 
                                step of the way
                            </span>
                        </div>
                        <div className="grid grid-cols-2 gap-10">
                            <div className="flex space-x-1 ">
                                <VscLocation size={24} />
                                <div className="flex flex-col">
                                    <span className="text-xl font-bold">Address</span>
                                    <span>Rulpha Bunce Rd Upper Hill<br /> Nairobi, Kenya</span>
                                </div>
                            </div>
                            <div className="flex space-x-1 ">
                                <BsTelephone size={24} />
                                <div className="flex flex-col">
                                    <span className="text-xl font-bold">Phone</span>
                                    <span>+254 797955092</span>
                                </div>
                            </div>
                            <div className="flex space-x-1 ">
                                <MdOutlineMail size={24} />
                                <div className="flex flex-col">
                                    <span className="text-xl font-bold">Email</span>
                                    <span>info@jobee.com</span>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold">Socials</span>
                                <div className="flex justify-center space-x-4">
                                    <div>LinkedIn</div>
                                    <div>Facebook</div>
                                    <div>Instagram</div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="border">
                        <ContactForm />
                    </div>
                </div>
                <div></div>
            </div>
            <Footer />
        </div>
    )
}

export default Contacts;