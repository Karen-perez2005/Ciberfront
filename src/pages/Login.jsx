import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  LockKeyhole,
  Mail,
  Eye,
  EyeOff,
  ArrowRight,
  Activity,
  Fingerprint,
  CheckCircle2,
} from "lucide-react";

import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Petición hacia tu backend mediante Nginx (/api/login)
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Almacenar el token JWT de forma segura en el cliente
        localStorage.setItem("token", data.token);
        
        // Redirigir al componente del Dashboard
        navigate("/dashboard");
      } else {
        alert(data.message || "Credenciales incorrectas o acceso no autorizado.");
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      alert("No se pudo conectar con el servidor backend.");
    }
  };

  return (
    <main className="login-layout">

      {/* PANEL IZQUIERDO */}
      <section className="login-showcase">
        <div className="showcase-content">

          {/* LOGOTIPO */}
          <div className="brand">
            <ShieldCheck size={32} />
            <span>
              AEGIS<span className="brand-dot">.</span>
            </span>
          </div>

          {/* PRESENTACIÓN */}
          <div className="showcase-main">

            <div className="eyebrow">
              <span className="pulse-dot" />
              SECURITY OPERATIONS PLATFORM
            </div>

            <h1>
              La seguridad comienza
              <br />
              con el <em>control.</em>
            </h1>

            <p>
              Una plataforma diseñada para gestionar el acceso
              a recursos digitales mediante una arquitectura
              de seguridad Zero Trust.
            </p>

            {/* CARACTERÍSTICAS */}
            <div className="feature-grid">

              <div className="feature">
                <Fingerprint size={24} />
                <strong>Identidad verificada</strong>
                <span>Autenticación y autorización</span>
              </div>

              <div className="feature">
                <Activity size={24} />
                <strong>Acceso supervisado</strong>
                <span>Protección de recursos</span>
              </div>

            </div>
          </div>

          {/* PIE DE PÁGINA */}
          <div className="showcase-footer">
            <span>AEGIS SECURITY © 2026</span>
            <span>ZERO TRUST ARCHITECTURE</span>
          </div>

        </div>

        {/* EFECTOS VISUALES */}
        <div className="showcase-glow" />
        <div className="showcase-grid" />
      </section>

      {/* PANEL DERECHO */}
      <section className="login-panel">

        <div className="login-form-container">

          {/* LOGO PARA MÓVILES */}
          <div className="mobile-brand">
            <ShieldCheck size={28} />
            <strong>AEGIS.</strong>
          </div>

          {/* ETIQUETA DE SEGURIDAD */}
          <div className="secure-label">
            <LockKeyhole size={15} />
            PORTAL DE ACCESO SEGURO
          </div>

          <h2>Bienvenido de nuevo</h2>

          <p className="login-subtitle">
            Ingresa tus credenciales para acceder a tu espacio
            de trabajo.
          </p>

          {/* FORMULARIO */}
          <form onSubmit={handleSubmit}>

            {/* CORREO ELECTRÓNICO */}
            <label htmlFor="email">
              Correo electrónico
            </label>

            <div className="input-wrapper">
              <Mail size={19} />

              <input
                id="email"
                type="email"
                placeholder="usuario@institucion.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="username"
                required
              />
            </div>

            {/* CONTRASEÑA */}
            <label htmlFor="password">
              Contraseña
            </label>

            <div className="input-wrapper">
              <LockKeyhole size={19} />

              <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
              >
                {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
              </button>
            </div>

            <button className="submit-button" type="submit">
              Acceder a la plataforma
              <ArrowRight size={19} />
            </button>
          </form>

          <div className="security-note">
            <CheckCircle2 size={18} />
            <span>Acceso seguro a la plataforma</span>
          </div>

          <div className="login-bottom">
            <ShieldCheck size={16} />
            Acceso exclusivo para usuarios autorizados
          </div>
        </div>
      </section>
    </main>
  );
}
