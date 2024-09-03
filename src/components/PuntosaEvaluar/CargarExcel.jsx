import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CargarEXcel = () => {
  const [activeTab, setActiveTab] = useState('cargar_excel');
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
            onClick={() => showonchange('seguridad')}
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
            className={activeTab === 'cargar_excel' ? 'active' : ''}
            onClick={() => showTab('cargar_excel')}
          >
            Carga Excel
          </button>
        </div>
      </div>
      <hr />
      {activeTab === 'cargar_excel' && (
        <div className="prueba">
          <div className="card smaller-card">
            <div className="card-body">
               <h5 className="card-title">Mon. Medio Ambiente</h5>
                    <div className="d-flex flex-wrap">
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
                    <hr className="my-4" />
                    <h5 className="card-title">Mon. Seguridad</h5>
                    <div className="d-flex flex-wrap">
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
        </div>


          
        
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

export default CargarEXcel;
