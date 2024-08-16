import { Link } from "react-router-dom";
import aboutImg from '../../../assests/images/home/about-img.png';
import { LazyLoadImage } from "react-lazy-load-image-component";

const AboutSection = () => {

    const aboutNumbers = [
        {
            number: "15",
            text: "Year of Experiences",
        },
        {
            number: "47+",
            text: "Countries In Service",
        },
        {
            number: "99%",
            text: "Accurate Simulator’s",
        },
        {
            number: "30k+",
            text: "Satisfied Customer’s",
        },
    ]

    return(
        <section className="home-about-section py-10 md:py-20">

            <div className="flex flex-col lg:flex-row gap-5 w-full mx-auto items-center px-3 lg:px-10">
                <div className="w-full lg:w-3/5">
                    <h2 className="text-2xl md:text-4xl font-medium">Simlacrum Solutions is at the forefront of <span className="text-primary-darkBlue font-semibold">revolutionising clinical training</span> through state-of-the-art <span className="text-primary-darkBlue font-semibold">simulation technology</span>.</h2>
                </div>
                <div className="w-full lg:w-2/5 text-left lg:text-right">
                    <Link to="#" className='bg-primary-darkBlue text-white py-3 px-6 text-md hover:bg-primary-blue'>Read More</Link>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-5 w-full mx-auto items-center pr-3 lg:pr-0 pl-3 lg:pl-10 pt-20">
                <div className="w-full lg:w-2/5 grid grid-cols-2 gap-5 sm:gap-10">
                    {aboutNumbers.map((item,i) => (
                        <div className="flex flex-col gap-3 w-full sm:w-44" key={i}>
                            <h3 className="text-4xl md:text-6xl bg-gradient-to-b from-primary-darkBlue to-primary-blue font-semibold text-gradient">{item.number}</h3>
                            <div className="h-px w-full bg-primary-grey opacity-10"></div>
                            <p className="text-primary-grey text-base md:text-lg">{item.text}</p>
                        </div>
                    ))}
                </div>
                <div className="w-full lg:w-3/5">
                    <LazyLoadImage
                        src={aboutImg}
                        alt="About"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

        </section>
    )
}

export default AboutSection