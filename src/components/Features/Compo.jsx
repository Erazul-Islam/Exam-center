import { motion } from "framer-motion"


const Compo = () => {



    return (
        <div className="mt-8 ml-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <motion.div initial={{opacity: 0, x: -100}} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100, }} transition={{ duration: 0.5 }} whileHover={{ scale: 1.2, }} className="card w-80 bg-base-100 shadow-xl">
                <figure><img className="w-full " src="https://i.ibb.co/9HsB8MS/HSC.png" alt="HSC" /></figure>
                <div className="card-body">
                    <h2 className="card-title">HSC Demo Exam</h2>
                    <p></p>
                </div>
            </motion.div>

                {/* BCS */}

            <motion.div initial={{opacity: 0, x: -100}} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} transition={{ duration: 0.5 }} whileHover={{ scale: 1.2 }} className="card w-80 bg-base-100 shadow-xl">
                <figure><img className="w-full" src="https://i.ibb.co/NYRSM8g/BCS.png" alt="HSC" /></figure>
                <div className="card-body">
                    <h2 className="card-title">BCS Demo Exam</h2>
                    <p></p>
                </div>
            </motion.div>

            {/* ssc  */}

            <motion.div initial={{ opacity: 0, x: 100 }}  animate={{ opacity: 1, x: 0 }}  exit={{ opacity: 0, x: -100 }}  transition={{ duration: 0.5 }} whileHover={{ scale: 1.2 }} className="card w-80 bg-base-100 shadow-xl">
                <figure><img className="w-full" src="https://i.ibb.co/kgzh1sf/x.png" alt="HSC" /></figure>
                <div className="card-body">
                    <h2 className="card-title">SSC Demo Exam</h2>
                    <p></p>
                </div>
            </motion.div>

                {/* admission */}

            <motion.div initial={{ opacity: 0, x: 100 }}  animate={{ opacity: 1, x: 0 }}  exit={{ opacity: 0, x: -100 }}  transition={{ duration: 0.5 }} whileHover={{ scale: 1.2 }} className="card w-80 bg-base-100 shadow-xl">
                <figure><img className="w-full h-48" src="https://i.ibb.co/8ByfvX9/Admission.jpg" alt="HSC" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Admission Demo Test</h2>
                    <p></p>
                </div>
            </motion.div>
        </div>
    );
};

export default Compo;