import {
  ShieldCheck,
  LayoutDashboard,
  Activity,
  Users,
  LockKeyhole,
  Bell,
  Search,
  Settings,
  LogOut,
  Menu,
  X,
  ArrowUpRight,
  Server,
  CheckCircle2,
  AlertTriangle,
  Clock3,
  Fingerprint,
} from "lucide-react";

import { useState } from "react";
import "./Dashboard.css";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, label: "Vista general", active: true },
    { icon: Activity, label: "Actividad" },
    { icon: ShieldCheck, label: "Seguridad" },
    { icon: Users, label: "Usuarios" },
    { icon: Server, label: "Infraestructura" },
    { icon: Settings, label: "Configuración" },
  ];

  const stats = [
    {
      title: "Estado del sistema",
      value: "Operativo",
      change: "Demostración",
      icon: ShieldCheck,
      type: "success",
    },
    {
      title: "Accesos autorizados",
      value: "1,284",
      change: "Datos de ejemplo",
      icon: Fingerprint,
      type: "primary",
    },
    {
      title: "Eventos registrados",
      value: "348",
      change: "Datos de ejemplo",
      icon: Activity,
      type: "info",
    },
    {
      title: "Alertas pendientes",
      value: "03",
      change: "Datos de ejemplo",
      icon: AlertTriangle,
      type: "warning",
    },
  ];
     
return (
    <div className="dashboard-layout">

      {/* MENÚ LATERAL */}
      <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>

        <div className="sidebar-brand">
          <ShieldCheck size={30} />
          <div>
            <strong>AEGIS<span>.</span></strong>
            <small>SECURITY OPERATIONS</small>
          </div>
        </div>

        <div className="sidebar-section-title">
          PLATAFORMA
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className={`nav-item ${item.active ? "active" : ""}`}
              >
                <Icon size={19} />
                <span>{item.label}</span>
                {item.active && <span className="nav-indicator" />}
              </div>
            );
          })}
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-security">
            <ShieldCheck size={22} />
            <div>
              <strong>Zero Trust</strong>
              <span>Arquitectura de seguridad</span>
            </div>
          </div>

          <div className="sidebar-profile">
            <div className="profile-avatar">K</div>
            <div className="profile-details">
              <strong>Karen</strong>
              <span>Administrador</span>
            </div>
            <LogOut size={19} />
          </div>
        </div>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <main className="dashboard-main">

        {/* BARRA SUPERIOR */}
        <header className="topbar">
          <div className="topbar-left">
            <button
              className="mobile-menu-btn"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Abrir menú"
            >
              {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <div className="breadcrumb">
              <span>Plataforma</span>
              <span>/</span>
              <strong>Vista general</strong>
            </div>
          </div>

          <div className="topbar-actions">
            <div className="topbar-status">
              <span className="status-dot" />
              Vista de demostración
            </div>

            <button className="icon-button" aria-label="Buscar">
              <Search size={19} />
            </button>

            <button className="icon-button" aria-label="Notificaciones">
              <Bell size={19} />
            </button>

            <div className="topbar-avatar">K</div>
          </div>
        </header>

{/* CONTENIDO DEL DASHBOARD */}
        <div className="dashboard-content">

          {/* BIENVENIDA */}
          <div className="welcome-section">
            <div>
              <div className="welcome-label">
                <span className="status-dot" />
                PANEL DE CONTROL
              </div>

              <h1>Centro de operaciones</h1>

              <p>
                Bienvenida, Karen. Consulta el resumen general
                de la plataforma y sus indicadores de seguridad.
              </p>
            </div>

            <div className="welcome-badge">
              <ShieldCheck size={20} />
              <span>ZERO TRUST</span>
            </div>
          </div>

          {/* AVISO DE DATOS DEMOSTRATIVOS */}
          <div className="demo-notice">
            <Activity size={18} />
            <span>
              Vista de demostración: los indicadores mostrados
              son ejemplos y no representan datos reales de AWS.
            </span>
          </div>

          {/* TARJETAS DE ESTADÍSTICAS */}
          <div className="stats-grid">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  className={`stat-card stat-${stat.type}`}
                  key={stat.title}
                >
                  <div className="stat-top">
                    <div className="stat-icon">
                      <Icon size={22} />
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="stat-arrow"
                    />
                  </div>

                  <div className="stat-value">
                    {stat.value}
                  </div>

                  <div className="stat-title">
                    {stat.title}
                  </div>

                  <div className="stat-change">
                    {stat.change}
                  </div>
                </div>
              );
            })}
          </div>

          {/* RESUMEN DE SEGURIDAD */}
          <div className="dashboard-panels">

            <section className="overview-panel">
              <div className="panel-heading">
                <div>
                  <h2>Resumen de seguridad</h2>
                  <p>Componentes de la arquitectura</p>
                </div>
                <ShieldCheck size={22} />
              </div>

              <div className="security-list">
                <div className="security-row">
                  <div className="security-row-icon">
                    <Fingerprint size={20} />
                  </div>
                  <div>
                    <strong>Autenticación de usuarios</strong>
                    <span>Integración JWT pendiente</span>
                  </div>
                  <Clock3 size={18} />
                </div>

                <div className="security-row">
                  <div className="security-row-icon">
                    <LockKeyhole size={20} />
                  </div>
                  <div>
                    <strong>Protección de recursos</strong>
                    <span>Validación desde el Backend pendiente</span>
                  </div>
                  <Clock3 size={18} />
                </div>

                <div className="security-row">
                  <div className="security-row-icon">
                    <Server size={20} />
                  </div>
                  <div>
                    <strong>Infraestructura AWS</strong>
                    <span>Verificación de servicios pendiente</span>
                  </div>
                  <Clock3 size={18} />
                </div>
              </div>
            </section>

            <section className="activity-panel">
              <div className="panel-heading">
                <div>
                  <h2>Actividad reciente</h2>
                  <p>Ejemplos de eventos de seguridad</p>
                </div>
                <Activity size={22} />
              </div>

              <div className="activity-list">
                <div className="activity-row">
                  <div className="activity-icon">
                    <CheckCircle2 size={19} />
                  </div>
                  <div>
                    <strong>Acceso autorizado</strong>
                    <span>Evento de demostración</span>
                  </div>
                </div>

                <div className="activity-row">
                  <div className="activity-icon">
                    <ShieldCheck size={19} />
                  </div>
                  <div>
                    <strong>Verificación de identidad</strong>
                    <span>Evento de demostración</span>
                  </div>
                </div>

                <div className="activity-row">
                  <div className="activity-icon">
                    <AlertTriangle size={19} />
                  </div>
                  <div>
                    <strong>Intento de acceso rechazado</strong>
                    <span>Evento de demostración</span>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}
