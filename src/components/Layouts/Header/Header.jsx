import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";
import logo from '../../../assests/images/logo.png';

const Header = () => {
    return(
        <header className="px-3 lg:px-8 py-4 lg:py-6 bg-transparent text-white w-full absolute top-0 z-50">
            <div className="flex items-center">
                <div className="w-1/3">
                    <NavLink to="/" reloadDocument={true}>
                        <LazyLoadImage 
                            src={logo}
                            alt="Simlacrum Solutions"
                        />
                    </NavLink>
                </div>
                <div className="w-2/3">
                    <div className="w-max ml-auto flex items-center gap-2.5 justify-end cursor-pointer">
                        <div className="flex flex-col gap-1.5">
                            <span className="w-12 h-0.5 bg-primary-bg"></span>
                            <span className="w-7 h-0.5 bg-primary-bg ml-auto"></span>
                        </div>
                        <span className="text-xl text-primary-bg">Menu</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header