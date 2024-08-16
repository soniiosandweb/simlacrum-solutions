import { LazyLoadImage } from 'react-lazy-load-image-component';
import virtualTraining from '../../../assests/images/home/virtual-training.png';
import { Link } from 'react-router-dom';

const VirtualTraining = () => {

    const listPoints = [
        {
            title: "Patient Interaction",
            text: "VR scenarios that simulate patient interactions, enhancing communication and empathy skills.",
        },
        {
            title: "Procedure Training",
            text: "Step-by-step VR guides for medical procedures, offering hands-on practice without the need for physical resources.",
        },
        {
            title: "Emergency Response",
            text: "Real-time VR simulations of emergency situations, improving quick thinking and action under pressure.",
        },
    ]

    return(
        <section className="home-VirtualTraining py-10">
            <div className='relative bg-primary-grey'>
                <div className="flex flex-col lg:flex-row gap-5 w-full max-w-6xl mx-auto items-center pr-3 pl-3 lg:pl-0 lg:pr-10 py-10 md:py-20">
                    
                    <div className="w-full lg:w-2/3 flex flex-col gap-5 items-start z-10">
                        <h3 className="text-3xl md:text-5xl bg-gradient-to-r from-primary-blue to-primary-darkBlue font-semibold text-gradient">Virtual Reality Training</h3>
                        <p className='text-base md:text-lg opacity-60 text-white'>Immerse your team in lifelike clinical scenarios with our cutting-edge virtual reality (VR) training solutions. VR technology offers an unparalleled level of engagement and realism, allowing healthcare professionals to experience and react to complex situations in a risk-free environment. Our VR training modules cover a wide range of medical procedures and patient interactions, providing a valuable tool for continuous learning and improvement.</p>
                        <Link to="#" className='bg-primary-darkBlue text-white py-3 px-6 text-md hover:bg-primary-blue'>Explore Our Solutions</Link>
                        <p className='text-primary-textLight font-archivo text-150 opacity-10 absolute left-8 top-0 lg:top-auto bottom-auto lg:bottom-0 -z-10'>02</p>
                    </div>
                    <div className="w-full lg:w-1/3">
                        <LazyLoadImage
                            src={virtualTraining}
                            alt="Virtual Reality Training"
                            className="w-full h-full object-cover lg:w-1/3 static lg:absolute top-0 right-0 pl-0 lg:pl-5"
                        />
                    </div>

                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 w-full max-w-6xl mx-auto px-3 pt-20">
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

export default VirtualTraining