import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext.jsx";
import LoaderComponent from "../components/LoaderComponent.jsx";

export default function DefaultLayout() {

    const { isLoading } = useContext(GlobalContext)

    console.log(isLoading, "from DefaultLayout");



    return (
        <>

            <Header />
            <main>
                {
                    isLoading && (
                        <LoaderComponent />
                    )
                }

                <Outlet />
            </main>
            <Footer />

        </>
    )


}