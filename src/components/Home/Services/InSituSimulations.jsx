import { LazyLoadImage } from 'react-lazy-load-image-component';
import inSituSimulations from '../../../assests/images/home/InSituSimulations.png';
import { Link } from 'react-router-dom';

const InSituSimulations = () => {

    const listPoints = [
        {
            title: "Environmental Assessment",
            text: "Evaluation of clinical environments to identify potential areas for improvement.",
        },
        {
            title: "Scenario-Based Training",
            text: "Realistic scenarios tailored to the specific clinical setting and team dynamics.",
        },
        {
            title: "Team-Based Simulations",
            text: "Focus on teamwork, communication, and crisis management in the actual work environment.",
        },
        {
            title: "System and Process Testing",
            text: "Use of simulations to test and refine clinical systems and processes.",
        },
        {
            title: "Post-Simulation Debriefing",
            text: "Comprehensive debriefing sessions to discuss performance, identify gaps, and implement improvements.",
        },
    ]

    return(
        <section className="home-HapticSimulators py-10 md:py-20">
            <div className='relative bg-primary-bg'>
                <div className="flex flex-col lg:flex-row gap-5 w-full max-w-6xl mx-auto items-center pr-3 pl-3 lg:pl-0 lg:pr-10 py-10 md:py-20">
                    
                    <div className="w-full lg:w-1/3">
                        <LazyLoadImage
                            src={inSituSimulations}
                            alt="In Situ Simulations"
                            className="w-full h-full object-cover lg:w-1/3 static lg:absolute top-0 left-0 pr-0 lg:pr-5"
                        />
                    </div>
                    
                    <div className="w-full lg:w-2/3 flex flex-col gap-5 items-start z-10">
                        <h3 className="text-5xl bg-gradient-to-r from-primary-blue to-primary-darkBlue font-semibold text-gradient">In Situ Simulations</h3>
                        <p className='text-lg opacity-60'>In situ simulations are conducted in the actual clinical environment where healthcare providers work. These simulations help identify system issues, enhance team communication, and improve patient safety by practicing real-life scenarios in the real-world setting.</p>
                        <Link to="#" className='bg-primary-darkBlue text-white py-3 px-6 text-md hover:bg-primary-blue'>Explore Our Solutions</Link>
                        <p className='text-primary-textLight font-archivo text-150 opacity-60 absolute right-8 bottom-0 -z-10'>11</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 w-full max-w-6xl mx-auto px-3 pt-20">
                {listPoints.map((item,i) => (
                    <div className='w-full flex flex-col gap-5' key={i}>
                        <h4 className="w-max text-2xl bg-gradient-to-r from-primary-blue to-primary-darkBlue font-semibold text-gradient">{item.title}</h4>
                        <p className='opacity-60'>{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default InSituSimulations