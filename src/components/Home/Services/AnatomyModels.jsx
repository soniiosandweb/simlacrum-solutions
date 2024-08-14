import { LazyLoadImage } from 'react-lazy-load-image-component';
import anatomyModels from '../../../assests/images/home/AnatomyModels.png';
import { Link } from 'react-router-dom';

const AnatomyModels = () => {

    const listPoints = [
        {
            title: "Physical Models",
            text: "High-quality, detailed physical replicas of various body parts and organs.",
        },
        {
            title: "Digital Models",
            text: "Interactive digital representations accessible via software or online platforms.",
        },
        {
            title: "Customizable Models",
            text: "Custom-built models to cater to specific educational needs or research requirements.",
        },
        {
            title: "Comparative Anatomy Models",
            text: "Models comparing human anatomy with that of other species for veterinary studies.",
        },
        {
            title: "Portable Models",
            text: "Compact and lightweight models for easy transport and demonstration in various settings.",
        },
    ]

    return(
        <section className="home-AnatomyModels py-10 md:py-20">
            <div className='relative bg-primary-bg'>
                <div className="flex flex-col lg:flex-row gap-5 w-full max-w-6xl mx-auto items-center pr-3 pl-3 lg:pl-0 lg:pr-10 py-10 md:py-20">
                    
                    <div className="w-full lg:w-1/3">
                        <LazyLoadImage
                            src={anatomyModels}
                            alt="Anatomy Models"
                            className="w-full h-full object-cover lg:w-1/3 static lg:absolute top-0 left-0 pr-0 lg:pr-5"
                        />
                    </div>
                    
                    <div className="w-full lg:w-2/3 flex flex-col gap-5 items-start z-10">
                        <h3 className="text-5xl bg-gradient-to-r from-primary-blue to-primary-darkBlue font-semibold text-gradient">Anatomy Models</h3>
                        <p className='text-lg opacity-60'>Anatomy models are physical or digital representations of the human body or its parts. These models serve as essential tools for teaching and learning in medical and healthcare education, offering a tangible understanding of anatomical structures.</p>
                        <Link to="#" className='bg-primary-darkBlue text-white py-3 px-6 text-md hover:bg-primary-blue'>Explore Our Solutions</Link>
                        <p className='text-primary-textLight font-archivo text-150 opacity-60 absolute right-8 bottom-0 -z-10'>07</p>
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

export default AnatomyModels