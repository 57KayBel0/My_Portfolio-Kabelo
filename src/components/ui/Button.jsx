import { motion } from "framer-motion";

export default function Button({

children,

href,

primary=true

}){

const style=primary?

"bg-cyan-500 hover:bg-cyan-600 text-white":

"border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white";

return(

<motion.a

whileHover={{scale:1.05}}

whileTap={{scale:.95}}

href={href}

className={`${style} px-8 py-4 rounded-xl transition font-semibold`}

>

{children}

</motion.a>

);

}