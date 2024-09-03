import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Usuarios.css'; // Asegúrate de crear este archivo CSS
import Usuarios from './Usuarios';
import Lideres from './Lideres';
import Supervisores from './Supervisores';
const NuevoUsuario = () => {
  const [activeTab, setActiveTab] = useState('nuevousuario');
  const location = useLocation();
  const navigate = useNavigate();
  const showTab = (tab) => {
    setActiveTab(tab);
  };
  const showonchange = (tab) => {
    setActiveTab(tab);
    navigate(`/home/${tab}`);
  };
  return (
    <div>
      <div className="line-container">    
        <span className="line-text">Usuarios</span>
        <hr className="line" />
      </div>
      <div className="header">
        <div className="tabs-datos">
          <button
            className={activeTab === 'nuevousuario' ? 'active' : ''}
            onClick={() => showTab('nuevousuario')}
          >
            Nuevo Usuario
          </button>
          <button
            className={activeTab === 'usuarios' ? 'active' : ''}
            onClick={() => showonchange('usuarios')}
          >
            Usuarios
          </button>
          <button
            className={activeTab === 'lideres' ? 'active' : ''}
            onClick={() => showonchange('lideres')}
          >
            Líderes
          </button>
          <button
            className={activeTab === 'supervisores' ? 'active' : ''}
            onClick={() => showonchange('supervisores')}
          >
            Supervisores
          </button>
         
        </div>
      </div>
      <hr />
    
      {activeTab === 'nuevousuario' && (
        <div className="prueba">
          <div className="card smaller-card">
            <div className="card-body">
              <div className="form-group mb-3 d-flex align-items-center">
                <label htmlFor="plantaSelect" className="label-fixed-width">RUT</label>
                <select className="form-select" id="plantaSelect">
                  <option value="">Seleccione</option>
                  {/* Añadir más opciones aquí */}
                </select>
              </div>
             
              <div className="d-flex justify-content-end">
                <button className="btn btn-light btn-wide mr-2">Cancelar</button>
                <button className="btn btn-success btn-wide">Guardar</button>
              </div>
            </div>
          </div>
          <button type="button" className="btn btn-link"><i className="fas fa-arrow-left"></i> Atrás</button>
        </div>
      )}
      
      {activeTab === 'usuarios' && <Usuarios />}
      {activeTab === 'lideres' && <Lideres />}
      {activeTab === 'supervisores' && <Supervisores />}
      
   
    </div>
  );
};

export default NuevoUsuario;
