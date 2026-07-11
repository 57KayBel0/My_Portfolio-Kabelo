import { motion } from "framer-motion";

export default function CaseStudyGallery({ caseStudy }) {
  return (
    <section className="bg-slate-950 py-24">

      <div className="container mx-auto px-6">

        {/* ============================
            Section Title
        ============================ */}

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Project Gallery
        </motion.h2>

        {/* ============================
            Image Grid
        ============================ */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {caseStudy.images.map((image, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                y: -6,
              }}
              className="
                overflow-hidden
                rounded-3xl
                border
                border-slate-700
                bg-slate-800
                shadow-xl
              "
            >

              <img
                src={image}
                alt={`${caseStudy.title} Screenshot ${index + 1}`}
                className="
                  w-full
                  h-64
                  object-cover
                  transition-transform
                  duration-500
                  hover:scale-110
                "
              />

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}