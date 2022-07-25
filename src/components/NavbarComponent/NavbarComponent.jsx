import "./NavbarComponent.css";

function NavbarComponent() {
  return (
    <ul className="nav nav-pills">
      <li className="nav-item dropdown item">
        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
          about us
        </a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
          <li><a className="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </li>
      <li className="nav-item dropdown item">
        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
          our products
        </a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
          <li><a className="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </li>

      <li className="nav-item dropdown item">
        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
          intimate health
        </a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action</a></li>
        </ul>
      </li>

      <li className="nav-item item">
        <a className="nav-link">
          contact us
        </a>
      </li>
    </ul>
  );
}

export default NavbarComponent;
