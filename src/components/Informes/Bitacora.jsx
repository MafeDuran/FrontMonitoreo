import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Informes.css'; // Asegúrate de crear este archivo CSS
import ResumenSemanal from './ResumenSemanal';
import Cumplimiento from './Cumplimiento';
import InformeDetalleSemanal from './InformeDetalleSemanal';
const Bitacora = () => {
  const [activeTab, setActiveTab] = useState('bitacora');
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
        <span className="line-text">Informes</span>
        <hr className="line" />
      </div>
      <div className="header">
        <div className="tabs-datos">
          <button
            className={activeTab === 'cumplimiento' ? 'active' : ''}
            onClick={() => showonchange('cumplimiento')}
          >
            Cumplimiento Sup.
          </button>
          <button
            className={activeTab === 'resumensemanal' ? 'active' : ''}
            onClick={() => showonchange('resumensemanal')}
          >
            Resumen Semanal
          </button>
          <button
            className={activeTab === 'inf_detalle_semanal' ? 'active' : ''}
            onClick={() => showonchange('inf_detalle_semanal')}
          >
            Inf Detalle Semanal
          </button>
          <button
            className={activeTab === 'bitacora' ? 'active' : ''}
            onClick={() => showTab('bitacora')}
          >
            Bitácora
          </button>
          <button
            className={activeTab === 'programacion_semanal' ? 'active' : ''}
            onClick={() => showonchange('programacion_semanal')}
          >
            Progr. Semanal
          </button>
        </div>
      </div>
      <hr />
      {activeTab === 'cumplimiento' && <Cumplimiento />}
      {activeTab === 'resumensemanal' && <ResumenSemanal />}
      {activeTab === 'inf_detalle_semanal' && <InformeDetalleSemanal />}
      {activeTab === 'bitacora' && (
        <div className="prueba">
         <div className="card smaller-card">
            <div className="card-body">
                <div className="row g-3">
                
                <div className="col-4 ms-4">
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
                </div>
                <div className="col-4">
                    <div className="mb-3">
                    <div className="d-flex align-items-center">
                        <label htmlFor="vigenciaSelect4" className="form-label fw-bold" style={{ width: '70px' }}>Mes</label>
                        <select className="form-select" id="vigenciaSelect4">
                        <option value="">Seleccione</option>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        </select>
                    </div>
                    </div>
                    <div className="mb-3">
                    <div className="d-flex align-items-center">
                        <label htmlFor="vigenciaSelect5" className="form-label fw-bold" style={{ width: '70px' }}>Año</label>
                        <select className="form-select" id="vigenciaSelect5">
                        <option value="">Seleccione</option>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        </select>
                    </div>
                    </div>
                </div>
                </div>
            


                <div className="d-flex justify-content-end mt-3">
                <button className="btn btn-success">Buscar</button>
                </div>
            </div>
        </div>





          {/* Botones y Barra de Búsqueda */}
          <div className="d-flex justify-content-end mb-2">
            <div className="search-container2">
              <input type="text" placeholder="Buscar..." />
              <button className="search-button">
                <i className="fa fa-search"></i>
              </button>
            </div>
            <button className="btn btn-success">
              <i className="fas fa-download"></i>
            </button>
          </div>

          {/* Tabla */}
          <table className="table table-bordered custom-table">
            <thead>
              <tr>
                <th scope="col"><input type="checkbox" /></th>
                <th scope="col">Semana</th>
                <th scope="col">Proceso</th>
                <th scope="col">Actividad Programada</th>
                <th scope="col">OBservador</th>
                <th scope="col">Programador</th>
                <th scope="col">Fecha y Hora de Programación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="checkbox" /></td>
                <td>1</td>
                <td>aaa</td>
                <td className="vigencia-si">Sí</td>
                <td>aaa</td>
                <td>aaa</td>
                <td>aaa</td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>1</td>
                <td>aaa</td>
                <td className="vigencia-si">Sí</td>
                <td>aaa</td>
                <td>aaa</td>
                <td>aaa</td>
              </tr>
            </tbody>
          </table>
          <p>Mostrando todos los resultados</p>
          <button type="button" className="btn btn-link"><i className="fas fa-arrow-left"></i> Atrás</button>
        </div>
      )}
     {activeTab === 'resumensemanal' && <ResumenSemanal />}
     
    </div>
  );
};

export default Bitacora;
