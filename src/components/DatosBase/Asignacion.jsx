import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './DatosBase.css'; // Asegúrate de crear este archivo CSS
import Plantas from './Plantas';
import Procesos from './Procesos';
import Areas from './Areas';
const Asignacion = () => {
  const [activeTab, setActiveTab] = useState('asignacion');
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
        <span className="line-text">Datos Base</span>
        <hr className="line" />
      </div>
      <div className="header">
        <div className="tabs-datos">
          <button
            className={activeTab === 'plantas' ? 'active' : ''}
            onClick={() => showonchange('plantas')}
          >
            Plantas
          </button>
          <button
            className={activeTab === 'areas' ? 'active' : ''}
            onClick={() => showTab('areas')}
          >
            Areas
          </button>
          <button
            className={activeTab === 'procesos' ? 'active' : ''}
            onClick={() => showonchange('procesos')}
          >
            Procesos
          </button>
          <button
            className={activeTab === 'asignacion' ? 'active' : ''}
            onClick={() => showTab('asignacion')}
          >
            Asignación de Áreas
          </button>
          <button
            className={activeTab === 'empresas' ? 'active' : ''}
            onClick={() => showonchange('empresas')}
          >
            Empresas
          </button>
        </div>
      </div>
      <hr />
      {activeTab === 'plantas' && <Plantas />}
      {activeTab === 'areas' && <Areas />}
      {activeTab === 'procesos' && <Procesos />}
      {activeTab === 'asignacion' && (
        <div className="prueba">
          <div className="card smaller-card">
            <div className="card-body">
              <div className="form-group mb-3 d-flex align-items-center">
                <label htmlFor="plantaSelect" className="label-fixed-width">Planta</label>
                <select className="form-select" id="plantaSelect">
                  <option value="">Seleccione</option>
                  {/* Añadir más opciones aquí */}
                </select>
              </div>
              <div className="form-group mb-3 d-flex align-items-center">
                <label htmlFor="areaSelect" className="label-fixed-width">Área</label>
                <select className="form-select" id="areaSelect">
                  <option value="">Seleccione</option>
                  {/* Añadir más opciones aquí */}
                </select>
              </div>
              <div className="form-group mb-3 d-flex align-items-center">
                <label htmlFor="vigenciaSelect" className="label-fixed-width">Vigencia</label>
                <select className="form-select" id="vigenciaSelect">
                  <option value="">Seleccione</option>
                  <option value="si">Sí</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="form-group mb-3 d-flex align-items-center">
                <label htmlFor="procesoSelect" className="label-fixed-width">Proceso</label>
                <select className="form-select" id="procesoSelect">
                  <option value="">Seleccione</option>
                  {/* Añadir más opciones aquí */}
                </select>
              </div>
              <div className="d-flex justify-content-end">
                <button className="btn btn-light btn-wide mr-2">Ocultar</button>
                <button className="btn btn-success btn-wide">Guardar</button>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end mb-2">
            <div className="search-container2">
                <input type="text" placeholder="Buscar..." />
                <button className="search-button">
                    <i className="fa fa-search"></i>
                </button>
            </div>
            <button className="btn btn-light mr-3"><i className="fas fa-filter"></i> Filtros</button>
            <button className="btn btn-success mr-3" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fas fa-plus"></i> Añadir Nuevo</button>
            <button className="btn btn-success mr-3"><i className="fas fa-cogs"></i></button>
            <button className="btn btn-success mr-3"><i className="fas fa-trash"></i></button>
            <button className="btn btn-success"><i className="fas fa-download"></i></button>
          </div>
          <table className="table table-bordered custom-table">
            <thead>
              <tr>
                <th scope="col"><input type="checkbox" /></th>
                <th scope="col">Planta</th>
                <th scope="col">Proceso</th>
                <th scope="col">Vigencia</th>
                <th scope="col">Modificar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="checkbox" /></td>
                <td>1</td>
                <td>aaa</td>
                <td className="vigencia-si">Sí</td>
                <td><button className="btn btn-light"><i className="fas fa-pen"></i></button></td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>2</td>
                <td>aaa</td>
                <td className="vigencia-no">No</td>
                <td><button className="btn btn-light"><i className="fas fa-pen"></i></button></td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>3</td>
                <td>aaa</td>
                <td className="vigencia-no">No</td>
                <td><button className="btn btn-light"><i className="fas fa-pen"></i></button></td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>4</td>
                <td>aaa</td>
                <td className="vigencia-no">No</td>
                <td><button className="btn btn-light"><i className="fas fa-pen"></i></button></td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>5</td>
                <td>aaa</td>
                <td className="vigencia-no">No</td>
                <td><button className="btn btn-light"><i className="fas fa-pen"></i></button></td>
              </tr>
            </tbody>
          </table>
          <p>Mostrando todos los resultados</p>
          <button type="button" className="btn btn-link"><i className="fas fa-arrow-left"></i> Atrás</button>
        </div>
      )}
      
      {/* Agregar más secciones según sea necesario */}
      
      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel"><strong>Nueva Planta</strong></h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form id="addNewForm">
                <div className="form-group mb-3">
                  <input type="text" className="form-control" id="nombrePlanta" placeholder="Nombre de la planta" />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="vigenciaSelect">Vigencia</label>
                  <select className="form-select form-select-sm" id="vigenciaSelect">
                    <option value="si">Sí</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer border-0">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-success">Guardar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Asignacion;
