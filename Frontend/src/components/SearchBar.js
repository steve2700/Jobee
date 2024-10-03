import { IoLocationOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

function SearchBar() {
    return (
        <div className="border bg-[#efe2f836]  flex items-center justify-between px-10 p-2 h-16">
        <div className="flex ">
            <div className="flex items-center space-x-1">
                <CiSearch size={24} color="#6300B3" />
                <input className="outline-none text-xl bg-[#efe2f836]"  placeholder="Job Title, Keyword.."/>
            </div>
            <div className="flex items-center border-l-2 border-[#6300B3] pl-4 space-x-1">
                <IoLocationOutline size={24} color="#6300B3"/>
                <input className="outline-none text-xl bg-[#efe2f836]"  placeholder="Location"/>
            </div>
        </div>
        <button className="bg-[#6300B3] text-white rounded px-1 py-2 w-36">Find Job</button>
    </div>
    )
};


export default SearchBar;