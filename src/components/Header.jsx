import { NavLink } from "react-router-dom"


export default function Header() {

    return (
        <header>
            <nav className="navbar navbar-expand navbar-light bg-dark ">
                <div className="nav navbar-nav ">
                    <NavLink className="nav-link " style={{ color: 'white' }} to="/">Home </NavLink>
                </div>
            </nav>

        </header>

    )

}