import { LazyLoadImage } from 'react-lazy-load-image-component';
import simulationLab from '../../../assests/images/home/simulation-lab-img.png';
import { Link } from 'react-router-dom';

const SimulationLabs = () => {

    const listPoints = [
        {
            title: "Emergency Simulation",
            text: "High-fidelity simulations for emergency scenarios, helping professionals improve their response times and decision-making skills.",
        },
        {
            title: "Surgical Simulation",
            text: "Detailed, realistic simulations for various surgical procedures, enhancing precision and proficiency.",
        },
        {
            title: "Nursing Simulation",
            text: "Comprehensive training modules for nursing practices, focusing on patient care, critical thinking, and clinical skills.",
        },
    ]

    return(
        <section className="home-simulation-labs pb-10" id="simulation_labs">
            <div className='relative bg-primary-bg'>
                <div className="flex flex-col lg:flex-row gap-5 w-full max-w-6xl mx-auto items-center px-3 py-10 md:py-20">
                    
                    <div className="w-full lg:w-1/3">
                        <LazyLoadImage
                            src={simulationLab}
                            alt="Simulation Labs"
                            className="w-full h-full object-cover lg:w-1/3 static lg:absolute top-0 left-0 pr-0 lg:pr-5"
                        />
                    </div>
                    
                    <div className="w-full lg:w-2/3 flex flex-col gap-5 items-start z-10">
                        <h3 className="text-3xl md:text-5xl bg-gradient-to-r from-primary-blue to-primary-darkBlue font-semibold text-gradient">Simulation Labs</h3>
                        <p className='text-base md:text-lg opacity-60'>Our state-of-the-art simulation labs offer a highly realistic training environment for healthcare professionals. Equipped with the latest technology, these labs mimic real-world clinical settings, allowing trainees to practice and refine their skills in a controlled, safe environment. From emergency response to routine procedures, our simulation labs provide the hands-on experience necessary for effective learning and skill development.</p>
                        <Link to="#" className='bg-primary-darkBlue text-white py-3 px-6 text-md hover:bg-primary-blue'>Request For Free Demo</Link>
                        <p className='text-primary-textLight font-archivo text-150 opacity-60 absolute right-8 bottom-0 -z-10'>01</p>
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

export default SimulationLabs