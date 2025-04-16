import { Outlet } from "react-router-dom";



export default function DefaultLayout() {

    return (
        <>

            <header>
                <nav className="navbar navbar-expand navbar-light bg-light">
                    <div className="nav navbar-nav">
                        <a className="nav-item nav-link active" href="#" aria-current="page"
                        >Home <span className="visually-hidden">(current)</span></a>

                        <a className="nav-item nav-link" href="#">Home</a>
                    </div>
                </nav>

            </header>
            <main>
                <Outlet />
            </main>
            <footer><h3>footer</h3></footer>

        </>
    )


}