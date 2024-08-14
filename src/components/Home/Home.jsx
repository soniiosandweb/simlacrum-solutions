import MetaData from "../Layouts/MetaData"
import AboutSection from "./AboutSection/AboutSection"
import Banner from "./Banner/Banner"
import AnatomyModels from "./Services/AnatomyModels"
import AnatomyTables from "./Services/AnatomyTables"
import DentalSimulator from "./Services/DentalSimulator"
import HapticSimulators from "./Services/HapticSimulators"
import HybridSimulations from "./Services/HybridSimulations"
import InSituSimulations from "./Services/InSituSimulations"
import MannequinBased from "./Services/MannequinBased"
import SimulationEquipment from "./Services/SimulationEquipment"
import SimulationLabs from "./Services/SimulationLabs"
import SimulationSoftware from "./Services/SimulationSoftware"
import StandardizedPatients from "./Services/StandardizedPatients"
import VirtualTraining from "./Services/VirtualTraining"

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
            <VirtualTraining />
            <SimulationSoftware />
            <SimulationEquipment />
            <DentalSimulator />
            <AnatomyTables />
            <AnatomyModels />
            <StandardizedPatients />
            <HapticSimulators />
            <HybridSimulations />
            <InSituSimulations />
            <MannequinBased />
        </>
    )
}

export default Home