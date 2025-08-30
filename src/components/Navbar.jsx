
import { House, Search, Collection, Person } from 'react-bootstrap-icons';

export const Navbar = () => {
  return (
    <nav className=" fixed-top navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a className="navbar-brand d-flex align-items-center" href="#">
        <span className="text-success fs-4">🎵 Kodigo Music</span>
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center" href="#">
              <House className="me-1" /> Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center" href="#">
              <Search className="me-1" /> Buscar
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center" href="#">
              <Collection className="me-1" /> Biblioteca
            </a>
          </li>
        </ul>

        <a href="/login" className="btn btn-success d-flex align-items-center">
          <Person className="me-1" /> Perfil
        </a>
      </div>
    </nav>
  );
}

