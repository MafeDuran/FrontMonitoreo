import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PorPlan = () => {
  const [activeTab, setActiveTab] = useState('plan_de_accion');
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
          <span className="line-text">Planes de acción</span>
          <hr className="line" />
        </div>
        <div className="tabs-datos">
          <button
            className={activeTab === 'por_monitoreo' ? 'active' : ''}
            onClick={() => showonchange('por_monitoreo')}
          >
            Por Monitoreo
          </button>
          <button
            className={activeTab === 'plan_de_accion' ? 'active' : ''}
            onClick={() => showTab('plan_de_accion')}
          >
            Plan de acción
          </button>
         
        </div>
      </div>
      <hr />
      {activeTab === 'plan_de_accion' && (
        <div className="prueba">


<div className="card smaller-card">
            <div className="card-body">
                <div className="row g-3">
                
                <div className="col-3 ms-4">
                    <div className="mb-3">
                    <div className="d-flex align-items-center">
                        <label htmlFor="vigenciaSelect1" className="form-label fw-bold" style={{ width: '125px' }}>Tipo Monitoreo</label>
                        <select className="form-select" id="vigenciaSelect1">
                        <option value="">Seleccione</option>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        </select>
                    </div>
                    </div>
                    <div className="mb-3">
                    <div className="d-flex align-items-center">
                        <label htmlFor="vigenciaSelect2" className="form-label fw-bold" style={{ width: '125px' }}>Planta</label>
                        <select className="form-select" id="vigenciaSelect2">
                        <option value="">Seleccione</option>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        </select>
                    </div>
                    </div>
                    <div className="mb-3">
                    <div className="d-flex align-items-center">
                        <label htmlFor="vigenciaSelect3" className="form-label fw-bold" style={{ width: '125px' }}>Empresa</label>
                        <select className="form-select" id="vigenciaSelect3">
                        <option value="">Seleccione</option>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        </select>
                    </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="mb-3">
                    <div className="d-flex align-items-center">
                        <label htmlFor="vigenciaSelect4" className="form-label fw-bold" style={{ width: '125px' }}>Estado</label>
                        <select className="form-select" id="vigenciaSelect4">
                        <option value="">Seleccione</option>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        </select>
                    </div>
                    </div>
                    <div className="mb-3">
                        <div className="d-flex align-items-center">
                            <label htmlFor="vigenciaSelect5" className="form-label fw-bold" style={{ width: '125px' }}>Compromiso</label>
                            <select className="form-select" id="vigenciaSelect5">
                            <option value="">Seleccione</option>
                            <option value="si">Sí</option>
                            <option value="no">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-3">
                    <div className="d-flex align-items-center">
                        <label htmlFor="vigenciaSelect5" className="form-label fw-bold" style={{ width: '125px' }}>Compromiso</label>
                        <select className="form-select" id="vigenciaSelect5">
                        <option value="">Seleccione</option>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        </select>
                    </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="mb-3">
                    <div className="d-flex align-items-center">
                        <label htmlFor="vigenciaSelect4" className="form-label fw-bold" style={{ width: '125px' }}>Desde</label>
                        <input class="form-control" type='date'/>
                    </div>
                    </div>
                    <div className="mb-3">
                        <div className="d-flex align-items-center">
                            <label htmlFor="vigenciaSelect5" className="form-label fw-bold" style={{ width: '125px' }}>Hasta</label>
                            <input class="form-control" type='date'/>
                        </div>
                    </div>
                
                </div>
                </div>
            


                <div className="d-flex justify-content-end mt-3">
                <button className="btn btn-success">Buscar</button>
                </div>
            </div>
            </div>
        <div className="d-flex justify-content-between align-items-center mb-2">
             <span className="fw-bold">Planes de acción - No cumplimiento de Seguridad</span>
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
                <th scope="col">Id Planta</th>
                <th scope="col">Planta</th>
                <th scope="col">P. Critico</th>
                <th scope="col">Observación</th>
                <th scope="col">Plan de Acción</th>
                <th scope="col">Responsable</th>
                <th scope="col">Compromiso</th>
                <th scope="col">Verificación</th>
                <th scope="col">Estado</th>
                <th scope="col">Evidencia</th>
              </tr>
            </thead>
            <tbody>
            <tr scope="row">
                <td><input type="checkbox" /></td>
                <td>1</td>
                <td>aaa</td>
                <td className="vigencia-si">Sí</td>
                <td>aaa</td>
                <td>1</td>
                <td>aaa</td>
                <td className="vigencia-si">Sí</td>
                <td>aaa</td>
               
                <td>aaa</td>
                <td><button className="btn btn-light"><i className="fas fa-pen"></i></button></td>
              </tr>
              <tr scope="row">
                <td><input type="checkbox" /></td>
                <td>1</td>
                <td>aaa</td>
                <td className="vigencia-si">Sí</td>
                <td>aaa</td>
                <td>1</td>
                <td>aaa</td>
                <td className="vigencia-si">Sí</td>
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
    
      
    
    </div>
  );
};

export default PorPlan;
