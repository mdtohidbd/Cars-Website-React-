import React, { useEffect, useState } from "react";
import { homeCarsStyles as styles } from "../assets/dummyStyles";
import carsData from "./../assets/HcarsData";
import { ArrowRight, CheckCircle, Fuel, Gauge, Users, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";


const HomeCars = () => {
  const navigate = useNavigate();
  const [animateCards, setAnimateCards] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateCards(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleImageError = (e) => {
    const wrapper = e.target.parentNode;
    e.target.remove();
    const placeholder = document.createElement("div");
    placeholder.className = styles.placeholder;
    placeholder.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="36" height="36"><path d="M3 6.75C3 5.78 3.78 5 4.75 5h14.5c.97 0 1.75.78 1.75 1.75v10.5c0 .97-.78 1.75-1.75 1.75H4.75A1.75 1.75 0 0 1 3 17.25V6.75zM8.5 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"/></svg>';
    wrapper.appendChild(placeholder);
  };

  const visibleCars = carsData.slice(0, 6);

  return (
    <div className={styles.container}>
      {/* Header */}
      <div
     
       className={styles.headerContainer}>
        <div className={styles.premiumBadge}>
          <Zap className="w-3.5 h-3.5 text-amber-400 mr-2" />
          <span className={styles.premiumText}> Premium Fleet Selection</span>
        </div>
        <h1 className={styles.title}>Luxury Car Collection</h1>
        <p className={styles.subtitle}>
          Discover Premium vehicles with exceptional performance and comfort for
          your next journey...
        </p>
      </div>

      {/* Cars Grid */}
      <div className={styles.grid}>
        {visibleCars.map((car, idx) => {
          const patternStyle =
            styles.cardPatterns[idx % styles.cardPatterns.length];
          const borderStyle =
            styles.borderGradients?.[idx % styles.borderGradients?.length] || "";

          return (
            <div
              key={car.id}
              onMouseEnter={() => setHoveredCard(car.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`${styles.card} ${patternStyle} border ${borderStyle} ${
                animateCards ? "opacity-100" : "opacity-0 translate-y-8"
              } hover:shadow-xl hover:-translate-y-2`}
              style={{
                clipPath:
                  "polygon(0% 15%, 15% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)",
                transformStyle: "preserve-3d",
                transitionDelay: `${animateCards ? idx * 100 : 0}ms`,
              }}
            >
              <div className={styles.borderOverlay} />

              <div className={styles.priceBadge}>
                <span className={styles.priceText}>${car.price}/day</span>
              </div>

              <div className="relative h-36 sm:h-40 md:h-44 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  onError={handleImageError}
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{
                    transform:
                      hoveredCard === car.id
                        ? "rotate(0.5deg)"
                        : "scale(1) rotate(0)",
                  }}
                />
              </div>

              <div className="p-4 relative z-10">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {car.name}
                    </h3> 
                    <p className="text-gray-400 flex items-center mt-0.5">
                      <span className="bg-gray-800 text-orange-400 px-2 py-0.5 rounded-full mr-2 text-[10px] font-medium">
                        {car.type}
                      </span>
                      <span className="text-gray-500 text-xs">{car.year}</span>
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2 my-3">
                  {[
                    { icon: Users, value: car.seats, label: "Seats" },
                    { icon: Fuel, value: car.fuel, label: "Fuel" },
                    { icon: Gauge, value: car.mileage, label: "Mileage" },
                    {
                      icon: CheckCircle,
                      value: car.transmission,
                      label: "Trans",
                    },
                  ].map((spec, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div
                        className={`p-2 rounded-lg mb-1 transition-all ${
                          hoveredCard === car.id
                            ? "bg-gradient-to-r from-sky-500/10 to-teal-500/10"
                            : "bg-gray-800"
                        }`}
                      >
                        <spec.icon
                          className={`w-3.5 h-3.5 ${
                            hoveredCard === car.id
                              ? "text-orange-400"
                              : "text-gray-500"
                          }`}
                        />
                      </div>
                      <span className="text-[11px] font-medium text-gray-300">
                        {spec.value}
                      </span>
                      <span className="text-[9px] text-gray-500 mt-0.5">
                        {spec.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* ✅ navigate */}
                <button
                  onClick={() => navigate(`/cars/${car.id}`, { state: { car } })}
                  className="metal-btn inline-flex items-center gap-2 px-3.5 py-2.5 rounded-md font-medium text-sm transform-gpu hover:scale-[1.02] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-300 cursor-pointer"
                >
                  <span className="relative z-10 flex items-center">
                    Book Now
                    <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>

              <div className="absolute -top-1 -right-1 w-7 h-7 rounded-bl-full bg-sky-500/30 blur-lg" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeCars;
