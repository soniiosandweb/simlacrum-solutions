import { Link } from "react-router-dom"
import MetaData from "./MetaData"

const PageNotFound = () => {

    return(
        <>
            <MetaData title={"Page Not Found - Simulacrum Solutions"} />

            <section className="max-w-6xl m-auto py-14 px-2.5 text-center flex flex-col gap-5">
                <h3 className="w-fit mx-auto text-8xl bg-gradient-to-r from-primary-blue to-primary-darkBlue font-semibold text-gradient pt-1 text-center">404</h3>
                <p className="text-2xl">Oops! That page can't be found.</p>
                <div className="w-20 h-1 bg-black m-auto"></div>
                <p className="max-w-md mx-auto">We're really sorry but we can't seem to find the page you were looking for.</p>

                <Link to="/" reloadDocument={true} className='w-fit mx-auto bg-primary-darkBlue text-white py-3 px-6 text-md hover:bg-primary-blue'>Back to home</Link>
            </section>
        </>
    )
}

export default PageNotFound