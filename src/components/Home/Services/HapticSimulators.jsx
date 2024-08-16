import { LazyLoadImage } from 'react-lazy-load-image-component';
import hapticSimulators from '../../../assests/images/home/HapticSimulators.png';
import { Link } from 'react-router-dom';

const HapticSimulators = () => {

    const listPoints = [
        {
            title: "Surgical Haptic Simulators",
            text: "Simulators for practicing surgical procedures with realistic tactile feedback.",
        },
        {
            title: "Dental Haptic Simulators",
            text: "Devices specifically designed for dental training, replicating the feel of dental tissues.",
        },
        {
            title: "Diagnostic Haptic Simulators",
            text: "Tools for practicing diagnostic techniques such as palpation and ultrasound.",
        },
        {
            title: "Customized Haptic Solutions",
            text: "Tailored haptic simulators to meet specific training needs or research requirements.",
        },
        {
            title: "Assessment and Progress Tracking",
            text: "Systems to track user performance and provide feedback on skill development.",
        },
    ]

    return(
        <section className="home-HapticSimulators py-10">
            <div className='relative bg-primary-bg'>
                <div className="flex flex-col lg:flex-row gap-5 w-full max-w-6xl mx-auto items-center pr-3 pl-3 lg:pl-0 lg:pr-10 py-10 md:py-20">
                    
                    <div className="w-full lg:w-1/3">
                        <LazyLoadImage
                            src={hapticSimulators}
                            alt="Haptic Simulators"
                            className="w-full h-full object-cover lg:w-1/3 static lg:absolute top-0 left-0 pr-0 lg:pr-5"
                        />
                    </div>
                    
                    <div className="w-full lg:w-2/3 flex flex-col gap-5 items-start z-10">
                        <h3 className="text-3xl md:text-5xl bg-gradient-to-r from-primary-blue to-primary-darkBlue font-semibold text-gradient">Haptic Simulators</h3>
                        <p className='text-base md:text-lg opacity-60'>Haptic simulators use advanced technology to provide tactile feedback during simulated procedures. These simulators enhance the learning experience by allowing users to feel the resistance and texture of tissues, improving their manual skills and dexterity.</p>
                        <Link to="#" className='bg-primary-darkBlue text-white py-3 px-6 text-md hover:bg-primary-blue'>Explore Our Solutions</Link>
                        <p className='text-primary-textLight font-archivo text-150 opacity-60 absolute right-8 bottom-0 -z-10'>09</p>
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

export default HapticSimulators