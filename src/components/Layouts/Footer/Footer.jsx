import { NavLink } from 'react-router-dom';
import logo from '../../../assests/images/logo-white.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { faFacebookF, faInstagram, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {

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
    return(
        <footer className="bg-primary-darkBlue text-white px-3">
            <div className="flex flex-col lg:flex-row max-w-6xl mx-auto pb-5 md:pb-8 pt-5 md:pt-14">
                <div className="w-2/5 flex flex-col gap-5">
                    <NavLink to="/" reloadDocument={true}>
                        <LazyLoadImage 
                            src={logo}
                            alt="Simlacrum Solutions"
                        />
                    </NavLink>
                    <p>Our solutions are designed to meet the diverse needs of medical institutions, educational organizations, and healthcare providers.</p>
                    <ul className='flex gap-5'>
                        {socialIcons.map((item,i) => (
                            <li key={i}>
                                <NavLink to={item.link} className="border border-white size-10 flex items-center justify-center rounded-full"><FontAwesomeIcon icon={item.icon} className='text-xl' /></NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-3/5 flex flex-col md:flex-row">
                </div>
            </div>
            <div className='flex flex-col md:flex-row max-w-6xl mx-auto py-5 border-t border-[#A7A7A7]'>
                <div className='w-full md:w-1/2'>
                    <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
                </div>
                <div className='w-full md:w-1/2'>
                    <ul className='flex justify-end gap-5'>
                        {privacyLinks.map((item, i) => (
                            <li key={i}><NavLink to={item.link}>{item.text}</NavLink></li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer