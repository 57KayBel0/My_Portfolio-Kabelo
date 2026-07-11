import { FaSearch } from "react-icons/fa";

export default function SearchBar({
    value,
    onChange
}) {
    return (

        <div className="relative max-w-xl mx-auto mb-12">

            <FaSearch
                className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-slate-400
                "
            />

            <input
                type="text"
                placeholder="Search projects..."
                value={value}
                onChange={(e)=>onChange(e.target.value)}
                className="
                w-full
                rounded-xl
                border
                border-slate-700
                bg-slate-900
                py-4
                pl-14
                pr-5
                outline-none
                focus:border-cyan-400
                transition
                "
            />

        </div>

    );
}