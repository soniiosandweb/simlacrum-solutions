import MetaData from "../Layouts/MetaData"
import Banner from "./Banner/Banner"

const Home = () => {
    return(
        <>
            <MetaData 
                title={"Simlacrum Solutions"}
                description={"Revolutionizing Medical Training with State-of-the-Art Simulation"}
            />

            <Banner />
        </>
    )
}

export default Home