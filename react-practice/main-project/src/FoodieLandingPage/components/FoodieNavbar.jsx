import { useState } from 'react';
import Logo from '../assets/images/Logo.svg';
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
    Box,
    Drawer,
    List,
    Divider,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const FoodieNavbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const menuOptions = [
        {
            text: "Home",
            icon: <HomeIcon />,
        },
        {
            text: "About",
            icon: <InfoIcon />,
        },
        {
            text: "Testimonials",
            icon: <CommentRoundedIcon />,
        },
        {
            text: "Contact",
            icon: <PhoneRoundedIcon />,
        },
        {
            text: "Cart",
            icon: <ShoppingCartRoundedIcon />,
        }
    ];

    return (
        <nav className="navbar">
            <div className="navbar-logo-container">
                <img src={Logo} alt="Logo" />
            </div>
            <ul className="navbar-links-container">
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Testimonials</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
                <li>
                    <a href="">
                        <BsCart2 className="navbar-cart-icon" />
                    </a>
                </li>
                <li>
                    <button className="primary-button">Bookings Now</button>
                </li>
            </ul>

            <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>

            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}
                >
                    <List>
                        {menuOptions.map((option) => (
                            <ListItem key={option.text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{option.icon}</ListItemIcon>
                                    <ListItemText primary={option.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </nav>
    )
}

export default FoodieNavbar

