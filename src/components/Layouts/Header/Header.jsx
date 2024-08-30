import { NavLink, useLocation } from "react-router-dom";
import logo from "../../../assests/images/logo.png";
import logoBlack from '../../../assests/images/logo-black.png';
import { useState } from "react";
import { Box, Drawer } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import './Header.css';

const Header = () => {

  const location = useLocation();
  const pathname = location.pathname;
  const locationValue = pathname.split("/");

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const menuLinks = [
    {
      name: "Home",
      redirect: "/",
    },
    {
      name: "Contact",
      redirect: "/contact-us",
    },
  ];

  const DrawerList = (
    <Box role="presentation" onClick={toggleDrawer(false)} className="w-64 md:w-96 py-5 md:py-10 px-3 md:px-5">
        <div className="flex justify-end mb-5">
            <FontAwesomeIcon icon={faClose} className="text-2xl cursor-pointer" onClick={toggleDrawer(false)} />
        </div>
        <nav className="flex gap-5 flex-col">
            {menuLinks.map((item,i) => (
                <NavLink smooth="true" to={item.redirect} key={i} className="text-md font-medium hover:text-primary-darkBlue header-nav-link">{item.name}</NavLink>
            ))}
        </nav>
    </Box>
  );

  return (
    <header className={`px-3 lg:px-10 py-4 lg:py-6 w-full top-0 z-50 ${locationValue[1] === "" ? 'bg-transparent text-white absolute' : 'bg-white text-black static' }`}>
      <div className="flex items-center">
        <div className="w-1/2">
          <NavLink to="/" reloadDocument={true} className="w-fit block">
            <img src={locationValue[1] === "" ? logo : logoBlack} alt="Simulacrum Solutions" />
          </NavLink>
        </div>
        <div className="w-1/2">
          <div className="w-fit ml-auto flex items-center gap-2.5 justify-end cursor-pointer" onClick={toggleDrawer(true)}>
            <div className="flex flex-col gap-1.5">
              <span className={`w-12 h-0.5 ${locationValue[1] === "" ? 'bg-primary-bg' : 'bg-black' }`}></span>
              <span className={`w-7 h-0.5 ml-auto ${locationValue[1] === "" ? 'bg-primary-bg' : 'bg-black' }`}></span>
            </div>
            <span className={`text-xl ${locationValue[1] === "" ? 'text-primary-bg' : 'text-black' }`}>Menu</span>
          </div>
        </div>
      </div>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        {DrawerList}
      </Drawer>
    </header>
  );
};

export default Header;
