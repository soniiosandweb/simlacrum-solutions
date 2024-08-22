import { LazyLoadImage } from 'react-lazy-load-image-component';
import simulationSoftware from '../../../assests/images/home/simulation-software.png';
import { Link } from 'react-router-dom';

const SimulationSoftware = () => {

    const listPoints = [
        {
            title: "Scenario Builder",
            text: "Create custom simulation scenarios tailored to your specific training needs.",
        },
        {
            title: "Performance Analytics",
            text: "Track and analyze trainee performance with detailed reports and insights.",
        },
        {
            title: "Integration",
            text: "Seamlessly integrate our software with your existing systems and hardware for a cohesive training experience.",
        },
    ]

    return(
        <section className="home-SimulationSoftware pb-20" id="simulation_software">
            <div className='relative bg-primary-bg'>
                <div className="flex flex-col lg:flex-row gap-5 w-full max-w-6xl mx-auto items-center px-3 py-10 md:py-20">
                    
                    <div className="w-full lg:w-1/3">
                        <LazyLoadImage
                            src={simulationSoftware}
                            alt="Simulation Software"
                            className="w-full h-full object-cover lg:w-1/3 static lg:absolute top-0 left-0 pr-0 lg:pr-5"
                        />
                    </div>
                    
                    <div className="w-full lg:w-2/3 flex flex-col gap-5 items-start z-10">
                        <h3 className="text-3xl md:text-5xl bg-gradient-to-r from-primary-blue to-primary-darkBlue font-semibold text-gradient">Simulation Software</h3>
                        <p className='text-base md:text-lg opacity-60'>Our advanced simulation software solutions provide a comprehensive platform for designing, managing, and analyzing simulation training programs. These software tools offer customizable scenarios, detailed analytics, and user-friendly interfaces, making it easy to create and monitor effective training programs.</p>
                        <Link to="/contact-us" reloadDocument={true} className='bg-primary-darkBlue text-white py-3 px-6 text-md hover:bg-primary-blue'>Request For Free Demo</Link>
                        <p className='text-primary-textLight font-archivo text-150 opacity-60 absolute right-8 bottom-0 -z-10'>03</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 w-full max-w-6xl mx-auto px-3 pt-10 md:pt-20">
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

export default SimulationSoftware