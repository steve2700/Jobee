

function CustmInput({ label, name, placeholder,  type='text' }) {
    return (
        <div className="flex flex-col space-y-2">
            <label className="font-semibold text-xl" htmlFor={label}>{label}</label>
            <input className="rounded  w-full border text-xl h-12  px-2 py-1" type={type} placeholder={placeholder} name={name} />
        </div>
    )
}

export default CustmInput;