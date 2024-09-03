import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css'; // Importar CSS Module

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/home/inicio');
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <div className={`col-md-6 d-flex align-items-center justify-content-center position-relative ${styles.leftBg} d-none d-md-flex`}>
          <div className={styles.textTopLeft}>
            Sistema Monitoreo <br /> Control Operacional
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center bg-light p-4 p-md-5">
          <div className={`text-center w-100 ${styles.formWrapper}`}>
            <img src="assets/iconos/cmpc.svg" alt="Logo" className={styles.logoRight} />
            <h2 className="mb-4">Iniciar Sesión</h2>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
              <div className="mb-3">
                <input
                  type="email"
                  className={`form-control ${styles.formInput}`}
                  placeholder="email@cmpc.cl"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className={`form-control ${styles.formInput}`}
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-success w-100 mb-3">
                INGRESAR
              </button>
              <div className="d-flex align-items-center justify-content-center">
                <img src="assets/iconos/Azure.svg" alt="Azure Logo" className={styles.azureLogo} />
              </div>
            </form>
            <div className={`${styles.bottomRightIcon} d-flex align-items-center justify-content-center`}>
              <img src="assets/iconos/obso.svg" alt="Nuevo Icono" className={styles.iconImage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
