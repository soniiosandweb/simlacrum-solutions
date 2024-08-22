import { LazyLoadImage } from 'react-lazy-load-image-component';
import mannequins from '../../../assests/images/home/Mannequin-Based.png';
import { Link } from 'react-router-dom';

const MannequinBased = () => {

    const listPoints = [
        {
            title: "High-Fidelity Mannequins",
            text: "Advanced mannequins capable of simulating complex physiological functions and responses.",
        },
        {
            title: "Task Trainers",
            text: "Mannequins designed for specific procedural training such as intubation, CPR, and IV insertion.",
        },
        {
            title: "Scenario Programming",
            text: "Customizable software for creating and running diverse clinical scenarios.",
        },
        {
            title: "Multi-Disciplinary Training",
            text: "Scenarios designed for training multiple disciplines within healthcare simultaneously.",
        },
        {
            title: "Simulation Management Systems",
            text: "Tools for organizing, running, and debriefing mannequin-based simulation sessions.",
        },
    ]

    return(
        <section className="home-MannequinBased pb-20" id="mannequin_based">
            <div className='relative bg-primary-grey'>
                <div className="flex flex-col lg:flex-row gap-5 w-full max-w-6xl mx-auto items-center px-3 py-10 md:py-20">
                    
                    <div className="w-full lg:w-2/3 flex flex-col gap-5 items-start z-10 py-10">
                        <h3 className="text-3xl md:text-5xl bg-gradient-to-r from-primary-blue to-primary-darkBlue font-semibold text-gradient">Mannequin-Based Simulations</h3>
                        <p className='text-base md:text-lg opacity-60 text-white'>Mannequin-based simulations use life-sized mannequins to replicate real patient conditions and scenarios. These high-fidelity mannequins can simulate various physiological responses, providing a realistic and immersive training experience.</p>
                        <Link to="#" className='hidden bg-primary-darkBlue text-white py-3 px-6 text-md hover:bg-primary-blue'>Request For Free Demo</Link>
                        <p className='text-primary-textLight font-archivo text-150 opacity-10 absolute left-auto lg:left-8 right-8 lg:right-auto top-0 lg:top-auto bottom-auto lg:bottom-0 -z-10'>12</p>
                    </div>
                    <div className="w-full lg:w-1/3">
                        <LazyLoadImage
                            src={mannequins}
                            alt="Mannequin-Based Simulations"
                            className="w-full h-full object-cover lg:w-1/3 static lg:absolute top-0 right-0 pl-0 lg:pl-5"
                        />
                    </div>

                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 w-full max-w-6xl mx-auto px-3 pt-10 md:pt-20">
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

export default MannequinBased