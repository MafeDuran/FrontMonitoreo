import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const MonSeguridad = () => {
  const [activeTab, setActiveTab] = useState('seguridad');
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
          <span className="line-text">Puntos a Evaluar</span>
          <hr className="line" />
        </div>
        <div className="tabs-datos">
          <button
            className={activeTab === 'ambiente' ? 'active' : ''}
            onClick={() => showonchange('ambiente')}
          >
            Ambiente
          </button>
          <button
            className={activeTab === 'seguridad' ? 'active' : ''}
            onClick={() => showTab('seguridad')}
          >
            Mon. Seguridad
          </button>
          <button
            className={activeTab === 'detalle' ? 'active' : ''}
            onClick={() => showonchange('detalle')}
          >
            Detalle M. Ambiente
          </button>
          <button
            className={activeTab === 'detalle_seguridad' ? 'active' : ''}
            onClick={() => showonchange('detalle_seguridad')}
          >
            Detalle M. Seguridad
          </button>
          <button
            className={activeTab === 'carga_excel' ? 'active' : ''}
            onClick={() => showonchange('carga_excel')}
          >
            Carga Excel
          </button>
        </div>
      </div>
      <hr />
      {activeTab === 'seguridad' && (
        <div className="prueba">
           <div className="d-flex justify-content-between align-items-center mb-2">
             <span className="fw-bold">Actividades Monitoreo de Medio Ambiente</span>
                <div className="d-flex align-items-center">
                    <div className="search-container2 d-flex align-items-center me-3">
                        <input type="text" className="form-control" placeholder="Buscar..." />
                        <button className="search-button btn btn-primary ms-2">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                    <button className="btn btn-light me-3">
                    <i className="fas fa-filter"></i> Filtros
                    </button>
                    <button className="btn btn-success me-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i className="fas fa-plus"></i> Añadir Nuevo
                    </button>
                    <button className="btn btn-success me-3">
                    <i className="fas fa-cogs"></i>
                    </button>
                    <button className="btn btn-success me-3">
                    <i className="fas fa-trash"></i>
                    </button>
                    <button className="btn btn-success">
                    <i className="fas fa-download"></i>
                    </button>
                </div>
            </div>


          
          <table className="table table-bordered custom-table" id="ClienteTable">
            <thead>
              <tr >
                <th scope="col"><input type="checkbox" /></th>
                <th scope="col">Código</th>
                <th scope="col">Actividad</th>
                <th scope="col">Vigencia</th>
                <th scope="col">Tipo Monitoreo</th>
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
                <td><button className="btn btn-light"><i className="fas fa-pen"></i></button></td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>2</td>
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

export default MonSeguridad;
