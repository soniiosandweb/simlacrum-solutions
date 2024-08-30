import standardizedPatients from '../../../assests/images/home/StandardizedPatients.png';
import { Link } from 'react-router-dom';

const StandardizedPatients = () => {

    const listPoints = [
        {
            title: "SP Training Programs",
            text: "Comprehensive training programs for individuals to become standardized patients.",
        },
        {
            title: "Scenario Development",
            text: "Creation of realistic patient scenarios tailored to specific learning objectives.",
        },
        {
            title: "Assessment and Feedback",
            text: "Tools for evaluating student performance during SP encounters and providing constructive feedback.",
        },
        {
            title: "SP Scheduling and Management",
            text: "Systems for organizing and managing SP sessions efficiently.",
        },
        {
            title: "Diversity in SPs",
            text: "Inclusion of SPs from various backgrounds to expose students to a wide range of patient demographics and conditions.",
        },
    ]

    return(
        <section className="home-StandardizedPatients pb-20" id="standardized_patients">
            <div className='relative bg-primary-grey'>
                <div className="flex flex-col lg:flex-row gap-5 w-full max-w-6xl mx-auto items-center px-3 py-10 md:py-20">
                    
                    <div className="w-full lg:w-2/3 flex flex-col gap-5 items-start z-10 py-10">
                        <h3 className="text-3xl md:text-5xl bg-gradient-to-r from-primary-blue to-primary-darkBlue font-semibold text-gradient">Standardized Patients (SPs)</h3>
                        <p className='text-base md:text-lg opacity-60 text-white'>Standardized Patients (SPs) are trained individuals who simulate real patient cases for the purpose of medical training. They provide students with realistic clinical encounters, allowing them to practice history-taking, physical examinations, and communication skills.</p>
                        <Link to="#" className='hidden bg-primary-darkBlue text-white py-3 px-6 text-md hover:bg-primary-blue'>Request For Free Demo</Link>
                        <p className='text-primary-textLight font-archivo text-150 opacity-10 absolute left-auto lg:left-8 right-8 lg:right-auto top-0 lg:top-auto bottom-auto lg:bottom-0 -z-10'>08</p>
                    </div>
                    <div className="w-full lg:w-1/3">
                        <img
                            src={standardizedPatients}
                            alt="Standardized Patients (SPs)"
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

export default StandardizedPatients