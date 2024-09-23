// import { Link } from 'react-router-dom';
import bannerImg from '../../../assests/images/home/banner.png';
import rocket from '../../../assests/images/home/rocket.png'


const Banner = () => {
    return(
        <section className="home-banner relative overflow-hidden h-screen">
            <div className='w-full lg:w-1/2 mx-auto py-20 px-3 relative z-10 flex flex-col h-full items-center gap-6 text-white justify-center text-center'>
                <div className='flex flex-col h-full items-center gap-6 justify-center text-center'>
                    {/* <h1 className='text-3xl md:text-4xl text-center font-medium'>
                        Revolutionizing Medical Training with 
                        <span className='bg-gradient-to-r from-primary-blue to-primary-darkBlue font-semibold text-gradient'> State-of-the-Art Simulation</span>
                    </h1> */}
                    <img src={rocket} alt=""  />
                    <h1 className='text-3xl md:text-7xl text-center font-medium'>Coming soon</h1>
                    <p className="text-lg md: text-xl">We're working hard to bring you something amazing. <span className='text-primary-darkBlue'>Stay tuned!</span></p>
                    {/* <p className='text-lg md: text-xl'>Empowering Healthcare Professionals to Excel</p> */}
                    {/* <Link to="/contact-us" reloadDocument={true} className='bg-primary-darkBlue text-white py-3 px-6 text-md hover:bg-primary-blue'>Request For Free Demo</Link> */}
                </div>
                {/* <p className='w-full lg:w-4/5'>Enhance your medical team's skills with our cutting-edge simulation technology. From realistic patient scenarios to advanced training modules, we offer the tools you need to deliver exceptional care.</p> */}
            </div>
            <img 
                src={bannerImg} 
                alt='Banner' 
                className='w-full h-full absolute top-0 left-0 object-center object-cover'
            />
            <div className='bg-black w-full h-full absolute top-0 left-0 opacity-80'></div>
        </section>
    )
}

export default Banner