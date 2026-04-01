import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Services.css';
import {
  FaLaptopCode,
  FaPaintBrush,
  FaBullhorn,
  FaShopify,
} from 'react-icons/fa';
// Import your images
import softwareDevImg from '../Assets/software-dev.jpeg';
import creativeDesignImg from '../Assets/creative-design.jpeg';
import marketingImg from '../Assets/marketing.jpeg';
import ecommerceImg from '../Assets/ecommerce.jpeg';

const services = [
  {
    icon: <FaLaptopCode />,
    image: softwareDevImg,
    title: 'Software Development',
    description: 'Building functional websites, creating online experiences through coding. Custom software solutions tailored to your business needs.'
  },
  {
    icon: <FaPaintBrush />,
    image: creativeDesignImg,
    title: 'Creative/Design',
    description: 'Visually striking designs for brands, ads, packaging, and digital platforms crafted to make a lasting impression.'
  },
  {
    icon: <FaBullhorn />,
    image: marketingImg,
    title: 'Marketing',
    description: 'Strategic content planning, posting, and audience engagement to grow your brand\'s online presence consistently.'
  },
  {
    icon: <FaShopify />,
    image: ecommerceImg,
    title: 'Ecommerce Development & Optimization',
    description: 'Custom Shopify Store Design, Product Setup & Management, Theme Customization, Payment Gateway Integration.'
  }
];

export default function ServicesSection() {
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (index) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>We deliver custom digital solutions, from concept to deployment and beyond.</p>
        </div>

        <div className="services-slider-wrapper">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={800}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 25 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="services-slider"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className={`service-card ${loadedImages[index] ? '' : 'loading'}`}>
                  <div className="service-image-wrapper">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="service-image"
                      onLoad={() => handleImageLoad(index)}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x300?text=Service+Image';
                      }}
                    />
                    <div className="service-overlay">
                      <div className="overlay-icon">
                        {React.cloneElement(service.icon, { size: 48 })}
                      </div>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}