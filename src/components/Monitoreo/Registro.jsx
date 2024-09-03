import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Monitoreo.css';
import Consulta from './Consulta';
const Monitoreo = () => {
  const [activeTab, setActiveTab] = useState('registro');
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
      <div className="header">
        <div className="line-container">
          <span className="line-text">Monitoreo</span>
          <hr className="line" />
        </div>
        <div className="tabs-datos">
          <button
            className={activeTab === 'registro' ? 'active' : ''}
            onClick={() => showTab('registro')}
          >
            Registro
          </button>
          <button
            className={activeTab === 'consulta' ? 'active' : ''}
            onClick={() => showonchange('consulta')}
          >
            Consulta
          </button>
          <button
            className={activeTab === 'imprimible' ? 'active' : ''}
            onClick={() => showonchange('imprimible')}
          >
            Imprimible
          </button>
        </div>
      </div>
      <hr />
      {activeTab === 'registro' && (
        <div className="prueba">
          <div className="d-flex justify-content-end mb-2">
            <button className="btn btn-light mr-3"><i className="fas fa-filter"></i> Filtros</button>
            <button className="btn btn-success mr-3" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fas fa-plus"></i> Añadir Nuevo</button>
            <button className="btn btn-success mr-3"><i className="fas fa-cogs"></i></button>
            <button className="btn btn-success mr-3"><i className="fas fa-trash"></i></button>
            <button className="btn btn-success"><i className="fas fa-download"></i></button>
          </div>
          <table className="table table-bordered custom-table" id="ClienteTable">
            <thead>
              <tr >
                <th scope="col"><input type="checkbox" /></th>
                <th scope="col">Código</th>
                <th scope="col">Descripción</th>
                <th scope="col">Vigencia</th>
                <th scope="col">Min. MS</th>
                <th scope="col">Max. MS</th>
                <th scope="col">Modificar</th>
              </tr>
            </thead>
            <tbody>
            <tr scope="row">
                <td><input type="checkbox" /></td>
                <td>1</td>
                <td>aaa</td>
                <td className="vigencia-si">Sí</td>
                <td>aaa</td>
                <td>aaa</td>
                <td><button className="btn btn-light"><i className="fas fa-pen"></i></button></td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>2</td>
                <td>aaa</td>
                <td className="vigencia-no">No</td>
                <td>aaa</td>
                <td>aaa</td>
                <td><button className="btn btn-light"><i className="fas fa-pen"></i></button></td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>3</td>
                <td>aaa</td>
                <td className="vigencia-no">No</td>
                <td>aaa</td>
                <td>aaa</td>
                <td><button className="btn btn-light"><i className="fas fa-pen"></i></button></td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>4</td>
                <td>aaa</td>
                <td className="vigencia-no">No</td>
                <td>aaa</td>
                <td>aaa</td>
                <td><button className="btn btn-light"><i className="fas fa-pen"></i></button></td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>5</td>
                <td>aaa</td>
                <td className="vigencia-no">No</td>
                <td>aaa</td>
                <td>aaa</td>
                <td><button className="btn btn-light"><i className="fas fa-pen"></i></button></td>
              </tr>
            </tbody>
          </table>
          <p>Mostrando todos los resultados</p>
          <button type="button" className="btn btn-link"><i className="fas fa-arrow-left"></i> Atrás</button>
        </div>
      )}
       {activeTab === 'consultas' && <Consulta />}
      
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
                <label htmlFor="vigenciaSelect">Nombre de la planta</label>
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

export default Monitoreo;
