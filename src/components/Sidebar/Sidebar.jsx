import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const menuMap = {
  "datos-base": ["plantas", "areas", "procesos", "asignacion", "empresas"],
  "informes": ["cumplimiento", "resumensemanal", "inf_detalle_semanal","bitacora", "programacion_semanal"],
  "monitoreo": ["registro", "consulta", "imprimible"],
  "puntos": ["ambiente", "seguridad", "detalle", "detalle_ambiente", "detalle_seguridad", "cargar_excel"],
  "datos-usuarios": ["nuevousuario", "usuarios", "lideres", "supervisores"],
  "prog_monitoreo": ["informe_mensual", "programar"],
  "planes": ["por_monitoreo", "plan_de_accion"],
};

const Sidebar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("inicio");
  const [openSubmenu, setOpenSubmenu] = useState(null);

  useEffect(() => {
    const path = location.pathname.split("/home/")[1] || "inicio";
    setActiveTab(path);

    const newSubmenu = Object.keys(menuMap).find(submenu =>
      menuMap[submenu].includes(path)
    );
    setOpenSubmenu(newSubmenu || null);
  }, [location]);

  const handleTabClick = (target) => {
    setActiveTab(target);
    if (!Object.keys(menuMap).includes(target)) {
      setOpenSubmenu(null);
    }
  };

  const handleSubmenuToggle = (submenu, event) => {
    event.preventDefault();
    setOpenSubmenu(openSubmenu === submenu ? null : submenu);
  };

  const renderSubmenuItems = (items) => (
    <ul className="submenu-items">
      {items.map(({ path, label }) => (
        <li key={path}>
          <Link
            to={`/home/${path}`}
            className={activeTab === path ? "active" : ""}
            onClick={() => handleTabClick(path)}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="sidebar">
      <h1>
        Sist. Monitoreo <br />
        Control Operacional
      </h1>
      <div className="user-info">
        <p>
          Nombre, Apellido
          <br />
          <strong>Administrador</strong>
        </p>
      </div>
      <ul className="menu">
        <li>
          <Link
            to="/home/inicio"
            className={activeTab === "inicio" ? "active" : ""}
            onClick={() => handleTabClick("inicio")}
          >
            <img
              src="../assets/iconos/icon-vector-inicio.svg"
              alt="Inicio"
              className="iconos"
            />
            Página de Inicio
          </Link>
        </li>

        {/***************************** Sidebar Monitoreo ******************************/}
        <li className={`submenu ${openSubmenu === "monitoreo" ? "open" : ""}`}>
          <a href="#" onClick={(e) => handleSubmenuToggle("monitoreo", e)}>
            <img
              src="../assets/iconos/icon-monitoreos.svg"
              alt="Registros"
              className="iconos"
            />
            Monitoreo
          </a>
          {renderSubmenuItems([
            { path: "registro", label: "Registro" },
            { path: "consulta", label: "Consulta" },
           
          ])}
        </li>

        {/***************************** Sidebar Informes ******************************/}
        <li className={`submenu ${openSubmenu === "informes" ? "open" : ""}`}>
          <a href="#" onClick={(e) => handleSubmenuToggle("informes", e)}>
            <img
              src="../assets/iconos/icon-informes.svg"
              alt="Informes"
              className="iconos"
            />
            Informes
          </a>
          {renderSubmenuItems([
            { path: "cumplimiento", label: "Cumplimiento Sub" },
            { path: "resumensemanal", label: "Resumen Semanal" },
            { path: "inf_detalle_semanal", label: "Inf. Det. Semanal" },
            { path: "bitacora", label: "Bitácora" },
            { path: "programacion_semanal", label: "Programación Semanal" },
          ])}
        </li>

        {/***************************** Sidebar Puntos a Evaluar ******************************/}
        <li className={`submenu ${openSubmenu === "puntos" ? "open" : ""}`}>
          <a href="#" onClick={(e) => handleSubmenuToggle("puntos", e)}>
          <img
              src="../assets/iconos/icon-puntos-a-evaluar.svg"
              alt="Informes"
              className="iconos"
            />
            Puntos a Evaluar
          </a>
          {renderSubmenuItems([
            { path: "ambiente", label: "Mon. Med. Ambiente" },
            { path: "seguridad", label: "Mon. Seguridad" },
            { path: "detalle", label: "Detalle Med. Ambiente" },
            { path: "detalle_seguridad", label: "Detalle Seguridad" },
            { path: "cargar_excel", label: "Carga Excel" },
          ])}
        </li>

        {/***************************** Sidebar Programar Monitoreo ******************************/}
        <li className={`submenu ${openSubmenu === "prog_monitoreo" ? "open" : ""}`}>
          <a href="#" onClick={(e) => handleSubmenuToggle("prog_monitoreo", e)}>
            <img
              src="../assets/iconos/icon-programar-monitoreo.svg"
              alt="Programar Monitoreo"
              className="iconos"
            />
            Programar Monitoreo
          </a>
          {renderSubmenuItems([
            { path: "programar", label: "Programar" },
            { path: "informe_mensual", label: "Informe Mensual" },
          ])}
        </li>

        {/***************************** Sidebar Planes de Acción ******************************/}
        <li className={`submenu ${openSubmenu === "planes" ? "open" : ""}`}>
          <a href="#" onClick={(e) => handleSubmenuToggle("planes", e)}>
            <img
              src="../assets/iconos/icon-programar-monitoreo.svg"
              alt="Planes de Acción"
              className="iconos"
            />
            Planes de Acción
          </a>
          {renderSubmenuItems([
            { path: "por_monitoreo", label: "Por Monitoreo" },
            { path: "plan_de_accion", label: "Por Plan de Acción" },
          ])}
        </li>

        {/***************************** Sidebar Datos Base ******************************/}
        <li className={`submenu ${openSubmenu === "datos-base" ? "open" : ""}`}>
          <a href="#" onClick={(e) => handleSubmenuToggle("datos-base", e)}>
            <img
              src="../assets/iconos/icon-datos-base.svg"
              alt="Datos Base"
              className="iconos"
            />
            Datos Base
          </a>
          {renderSubmenuItems([
            { path: "plantas", label: "Plantas" },
            { path: "areas", label: "Áreas" },
            { path: "procesos", label: "Procesos" },
            { path: "asignacion", label: "Asignación de Áreas" },
            { path: "empresas", label: "Empresas" },
          ])}
        </li>

        {/***************************** Sidebar Usuarios ******************************/}
        <li className={`submenu ${openSubmenu === "datos-usuarios" ? "open" : ""}`}>
          <a href="#" onClick={(e) => handleSubmenuToggle("datos-usuarios", e)}>
          <img
              src="../assets/iconos/icon-usuarios.svg"
              alt="Planes de Acción"
              className="iconos"
            />
            Usuarios
          </a>
          {renderSubmenuItems([
            { path: "nuevousuario", label: "Nuevo Usuario" },
            { path: "usuarios", label: "Usuarios" },
            { path: "lideres", label: "Líderes" },
            { path: "supervisores", label: "Supervisores" },
          ])}
        </li>

        <li>
          <Link
            to="/"
            className={activeTab === "cerrar-sesion" ? "active" : ""}
            onClick={() => handleTabClick("cerrar-sesion")}
          >
           <img
              src="../assets/iconos/icon-cerrar-sesion.svg"
              alt="Cerrar Sesion"
              className="iconos"
            />Cerrar Sesión
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
