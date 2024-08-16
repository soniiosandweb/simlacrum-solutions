import { LazyLoadImage } from 'react-lazy-load-image-component';
import dental from '../../../assests/images/home/DentalSimulator.png';
import { Link } from 'react-router-dom';

const DentalSimulator = () => {

    const listPoints = [
        {
            title: "Virtual Reality (VR) Dental Simulators",
            text: "Immersive VR environments that simulate dental procedures, enhancing spatial awareness and technique.",
        },
        {
            title: "Augmented Reality (AR) Dental Simulators",
            text: "Integration of AR to superimpose digital information on real-world views, aiding in complex dental procedures.",
        },
        {
            title: "Physical Dental Simulators",
            text: "Realistic dental mannequins equipped with haptic feedback to mimic tactile sensations during dental procedures.",
        },
        {
            title: "Dental Procedure Training Modules",
            text: "Specialized modules for various procedures such as cavity preparation, crown placement, and root canal treatment.",
        }
    ]

    return(
        <section className="home-DentalSimulator py-10">
            <div className='relative bg-primary-bg'>
                <div className="flex flex-col lg:flex-row gap-5 w-full max-w-6xl mx-auto items-center pr-3 pl-3 lg:pl-0 lg:pr-10 py-10 md:py-20">
                    
                    <div className="w-full lg:w-1/3">
                        <LazyLoadImage
                            src={dental}
                            alt="Dental Simulator"
                            className="w-full h-full object-cover lg:w-1/3 static lg:absolute top-0 left-0 pr-0 lg:pr-5"
                        />
                    </div>
                    
                    <div className="w-full lg:w-2/3 flex flex-col gap-5 items-start z-10">
                        <h3 className="text-3xl md:text-5xl bg-gradient-to-r from-primary-blue to-primary-darkBlue font-semibold text-gradient">Dental Simulator</h3>
                        <p className='text-base md:text-lg opacity-60'>Dental simulators are cutting-edge training tools designed to replicate real-life clinical scenarios for dental students and professionals. These simulators offer a safe and controlled environment to practice and refine skills, ensuring that learners gain confidence and proficiency before treating actual patients.</p>
                        <Link to="#" className='bg-primary-darkBlue text-white py-3 px-6 text-md hover:bg-primary-blue'>Explore Our Solutions</Link>
                        <p className='text-primary-textLight font-archivo text-150 opacity-60 absolute right-8 bottom-0 -z-10'>05</p>
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

export default DentalSimulator