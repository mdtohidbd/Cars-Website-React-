import React from "react";
import { carPageStyles } from "../assets/dummyStyles";
import carsData from "../assets/carsData";
import {
  FaArrowRight,
  FaGasPump,
  FaShareAlt,
  FaTachometerAlt,
  FaUserFriends,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cars = () => {
  const navigate = useNavigate(); // ✅ ছোট হাতের নাম রাখো

  return (
    <div className={carPageStyles.pageContainer}>
      {/* Main Content */}
      <div className={carPageStyles.contentContainer}>
        <div className={carPageStyles.headerContainer}>
          <div className={carPageStyles.headerDecoration} />
          <h1 className={carPageStyles.title}>Premium Car Collection</h1>
          <p className={carPageStyles.subtitle}>
            ✨ Experience the elegance of our handpicked luxury fleet — every
            vehicle flawlessly maintained and prepared to deliver a journey as
            exceptional as you are.
          </p>
        </div>

        <div className={carPageStyles.gridContainer}>
          {carsData.map((car) => (
            <div key={car.id} className={carPageStyles.carCard}>
              <div className={carPageStyles.glowEffect} />

              <div className={carPageStyles.imageContainer}>
                <div className="absolute inset-0 z-10" />
                <img
                  src={car.image}
                  alt={car.name}
                  className={carPageStyles.carImage}
                />
                <div className={carPageStyles.priceBadge}>${car.price}/day</div>
              </div>

              <div className={carPageStyles.cardContent}>
                <div className={carPageStyles.headerRow}>
                  <div>
                    <h3 className={carPageStyles.carName}>{car.name}</h3>
                    <p className={carPageStyles.carType}>{car.type}</p>
                  </div>
                </div>

                <div className={carPageStyles.specsGrid}>
                  <div className={carPageStyles.specItem}>
                    <div className={carPageStyles.specIconContainer}>
                      <FaUserFriends className="text-sky-500" />
                    </div>
                    <span>{car.seats} Seats</span>
                  </div>

                  <div className={carPageStyles.specItem}>
                    <div className={carPageStyles.specIconContainer}>
                      <FaGasPump className="text-amber-500" />
                    </div>
                    <span>{car.fuel}</span>
                  </div>

                  <div className={carPageStyles.specItem}>
                    <div className={carPageStyles.specIconContainer}>
                      <FaTachometerAlt className="text-emerald-500" />
                    </div>
                    <span>{car.mileage}</span>
                  </div>

                  <div className={carPageStyles.specItem}>
                    <div className={carPageStyles.specIconContainer}>
                      <FaShareAlt className="text-purple-500" />
                    </div>
                    <span>Premium</span>
                  </div>
                </div>

                {/* ✅ Book Now Button */}
                <button
                  onClick={() => navigate(`/cars/${car.id}`, { state: { car } })}
                  className={carPageStyles.bookButton}
                >
                  <span className={carPageStyles.buttonText}>Book Now</span>
                  <FaArrowRight className={carPageStyles.buttonIcon} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={carPageStyles.decor1} />
        <div className={carPageStyles.decor2} />
      </div>
    </div>
  );
};

export default Cars;
