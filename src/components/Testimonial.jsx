import React from "react";
import { testimonialStyles as styles } from "../assets/dummyStyles";
import testimonials from "./../assets/Testimonialdata";
import { FaCar, FaQuoteLeft, FaStar } from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";
import App from "./../App";

const Testimonial = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {/* header*/}
        <div className={styles.headerContainer}>
          <div className={styles.badge}>
            <FaCar className={`${styles.quoteIcon} mr-2`} />
            <span className={styles.badgeText}>Customer Experiences</span>
          </div>
          <h1 className={styles.title}>
            Premium <span className={styles.accentText}> Drive</span>{" "}
            Experiences
          </h1>
          <div className={styles.dividerContainer}>
            <div className={styles.dividerLine} />
            <GiSteeringWheel className={`${styles.accentText}mx-4`} size={24} />
            <div className={styles.dividerLine} />
          </div>
          <p className={styles.subtitle}>
            “Every smile behind the wheel tells a chapter of our journey
            together.”...
          </p>
        </div>

        {/* Testimonials card */}
        <div className={styles.grid}>
          {testimonials.map((t, index) => {
            const shape = styles.cardShapes[index % styles.cardShapes.length];
            const IconComponent = styles.icons[index % styles.icons.length];
            return (
              <div
                key={t.id}
                className={styles.card}
                style={{
                  clipPath:
                    "polygon(0% 10%, 10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%)",
                  background:
                    "linear-gradient(145deg, rgba(30,30,40,0.8), rgba(20,20,30,0.8))",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(100,100,120,0.2)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                }}
              >
                <div className={styles.cardContent}>
                  <div className="flex justify-between items-start mb-6">
                    <FaQuoteLeft className={styles.quoteIcon} size={28} />
                    {/* Rating */}
                    <div className={styles.ratingContainer}>
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`${
                            i < t.rating ? styles.accentText : "text-gray-700"
                          } ${styles.star}`}
                          size={18}
                        />
                      ))}
                    </div>
                  </div>
                  <p className={styles.comment}>"{t.comment}"</p>

                  <div className={styles.carInfo}>
                    <GiSteeringWheel className={styles.carIcon} size={20} />
                    <span className={styles.carText}>{t.car}</span>
                  </div>
                  <div className={styles.authorContainer}>
                    <div className={styles.avatar}>{t.name.charAt(0)}</div>

                    <div className={styles.authorInfo}>
                      <h3 className={styles.authorName}>{t.name}</h3>
                      <p className={styles.authorRole}>{t.role}</p>
                    </div>
                  </div>
                </div>

                <div className={styles.decorativeCorner} />

                <div className={styles.patternIcon}>
                  <IconComponent size={36} />
                </div>
              </div>
            );
          })}
        </div>
        {/*stats Sections */}
        <div className={styles.statsContainer}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statValue(styles.statColors.value[0])}>
                50K+
              </div>
              <div className={styles.statLabel(styles.statColors.label[0])}>
                Happy Wheels, Happy People
              </div>
            </div>

            <div className={styles.statItem}>
              <div className={styles.statValue(styles.statColors.value[1])}>
                350+
              </div>
              <div className={styles.statLabel(styles.statColors.label[1])}>
                Premier Fleet
              </div>
            </div>

            <div className={styles.statItem}>
              <div className={styles.statValue(styles.statColors.value[2])}>
                24/8
              </div>
              <div className={styles.statLabel(styles.statColors.label[2])}>
                Support
              </div>
            </div>

            <div className={styles.statItem}>
              <div className={styles.statValue(styles.statColors.value[3])}>
                60+
              </div>
              <div className={styles.statLabel(styles.statColors.label[3])}>
                Location..
              </div>
            </div>
          </div>
        </div>

        {/*CTA*/}
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>
            “Indulge in Excellence—Your Experience Awaits..”?
          </h2>
          <p className={styles.carText}>
            “Join a legacy of elegance, powered by our premium fleet and bespoke
            services.”
          </p>
            
          <br/>
          <a href="/cars" className={styles.ctaButton}>
            Book Your Luxury Ride...
          </a>
        </div>
      </div>

      <div className={styles.bottomGradient}/>
    </div>
  );
};

export default Testimonial;
