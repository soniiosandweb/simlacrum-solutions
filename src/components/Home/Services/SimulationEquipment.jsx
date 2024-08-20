import { LazyLoadImage } from 'react-lazy-load-image-component';
import simulationEquipment from '../../../assests/images/home/simulation-equipment.png';
import { Link } from 'react-router-dom';

const SimulationEquipment = () => {

    const listPoints = [
        {
            title: "Manikins",
            text: "High-fidelity manikins that simulate real-life patient conditions, allowing for comprehensive hands-on training.",
        },
        {
            title: "Task Trainers",
            text: "Specialized trainers for practicing specific skills such as IV insertion, catheterization, and airway management.",
        },
        {
            title: "Diagnostic Tools",
            text: "Realistic diagnostic tools, including ultrasound simulators and stethoscopes, for training accurate diagnosis and patient assessment.",
        },
    ]

    return(
        <section className="home-SimulationEquipment py-10" id="simulation_equipment">
            <div className='relative bg-primary-grey'>
                <div className="flex flex-col lg:flex-row gap-5 w-full max-w-6xl mx-auto items-center px-3 py-10 md:py-20">
                    
                    <div className="w-full lg:w-2/3 flex flex-col gap-5 items-start z-10 py-10">
                        <h3 className="text-3xl md:text-5xl bg-gradient-to-r from-primary-blue to-primary-darkBlue font-semibold text-gradient">Simulation Equipment</h3>
                        <p className='text-base md:text-lg opacity-60 text-white'>We provide a wide range of high-quality simulation equipment designed to meet the diverse needs of healthcare training programs. From manikins and task trainers to advanced diagnostic tools, our equipment ensures realistic and effective training experiences.</p>
                        <Link to="#" className='hidden bg-primary-darkBlue text-white py-3 px-6 text-md hover:bg-primary-blue'>Request For Free Demo</Link>
                        <p className='text-primary-textLight font-archivo text-150 opacity-10 absolute left-auto lg:left-8 right-8 lg:right-auto top-0 lg:top-auto bottom-auto lg:bottom-0 -z-10'>04</p>
                    </div>
                    <div className="w-full lg:w-1/3">
                        <LazyLoadImage
                            src={simulationEquipment}
                            alt="Simulation Equipment"
                            className="w-full h-full object-cover lg:w-1/3 static lg:absolute top-0 right-0 pl-0 lg:pl-5"
                        />
                    </div>

                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 w-full max-w-6xl mx-auto px-3 pt-20">
                {listPoints.map((item,i) => (
                    <div className='w-full flex flex-col gap-5' key={i}>
                        <h4 className="w-fit text-xl md:text-2xl bg-gradient-to-r from-primary-blue to-primary-darkBlue font-semibold text-gradient">{item.title}</h4>
                        <p className='opacity-60'>{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SimulationEquipment