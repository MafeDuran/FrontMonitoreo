import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProgramacionMonitoreo.css'; // Asegúrate de crear este archivo CSS

const InformeMensual = () => {
  const [activeTab, setActiveTab] = useState('informe_mensual');
  const navigate = useNavigate();

  const showTab = (tab) => {
    setActiveTab(tab);
  };

  const showonchange = (tab) => {
    setActiveTab(tab);
    navigate(`/home/${tab}`);
  };
  const [selectedCells, setSelectedCells] = useState([]);

  const handleCellClick = (rowIndex, colIndex) => {
    const cell = `${rowIndex}-${colIndex}`;
    setSelectedCells((prevSelected) =>
      prevSelected.includes(cell)
        ? prevSelected.filter((c) => c !== cell)
        : [...prevSelected, cell]
    );
  };

  const isSelected = (rowIndex, colIndex) => {
    return selectedCells.includes(`${rowIndex}-${colIndex}`);
  };

  return (
    <div>
      <div className="line-container">
        <span className="line-text">Programación Monitoreo</span>
        <hr className="line" />
      </div>
      <div className="header">
        <div className="tabs-datos">
          <button
            className={activeTab === 'programar' ? 'active' : ''}
            onClick={() => showonchange('programar')}
          >
           Programar
          </button>
          <button
            className={activeTab === 'informe_mensual' ? 'active' : ''}
            onClick={() => showTab('informe_mensual')}
          >
            Informe Mensual
          </button>
        </div>
      </div>
      <hr />
     
      {activeTab === 'informe_mensual' && (
        <div className="prueba">
          {/* Tabla */}
          <table className="table table-bordered custom-table">
      <thead>
        <tr>
          <th rowSpan="3">Área</th>
          <th rowSpan="3">Proceso</th>
          <th rowSpan="3">Empresa</th>
          <th rowSpan="3">Supervisor</th>
        </tr>
        <tr>
          <th colSpan="2">ENE</th>
          <th colSpan="2">FEB</th>
          <th colSpan="2">MAR</th>
          <th colSpan="2">ABR</th>
          <th colSpan="2">MAY</th>
          <th colSpan="2">JUN</th>
          <th colSpan="2">JUL</th>
          <th colSpan="2">AGO</th>
          <th colSpan="2">SEP</th>
          <th colSpan="2">OCT</th>
          <th colSpan="2">NOV</th>
          <th colSpan="2">DIC</th>
          <th colSpan="2">TOTAL</th>
        </tr>
        <tr>
          <th>Real</th>
          <th>Plan</th>
          <th>Real</th>
          <th>Plan</th>
          <th>Real</th>
          <th>Plan</th>
          <th>Real</th>
          <th>Plan</th>
          <th>Real</th>
          <th>Plan</th>
          <th>Real</th>
          <th>Plan</th>
          <th>Real</th>
          <th>Plan</th>
          <th>Real</th>
          <th>Plan</th>
          <th>Real</th>
          <th>Plan</th>
          <th>Real</th>
          <th>Plan</th>
          <th>Real</th>
          <th>Plan</th>
          <th>Real</th>
          <th>Plan</th>
          <th>Real</th>
          <th>Plan</th>
        </tr>
      </thead>
      <tbody>
        {[...Array(5)].map((_, rowIndex) => (
          <tr key={rowIndex}>
            <td>Mantención</td>
            <td>Mantención</td>
            <td>CMPC Maderas</td>
            <td>Nombre Apellido</td>
            {[...Array(24)].map((_, colIndex) => (
              <td
                key={colIndex}
                className={isSelected(rowIndex, colIndex) ? "highlighted" : ""}
                onClick={() => handleCellClick(rowIndex, colIndex)}
              >
                {/* Aquí puedes poner el contenido de la celda */}
              </td>
            ))}
            <td
              className={isSelected(rowIndex, 24) ? "highlighted" : ""}
              onClick={() => handleCellClick(rowIndex, 24)}
            >
              {/* Total Real */}
            </td>
            <td
              className={isSelected(rowIndex, 25) ? "highlighted" : ""}
              onClick={() => handleCellClick(rowIndex, 25)}
            >
              {/* Total Plan */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>


          <p>Mostrando todos los resultados</p>
          <button type="button" className="btn btn-link"><i className="fas fa-arrow-left"></i> Atrás</button>
        </div>
      )}
   
     
    </div>
  );
};

export default InformeMensual;
