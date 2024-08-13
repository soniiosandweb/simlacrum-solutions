import MetaData from "../Layouts/MetaData"
import AboutSection from "./AboutSection/AboutSection"
import Banner from "./Banner/Banner"
import SimulationLabs from "./Services/SimulationLabs"

const Home = () => {
    return(
        <>
            <MetaData 
                title={"Simlacrum Solutions"}
                description={"Revolutionizing Medical Training with State-of-the-Art Simulation"}
            />

            <Banner />
            <AboutSection />
            <SimulationLabs />
        </>
    )
}

export default Home