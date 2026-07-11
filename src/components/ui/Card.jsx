import { motion } from "framer-motion";

export default function Card({ children }){

return(

<motion.div

whileHover={{

y:-8,

scale:1.02

}}

transition={{

duration:.25

}}

className="glass rounded-3xl p-8 shadow-2xl"

>

{children}

</motion.div>

);

}