import MetaData from "../Layouts/MetaData";
import bannerImg from '../../assests/images/home/banner.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHouseChimney, faPhone } from "@fortawesome/free-solid-svg-icons";
import EnquireForm from "../Layouts/EnquireForm/EnquireForm";

const Contact = () => {
    return(
        <>
            <MetaData
                title={"Contact Us - Simulacrum Solutions"}
            />

            {/* Banner Section */}
            <section className="contact-banner relative overflow-hidden h-96">
                <div className='w-full lg:w-1/2 mx-auto py-20 px-3 relative z-10 flex flex-col h-full items-center gap-6 text-white justify-center text-center'>
                    <div className='flex flex-col h-full items-center gap-6 justify-center text-center'>
                        <h1 className='text-3xl md:text-4xl text-center font-medium'>Contact Us</h1>
                    </div>
                </div>
                <img 
                    src={bannerImg} 
                    alt='Banner' 
                    className='w-full h-full absolute top-0 left-0 object-center object-cover'
                />
                <div className='bg-black w-full h-full absolute top-0 left-0 opacity-80'></div>
            </section>

            {/* Contact Details */}
            <section className="contact-details-section py-10 md:py-20 px-3">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 w-full max-w-6xl mx-auto'>
                    <div className='w-full flex flex-row gap-5'>
                        <div className="w-16 h-16 rounded-full shadow-lg shadow-gray-300 flex items-center justify-center">
                            <FontAwesomeIcon icon={faHouseChimney} className="text-2xl text-primary-darkBlue" />
                        </div>
                        <div className="flex-1 flex flex-col gap-2.5">
                            <h4 className="w-fit text-xl md:text-2xl bg-gradient-to-r from-primary-blue to-primary-darkBlue font-semibold text-gradient mb-2.5">Adress Details</h4>
                            <p className='text-primary-grey'>SCO 30, First Floor, Near Devaji Plaza, VIP Road, Zirakpur, PB (India)</p>
                        </div>
                    </div>

                    <div className='w-full flex flex-row gap-5'>
                        <div className="w-16 h-16 rounded-full shadow-lg shadow-gray-300 flex items-center justify-center">
                            <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-primary-darkBlue" />
                        </div>
                        <div className="flex-1 flex flex-col gap-2.5">
                            <h4 className="w-fit text-xl md:text-2xl bg-gradient-to-r from-primary-blue to-primary-darkBlue font-semibold text-gradient mb-2.5">Email Address</h4>
                            <p className='text-primary-grey'><a href="mailto:info@simulacruminc.com">info@simulacruminc.com</a></p>
                        </div>
                    </div>

                    <div className='w-full flex flex-row gap-5'>
                        <div className="w-16 h-16 rounded-full shadow-lg shadow-gray-300 flex items-center justify-center">
                            <FontAwesomeIcon icon={faPhone} className="text-2xl text-primary-darkBlue" />
                        </div>
                        <div className="flex-1 flex flex-col gap-2.5">
                            <h4 className="w-fit text-xl md:text-2xl bg-gradient-to-r from-primary-blue to-primary-darkBlue font-semibold text-gradient mb-2.5">Phone Number</h4>
                            <p className='text-primary-grey'><a href="tel:+919915841204">+91 9915841204</a></p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Location Map */}
            <section className="contact-location-map">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1716.4102441698567!2d76.81414113866855!3d30.639016301418984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390febb6e807f311%3A0xc50d2602a9b185e5!2sIosAndWeb%20Technologies!5e0!3m2!1sen!2sus!4v1724221936603!5m2!1sen!2sus" 
                    title="SCO 30, First Floor, Near Devaji Plaza, VIP Road, Zirakpur, PB (India)" 
                    aria-label="SCO 30, First Floor, Near Devaji Plaza, VIP Road, Zirakpur, PB (India)"
                    width="100%"
                    height="450"
                ></iframe>
            </section>

            <section className="contact-form-section py-10 md:py-20 px-3">
                <div className='flex flex-col md:max-w-6xl lg:max-w-4xl mx-auto gap-5'>
                    <h3 className="text-3xl md:text-5xl bg-gradient-to-r from-primary-blue to-primary-darkBlue font-semibold text-gradient mx-auto">Write Us</h3>
                    <p className='text-primary-grey text-base md:text-lg'>We are always happy to be of service to you. Be sure to listen to the prompt to help direct you to the right person.</p>
                    <EnquireForm />
                </div>
            </section>
        </>
    )
}

export default Contact