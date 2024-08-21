import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../../assests/images/logo-white.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { faFacebookF, faInstagram, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';

const Footer = () => {

    const location = useLocation();

    const socialIcons = [
        {
            icon: faTwitter,
            link: '/',
        },
        {
            icon: faFacebookF,
            link: '/',
        },
        {
            icon: faInstagram,
            link: '/',
        },
        {
            icon: faTelegram,
            link: '/',
        },
    ]

    const generalLinks = [
        {
            link: '/',
            text: 'Home',
        },
        {
            link: '/contact-us',
            text: 'Contact',
        }
    ]

    const servicesLinks = [
        {
            link: '/#simulation_labs',
            text: 'Simulation Labs',
        },
        {
            link: '/#virtual_training',
            text: 'Virtual Reality Training',
        },
        {
            link: '/#simulation_software',
            text: 'Simulation Software',
        },
        {
            link: '/#simulation_equipment',
            text: 'Simulation Equipment',
        },
        {
            link: '/#dental_simulator',
            text: 'Dental Simulator',
        },
        {
            link: '/#insitu_simulations',
            text: 'In Situ Simulations',
        },
        {
            link: '/#walkbot',
            text: 'WalkBot',
        }
    ]

    const servicesLinks2 = [
        {
            link: '/#anatomy_tables',
            text: 'Anatomy Tables',
        },
        {
            link: '/#anatomy_models',
            text: 'Anatomy Models',
        },
        {
            link: '/#standardized_patients',
            text: 'Standardized Patients (SPs)',
        },
        {
            link: '/#haptic_simulators',
            text: 'Haptic Simulators',
        },
        {
            link: '/#hybrid_simulations',
            text: 'Hybrid Simulations',
        },
        {
            link: '/#mannequin_based',
            text: 'Mannequin-Based Simulations',
        }
    ]


    const privacyLinks = [
        {
            link: '/',
            text: 'Privacy Policy',
        },
        {
            link: '/',
            text: 'Term of use',
        }
    ]

    useEffect(() => {

        if (location.hash) {
          const element = document.getElementById(location.hash.slice(1));
          if (element) {
            // element.style.scrollMarginTop = '50px';
            element.scrollIntoView({ behavior: 'smooth'});
            // window.scrollTo({ top: element.offsetTop, behavior: 'smooth'});
          }
        }
      }, [location]);

    return(
        <footer className="bg-primary-darkBlue text-white px-3">
            <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto pb-5 md:pb-8 pt-5 md:pt-14">
                <div className="w-full lg:w-1/3 flex flex-col gap-5">
                    <NavLink to="/" reloadDocument={true} className="w-fit">
                        <LazyLoadImage 
                            src={logo}
                            alt="Simulacrum Solutions"
                        />
                    </NavLink>
                    <p className='text-sm'>Our solutions are designed to meet the diverse needs of medical institutions, educational organizations, and healthcare providers.</p>
                    <ul className='flex gap-5'>
                        {socialIcons.map((item,i) => (
                            <li key={i}>
                                <NavLink to={item.link} target='_blank' className="border border-white size-10 flex items-center justify-center rounded-full hover:text-primary-blue hover:border-primary-blue"><FontAwesomeIcon icon={item.icon} className='text-xl' /></NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full lg:w-2/3 flex flex-col sm:flex-row flex-wrap">
                    <div className='w-full sm:w-1/2 md:w-1/3 flex flex-col gap-5 pr-5 pb-5'>
                        <h6 className='text-primary-blue font-bold'>General</h6>
                        <ul className='flex flex-col gap-2'>
                            {generalLinks.map((item,i) => (
                                <li key={i}>
                                    <NavLink to={item.link} reloadDocument={true} className="hover:text-primary-blue text-sm">{item.text}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='w-full sm:w-1/2 md:w-1/3 flex flex-col gap-5 pr-5 pb-5'>
                        <h6 className='text-primary-blue font-bold'>Services</h6>
                        <ul className='flex flex-col gap-2'>
                            {servicesLinks.map((item,i) => (
                                <li key={i}>
                                    <NavLink smooth="true" to={item.link} className="hover:text-primary-blue text-sm">{item.text}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='w-full sm:w-1/2 md:w-1/3 flex flex-col gap-5 pr-5 pb-5'>
                        <h6 className='text-primary-blue font-bold'>Services</h6>
                        <ul className='flex flex-col gap-2'>
                            {servicesLinks2.map((item,i) => (
                                <li key={i}>
                                    <NavLink to={item.link} className="hover:text-primary-blue text-sm">{item.text}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                </div>
            </div>
            <div className='flex flex-col md:flex-row max-w-6xl mx-auto py-5 gap-2.5 md:gap-5 border-t border-[#A7A7A7]'>
                <div className='w-full text-center md:text-left md:w-1/2'>
                    <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
                </div>
                <div className='w-full md:w-1/2'>
                    <ul className='flex justify-center md:justify-end gap-5'>
                        {privacyLinks.map((item, i) => (
                            <li key={i}><NavLink to={item.link} className="hover:text-primary-blue text-sm">{item.text}</NavLink></li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer