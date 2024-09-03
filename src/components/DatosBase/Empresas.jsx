import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './DatosBase.css'; // Asegúrate de crear este archivo CSS
import Plantas from './Plantas';
import Procesos from './Procesos';
import Areas from './Areas';
import Asignacion from './Asignacion';
const Empresas = () => {
  const [activeTab, setActiveTab] = useState('empresas');
  const location = useLocation();
  const navigate = useNavigate();
  const showTab = (tab) => {
    setActiveTab(tab);
  };
  const [modalMode, setModalMode] = useState('create'); // 'create' o 'edit'
  const [selectedItem, setSelectedItem] = useState({
    codigo: '',
    rut: '',
    empresa: '',
    vigencia: 'Sí',
  });
  const handleEditClick = (item) => {
    setSelectedItem(item);
    setModalMode('edit');
    const modalElement = document.getElementById('exampleModal');
    const modal = new window.bootstrap.Modal(modalElement); // Accede a bootstrap desde window
    modal.show();
  };
  
  const showonchange = (tab) => {
    setActiveTab(tab);
    navigate(`/home/${tab}`);
  };

  const showModal = () => {
    const modalElement = document.getElementById('exampleModal');
    const modal = new window.bootstrap.Modal(modalElement);
    modal.show();
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
            onClick={() => showonchange('areas')}
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
            onClick={() => showonchange('asignacion')}
          >
            Asignación Áreas
          </button>
          <button
            className={activeTab === 'empresas' ? 'active' : ''}
            onClick={() => showTab('empresas')}
          >
            Empresas
          </button>
        </div>
      </div>
      <hr />
      {activeTab === 'plantas' && <Plantas />}
      {activeTab === 'areas' && <Areas />}
      {activeTab === 'procesos' && <Procesos />}
      {activeTab === 'asignacion' && <Asignacion />}
      {activeTab === 'empresas' && (
        <div className="prueba">
          <div className="d-flex justify-content-end mb-2">
            <div className="search-container2">
                <input type="text" placeholder="Buscar..." />
                <button className="search-button">
                    <i className="fa fa-search"></i>
                </button>
            </div>
            <button className="btn btn-light mr-3"><i className="fas fa-filter"></i> Filtros</button>
            <button
              className="btn btn-success mr-3"
              onClick={() => {
                setModalMode('create');
                setSelectedItem({
                  codigo: '',
                  rut: '',
                  empresa: '',
                  vigencia: 'Sí',
                });
                showModal(); // Función para mostrar el modal
              }}
            >
              <i className="fas fa-plus"></i> Añadir Nuevo
            </button>
            <button className="btn btn-success mr-3"><i className="fas fa-cogs"></i></button>
            <button className="btn btn-success mr-3"><i className="fas fa-trash"></i></button>
            <button className="btn btn-success"><i className="fas fa-download"></i></button>
          </div>
          <table className="table table-bordered custom-table">
            <thead>
              <tr>
                <th scope="col"><input type="checkbox" /></th>
                <th scope="col">Código</th>
                <th scope="col">RUT</th>
                <th scope="col">Empresa</th>
                <th scope="col">Vigencia</th>
                <th scope="col">Modificar</th>
              </tr>
            </thead>
            <tbody>
              {[
                { codigo: '1', rut: '12345678-9', empresa: 'Empresa A', vigencia: 'Sí' },
                { codigo: '2', rut: '87654321-0', empresa: 'Empresa B', vigencia: 'No' },
                { codigo: '3', rut: '11223344-5', empresa: 'Empresa C', vigencia: 'Sí' },
                { codigo: '4', rut: '55443322-1', empresa: 'Empresa D', vigencia: 'No' },
                { codigo: '5', rut: '66778899-0', empresa: 'Empresa E', vigencia: 'Sí' },
              ].map((item) => (
                <tr key={item.codigo}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{item.codigo}</td>
                  <td>{item.rut}</td>
                  <td>{item.empresa}</td>
                  <td className={`vigencia-${item.vigencia.toLowerCase()}`}>
                    {item.vigencia}
                  </td>
                  <td>
                    <button
                      className="btn btn-light"
                      onClick={() => handleEditClick(item)}
                    >
                      <i className="fas fa-pen"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>Mostrando todos los resultados</p>
          <button type="button" className="btn btn-link"><i className="fas fa-arrow-left"></i> Atrás</button>
        </div>
      )}
      
      {/* Modal */}
         {/* Modal */}
         <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                <strong>
                  {modalMode === 'create' ? 'Nueva Empresa' : 'Editar Empresa'}
                </strong>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form id="formModal">
                <div className="form-group mb-3">
                  <label htmlFor="codigo">Código</label>
                  <input
                    type="text"
                    className="form-control"
                    id="codigo"
                    value={selectedItem.codigo}
                    readOnly={modalMode === 'edit'} 
                    onChange={(e) =>
                      setSelectedItem({
                        ...selectedItem,
                        codigo: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="rut">RUT</label>
                  <input
                    type="text"
                    className="form-control"
                    id="rut"
                    value={selectedItem.rut}
                    onChange={(e) =>
                      setSelectedItem({
                        ...selectedItem,
                        rut: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="empresa">Empresa</label>
                  <input
                    type="text"
                    className="form-control"
                    id="empresa"
                    value={selectedItem.empresa}
                    onChange={(e) =>
                      setSelectedItem({
                        ...selectedItem,
                        empresa: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="vigencia">Vigencia</label>
                  <select
                    className="form-select form-select-sm"
                    id="vigencia"
                    value={selectedItem.vigencia}
                    onChange={(e) =>
                      setSelectedItem({
                        ...selectedItem,
                        vigencia: e.target.value,
                      })
                    }
                  >
                    <option value="Sí">Sí</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer border-0">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" className="btn btn-success">
                {modalMode === 'create' ? 'Guardar' : 'Actualizar'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empresas;
