// src/components/Navbar.jsx
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <>
      <>
            <nav className="navbar navbar-expand-lg navbar-dark menu shadow fixed-top">
                <div className="container">
                <a
                className="navbar-brand flex items-center gap-2 text-2xl font-bold text-indigo-700"
                href=""
                >
                <i className="fas fa-star text-yellow-400"></i>
                Andi
                </a>


                <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">
                            Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/portfolio">
                           Portofolio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/service">
                            Service
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">
                            Contact
                            </Link>
                        </li>
                        </ul>

                    <button type="button" className="rounded-pill btn-rounded">
                    +62-8522-1694-067
                    <span>
                        <i className="fas fa-phone-alt" />
                    </span>
                    </button>
               
               
                </div>
            </nav>


























</>


    
     
    </>
  );
}

export default Navbar;