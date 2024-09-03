// src/components/Inicio/Inicio.jsx
import React, { useState } from 'react';
import './Inicio.css'; // Asegúrate de crear este archivo CSS

const Inicio = () => {
  const [activeTab, setActiveTab] = useState('plantas');
  const [carouselIndex, setCarouselIndex] = useState(0);

  const showTab = (tab) => {
    setActiveTab(tab);
  };

  const moveCarousel = (direction) => {
    setCarouselIndex((prevIndex) => {
      const newIndex = (prevIndex + direction + carouselItems.length) % carouselItems.length;
      return newIndex;
    });
  };

  const carouselItems = [
    { src: '../assets/images/Planta-1-Izquierda.png', alt: 'Imagen 1', title: 'Lorem Ipsum', text: 'Lorem ipsum dolor sit amet...' },
    { src: '../assets/images/Planta-2-Izquierda.png', alt: 'Imagen 2', title: 'Lorem Ipsum', text: 'Lorem ipsum dolor sit amet...' },
    { src: '../assets/images/Planta-3-centro.png', alt: 'Imagen 3', title: 'Lorem Ipsum', text: 'Lorem ipsum dolor sit amet...' },
    { src: '../assets/images/Planta-4-derecha.png', alt: 'Imagen 4', title: 'Lorem Ipsum', text: 'Lorem ipsum dolor sit amet...' },
    { src: '../assets/images/Planta-5-derecha.png', alt: 'Imagen 5', title: 'Lorem Ipsum', text: 'Lorem ipsum dolor sit amet...' }
  ];

  return (
    <div className="inicio">
      <div className="header">
        <h2 style={{ color: 'black' }}>
          <strong>Bienvenido, <span style={{ color: '#4CAF50' }}>USUARIO</span></strong>
        </h2>
        <div className="tabs">
          <button
            className={activeTab === 'plantas' ? 'active' : ''}
            onClick={() => showTab('plantas')}
          >
            Plantas
          </button>
          <button
            className={activeTab === 'gerencia' ? 'active' : ''}
            onClick={() => showTab('gerencia')}
          >
            Gerencia
          </button>
          <button
            className={activeTab === 'subgerencia' ? 'active' : ''}
            onClick={() => showTab('subgerencia')}
          >
            Subgerencia
          </button>
        </div>
      </div>

      <div className={`prueba ${activeTab === 'plantas' ? '' : 'hidden'}`} id="plantas">
        <h2 className="section-title">Plantas</h2>
        <div className="carousel">
          <div className="arrow left-arrow" onClick={() => moveCarousel(-1)}>&#8249;</div>
          <div className="carousel-container">
            {carouselItems.map((item, index) => (
              <div key={index} className={`carousel-item2 ${index === carouselIndex ? 'selected' : ''}`}>
                <img src={item.src} alt={item.alt} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div className="arrow right-arrow" onClick={() => moveCarousel(1)}>&#8250;</div>
        </div>
      </div>

      <div className={`prueba ${activeTab === 'gerencia' ? '' : 'hidden'}`} id="gerencia">
        <p>Contenido de Gerencia</p>
      </div>

      <div className={`prueba ${activeTab === 'subgerencia' ? '' : 'hidden'}`} id="subgerencia">
        <p>Contenido de Subgerencia</p>
      </div>
    </div>
  );
};

export default Inicio;
