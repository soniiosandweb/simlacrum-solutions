import { LazyLoadImage } from 'react-lazy-load-image-component';
import hybridSimulations from '../../../assests/images/home/HybridSimulations.png';
import { Link } from 'react-router-dom';

const HybridSimulations = () => {

    const listPoints = [
        {
            title: "Scenario Design and Development",
            text: "Creation of complex training scenarios that blend multiple simulation techniques.",
        },
        {
            title: "Integration of Technologies",
            text: "Seamless integration of SPs, mannequins, and VR/AR tools for realistic simulations.",
        },
        {
            title: "Interprofessional Training",
            text: "Scenarios designed for collaborative practice among different healthcare professionals",
        },
        {
            title: "Debriefing and Analysis Tools",
            text: "Systems for thorough debriefing and analysis of hybrid simulation sessions.",
        },
        {
            title: "Customizable Hybrid Simulations",
            text: "Development of customized hybrid simulations to address specific training objectives.",
        },
    ]

    return(
        <section className="home-HybridSimulations py-10">
            <div className='relative bg-primary-grey'>
                <div className="flex flex-col lg:flex-row gap-5 w-full max-w-6xl mx-auto items-center pr-3 pl-3 lg:pl-0 lg:pr-10 py-10 md:py-20">
                    
                    <div className="w-full lg:w-2/3 flex flex-col gap-5 items-start z-10">
                        <h3 className="text-3xl md:text-5xl bg-gradient-to-r from-primary-blue to-primary-darkBlue font-semibold text-gradient">Hybrid Simulations</h3>
                        <p className='text-base md:text-lg opacity-60 text-white'>Hybrid simulations combine various simulation modalities to create comprehensive training scenarios. These simulations integrate standardized patients, mannequins, and virtual reality to offer a holistic learning experience.</p>
                        <Link to="#" className='bg-primary-darkBlue text-white py-3 px-6 text-md hover:bg-primary-blue'>Explore Our Solutions</Link>
                        <p className='text-primary-textLight font-archivo text-150 opacity-10 absolute left-8 top-0 lg:top-auto bottom-auto lg:bottom-0 -z-10'>10</p>
                    </div>
                    <div className="w-full lg:w-1/3">
                        <LazyLoadImage
                            src={hybridSimulations}
                            alt="Hybrid Simulations"
                            className="w-full h-full object-cover lg:w-1/3 static lg:absolute top-0 right-0 pl-0 lg:pl-5"
                        />
                    </div>

                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 w-full max-w-6xl mx-auto px-3 pt-20">
                {listPoints.map((item,i) => (
                    <div className='w-full flex flex-col gap-5' key={i}>
                        <h4 className="text-xl md:text-2xl bg-gradient-to-r from-primary-blue to-primary-darkBlue font-semibold text-gradient">{item.title}</h4>
                        <p className='opacity-60'>{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HybridSimulations