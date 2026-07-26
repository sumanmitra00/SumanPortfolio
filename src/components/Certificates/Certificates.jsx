import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FiAward, FiExternalLink } from "react-icons/fi";
import useInView from "../../hooks/useInView";
import { fadeUp } from "../../utils/motionVariants";
import { certificates } from "../../data/portfolioData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Certificates.css";

export default function Certificates() {
  const [ref, inView] = useInView();

  return (
    <section id="certificates" className="section certificates" ref={ref}>
      <div className="container">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}>
          <span className="section-eyebrow">Certificates</span>
          <h2 className="section-title">
            Continuous <span className="gradient-text">learning</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0.15}
        >
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3800, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="certificates__swiper"
          >
            {certificates.map((cert) => (
              <SwiperSlide key={cert.title}>
                <div className="cert-card glass-card">
                  <div className="cert-card__icon">
                    <FiAward />
                  </div>
                  <h3 className="cert-card__title">{cert.title}</h3>
                  <span className="cert-card__issuer">{cert.issuer}</span>
                  <span className="cert-card__year">{cert.year}</span>
                  <a href={cert.link} className="cert-card__link cursor-hover">
                    View Certificate <FiExternalLink />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
