import { useState } from "react";
import { motion } from "framer-motion";

import ImageLightbox from "./ImageLightbox";

export default function CaseStudyGallery({ caseStudy }) {

  const [selectedIndex, setSelectedIndex] = useState(null);

  const allImages = caseStudy.gallery || [];

  const featuredImage = allImages[0];
  const galleryImages = allImages.slice(1);

  return (
    <section
      id="gallery"
      className="bg-slate-950 py-24"
    >

      <div className="container mx-auto max-w-7xl px-6">

        {/* ==========================
            Section Title
        ========================== */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Project Gallery
        </motion.h2>

        {/* ==========================
            Featured Image
        ========================== */}

        {featuredImage && (

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            className="
              mb-12
              overflow-hidden
              rounded-3xl
              border
              border-slate-700
              shadow-2xl
              cursor-pointer
            "
          >

            <img
              src={featuredImage}
              alt={`${caseStudy.title} Featured`}
              onClick={() => setSelectedIndex(0)}
              className="
                w-full
                max-h-[650px]
                object-cover
                transition-transform
                duration-500
                hover:scale-105
              "
            />

          </motion.div>

        )}

        {/* ==========================
            Gallery Grid
        ========================== */}

        {galleryImages.length > 0 && (

          <div
            className="
              grid
              md:grid-cols-2
              lg:grid-cols-3
              gap-8
            "
          >

            {galleryImages.map((image, index) => (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-700
                  bg-slate-900
                  shadow-xl
                  cursor-pointer
                "
              >

                <img
                  src={image}
                  alt={`${caseStudy.title} Screenshot ${index + 2}`}
                  onClick={() => setSelectedIndex(index + 1)}
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

        )}

      </div>

      {/* ==========================
          Image Lightbox
      ========================== */}

      {selectedIndex !== null && (

        <ImageLightbox
          images={allImages}
          currentIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onPrevious={() =>
            setSelectedIndex(
              (selectedIndex - 1 + allImages.length) %
                allImages.length
            )
          }
          onNext={() =>
            setSelectedIndex(
              (selectedIndex + 1) %
                allImages.length
            )
          }
        />

      )}

    </section>
  );
}