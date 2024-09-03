import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Usuarios.css'; // Asegúrate de crear este archivo CSS
import NuevoUsuario from './NuevoUsuario';
import Lideres from './Lideres';
import Supervisores from './Supervisores';

const Usuarios = () => {
  const [activeTab, setActiveTab] = useState('usuarios');
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
            onClick={() => showonchange('nuevousuario')}
          >
            Nuevo Usuario
          </button>
          <button
            className={activeTab === 'usuarios' ? 'active' : ''}
            onClick={() => showTab('usuarios')}
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
      {activeTab === 'nuevousuario' && <NuevoUsuario />}
      {activeTab === 'usuarios' && (
        <div className="prueba">
          <div className="card smaller-card">
            <div className="card-body">
              <div className="form-group mb-3 d-flex align-items-center">
                <label htmlFor="plantaSelect" className="label-fixed-width">Por Planta</label>
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
         
          <div className="d-flex justify-content-end mb-2 align-items-center">
            <div className="search-container2">
                <input type="text" placeholder="Buscar..." />
                <button className="search-button">
                    <i className="fa fa-search"></i>
                </button>
            </div>
           
            <button className="btn btn-light mr-3"><i className="fas fa-filter"></i> Filtros</button>
            <button className="btn btn-success"><i className="fas fa-download"></i></button>
          </div>
          <table className="table table-bordered custom-table">
            <thead>
              <tr>
                <th scope="col"><input type="checkbox" /></th>
                <th scope="col">RUT</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Perfil</th>
                <th scope="col">Email</th>
                <th scope="col">Vigencia</th>
                <th scope="col">Plantas</th>
                <th scope="col">Modificar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="checkbox" /></td>
                <td>1</td>
                <td>aaa</td>
                <td>1</td>
                <td>aaa</td>
                <td>aaa</td>
                <td className="vigencia-si">Sí</td>
                <td>aaa</td>
                <td><button className="btn btn-light"><i className="fas fa-pen"></i></button></td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>1</td>
                <td>aaa</td>
                <td>1</td>
                <td>aaa</td>
                <td>aaa</td>
                <td className="vigencia-si">Sí</td>
                <td>aaa</td>
                <td><button className="btn btn-light"><i className="fas fa-pen"></i></button></td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>1</td>
                <td>aaa</td>
                <td>1</td>
                <td>aaa</td>
                <td>aaa</td>
                <td className="vigencia-no">No</td>
                <td>aaa</td>
                <td><button className="btn btn-light"><i className="fas fa-pen"></i></button></td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>1</td>
                <td>aaa</td>
                <td>1</td>
                <td>aaa</td>
                <td>aaa</td>
                <td className="vigencia-si">Sí</td>
                <td>aaa</td>
                <td><button className="btn btn-light"><i className="fas fa-pen"></i></button></td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>1</td>
                <td>aaa</td>
                <td>1</td>
                <td>aaa</td>
                <td>aaa</td>
                <td className="vigencia-no">No</td>
                <td>aaa</td>
                <td><button className="btn btn-light"><i className="fas fa-pen"></i></button></td>
              </tr>
            </tbody>
          </table>
          <p>Mostrando todos los resultados</p>
          <button type="button" className="btn btn-link"><i className="fas fa-arrow-left"></i> Atrás</button>
        </div>
      )}
       {activeTab === 'lideres' && <Lideres />}
       {activeTab === 'supervisores' && <Supervisores />}
     
      
   
    </div>
  );
};

export default Usuarios;
