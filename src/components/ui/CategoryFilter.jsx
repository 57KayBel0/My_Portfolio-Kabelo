const categories=[
    "All",
    "Machine Learning",
    "Data Analytics",
    "Data Engineering",
    "Full Stack"
];

export default function CategoryFilter({

    selected,

    onSelect

}){

return(

<div className="flex flex-wrap justify-center gap-4 mb-10">

{categories.map(category=>(

<button

key={category}

onClick={()=>onSelect(category)}

className={`

px-5

py-2

rounded-full

transition

${
selected===category

?

"bg-cyan-500 text-white"

:

"bg-slate-800 hover:bg-slate-700"

}

`}

>

{category}

</button>

))}

</div>

);

}