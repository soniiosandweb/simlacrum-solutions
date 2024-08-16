import { LazyLoadImage } from 'react-lazy-load-image-component';
import anatomyTables from '../../../assests/images/home/AnatomyTables.png';
import { Link } from 'react-router-dom';

const AnatomyTables = () => {

    const listPoints = [
        {
            title: "3D Anatomical Models",
            text: "High-resolution, interactive 3D models covering various systems of the human body.",
        },
        {
            title: "Virtual Dissection",
            text: "Tools for digitally dissecting anatomical structures to study their relationships and functions.",
        },
        {
            title: "Customizable Study Modules",
            text: "Modules tailored to different medical specialties, allowing focused study on specific areas.",
        },
        {
            title: "Integration with Curriculum",
            text: "Seamless integration with educational curriculums for enhanced learning experiences.",
        },
        {
            title: "Collaborative Learning Tools",
            text: "Features enabling group studies and discussions around the anatomy table.",
        },
    ]

    return(
        <section className="home-AnatomyTables py-10">
            <div className='relative bg-primary-grey'>
                <div className="flex flex-col lg:flex-row gap-5 w-full max-w-6xl mx-auto items-center pr-3 pl-3 lg:pl-0 lg:pr-10 py-10 md:py-20">
                    
                    <div className="w-full lg:w-2/3 flex flex-col gap-5 items-start z-10">
                        <h3 className="text-3xl md:text-5xl bg-gradient-to-r from-primary-blue to-primary-darkBlue font-semibold text-gradient">Anatomy Tables</h3>
                        <p className='text-base md:text-lg opacity-60 text-white'>Anatomy tables are interactive, high-resolution touch screens that display detailed 3D models of the human body. These tables are invaluable tools for medical education, providing an in-depth understanding of human anatomy through virtual dissection and visualization.</p>
                        <Link to="#" className='bg-primary-darkBlue text-white py-3 px-6 text-md hover:bg-primary-blue'>Explore Our Solutions</Link>
                        <p className='text-primary-textLight font-archivo text-150 opacity-10 absolute left-8 top-0 lg:top-auto bottom-auto lg:bottom-0 -z-10'>06</p>
                    </div>
                    <div className="w-full lg:w-1/3">
                        <LazyLoadImage
                            src={anatomyTables}
                            alt="Anatomy Tables"
                            className="w-full h-full object-cover lg:w-1/3 static lg:absolute top-0 right-0 pl-0 lg:pl-5"
                        />
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

export default AnatomyTables