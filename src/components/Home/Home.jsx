// src/components/Home/Home.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Inicio from '../Inicio/Inicio';
import Plantas from '../DatosBase/Plantas';
import Monitoreo from '../Monitoreo/Registro';
import Areas from '../DatosBase/Areas';
import Procesos from '../DatosBase/Procesos';
import Asignacion from '../DatosBase/Asignacion';
import Empresas from '../DatosBase/Empresas';
import Consulta from '../Monitoreo/Consulta';
import Imprimible from '../Monitoreo/Imprimible';
import NuevoUsuario from '../Usuarios/NuevoUsuario';
import Usuarios from '../Usuarios/Usuarios';
import Lideres from '../Usuarios/Lideres';
import Supervisores from '../Usuarios/Supervisores';
import Cumplimiento from '../Informes/Cumplimiento';
import ResumenSemanal from '../Informes/ResumenSemanal';
import InformeDetalleSemanal from '../Informes/InformeDetalleSemanal';
import Bitacora from '../Informes/Bitacora';
import ProgramacionSemanal from '../Informes/ProgramacionSemanal';
import Programar from '../ProgramacionMonitoreo/Programar';
import './Home.css';
import MonAmbiente from '../PuntosaEvaluar/MonAmbiente';
import MonSeguridad from '../PuntosaEvaluar/MonSeguridad';
import DetalleAmbiente from '../PuntosaEvaluar/DetalleAmbiente';
import DetalleSeguridad from '../PuntosaEvaluar/DetalleSeguridad';
import CargarExcel from '../PuntosaEvaluar/CargarExcel';
import PorPlan from '../PlanesdeAccion/PorPlan';
import PorMonitoreo from '../PlanesdeAccion/PorMonitoreo';
import InformeMensual from '../ProgramacionMonitoreo/InformeMensual';
const Home = () => {
  const location = useLocation();
  const path = location.pathname.split('/').pop();
  return (
    <div className="home">
      <Sidebar />
      <div className="main-content">
      {path === 'inicio' && (
        <div className="search-container">
          <input type="text" placeholder="Buscar..." />
          <button>
            <i className="fa fa-search"></i>
          </button>
        </div>
      )}

        <div className="content-area" id="content-area">
          <Routes>
            <Route path="inicio" element={<Inicio />} />
            <Route path="plantas" element={<Plantas />} />
            <Route path="registro" element={<Monitoreo />} />
            <Route path="areas" element={<Areas />} />
            <Route path="procesos" element={<Procesos />} />
            <Route path="asignacion" element={<Asignacion />} />
            <Route path="empresas" element={<Empresas />} />
            <Route path="consulta" element={<Consulta />} />
            <Route path="imprimible" element={<Imprimible />} />
            <Route path="nuevousuario" element={<NuevoUsuario />} />
            <Route path="usuarios" element={<Usuarios />} />
            <Route path="lideres" element={<Lideres />} />
            <Route path="supervisores" element={<Supervisores />} />
            <Route path="cumplimiento" element={<Cumplimiento />} />
            <Route path="resumensemanal" element={<ResumenSemanal />} />
            <Route path="inf_detalle_semanal" element={<InformeDetalleSemanal />} />
            <Route path="bitacora" element={<Bitacora />} />
            <Route path="programacion_semanal" element={<ProgramacionSemanal />} />
            <Route path="programar" element={<Programar />} />
            <Route path="ambiente" element={<MonAmbiente />} />
            <Route path="seguridad" element={<MonSeguridad />} />
            <Route path="detalle" element={<DetalleAmbiente />} />
            <Route path="detalle_seguridad" element={<DetalleSeguridad />} />
            <Route path="cargar_excel" element={<CargarExcel />} />
            <Route path="plan_de_accion" element={<PorPlan />} />
            <Route path="por_monitoreo" element={<PorMonitoreo />} />
            <Route path="informe_mensual" element={<InformeMensual />} />
            {/* Añade más rutas para otras secciones aquí */}
          </Routes>
        </div>
      </div>

      <footer className="footer">
        <img src="../../assets/iconos/cmpc.svg" alt="Logo" className="footer-logo" />
      </footer>
    </div>
  );
};

export default Home;
