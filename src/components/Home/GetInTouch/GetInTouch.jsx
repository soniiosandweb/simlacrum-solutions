import { Link } from "react-router-dom"
import womanImg from '../../../assests/images/home/WomanIn.png';
import { LazyLoadImage } from "react-lazy-load-image-component";

const GetInTouch = () => {
    return(
        <section className="home-getintouch-section py-10 md:py-20 px-3" id="getintouch">
            <div className='flex flex-col md:flex-row max-w-6xl mx-auto bg-primary-grey'>
                <div className="w-full md:w-1/2 py-10 px-3 sm:px-5 md:px-10 flex flex-col gap-5 text-left justify-center items-start">
                    <h3 className="text-2xl md:text-3xl md:text-5xl bg-gradient-to-r from-primary-darkBlue to-primary-blue font-semibold text-gradient">Do you have any question ?</h3>
                    <p className='text-base md:text-lg text-white'>Mannequin-based simulations use life-sized mannequins to replicate real patient conditions and scenarios. </p>
                    <Link to="#" className='bg-primary-darkBlue text-white py-3 px-6 text-md hover:bg-primary-blue'>Request For Free Demo</Link>
                </div>
                <div className="w-full md:w-1/2 relative md:-top-20 md:-mb-20">
                    <LazyLoadImage
                        src={womanImg}
                        alt="Get In Touch"
                        className="w-full h-full object-cover "
                    />
                </div>
            </div>
        </section>
    )
}

export default GetInTouch