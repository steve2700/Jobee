
const navlinks = [
    {
        id: 1,
        name: 'Home',

    },
    {
        id: 2,
        name: 'Find Jobs'
    },
    {
        id: 3,
        name: 'Employers'
    },
    {
        id: 4,
        name: 'blogs'
    }
]

function NavBar() {
    return (
        <div className="flex justify-between px-4 border items-center h-14">
            <span className="text-2xl font-bold">JOBEE</span>
            <div className="flex space-x-8">
                <div className="flex space-x-16 items-center">
                    { 
                        navlinks.map((link) => (
                            <h1 className="text-xl">{link.name}</h1>
                        ))
                    }
                </div>
                <button className="border rounded px-2 py-1 border-[#6300B3] text-[#6300B3] font-semibold">Contact Us</button>
                <button className="border rounded px-2 py-1 bg-[#6300B3] text-white font-semibold">Register</button>
            </div>
        </div>
    );
}

export default NavBar;