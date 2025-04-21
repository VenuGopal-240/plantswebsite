import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Nav.css'
import { PiShoppingCartBold } from "react-icons/pi";
import { MyContext } from "../App";
import { CiCircleChevDown } from "react-icons/ci";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge,IconButton } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const Navbar = ({ children }) => {
    const { filter, setFilter, setDuplicatesPlants, plants, setPlants, originals ,duplicatePlants} = useContext(MyContext);
    
    const navigate = useNavigate();
    
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    const handleData = (data) => {
        setFilter(data);
        if (data === 'all') {
            setPlants(originals);
        } else {
            let result = originals.filter((e) => e.category === data);
            setPlants(result);
            navigate("/home/shop");
        }
    }

    return (
        <>
        <div className="fixed-header">
            <header className="header">
                <div className="left">
                    <span style={{ color: "green" }}> <img src="./logo-removebg-preview.png" width='30rem' alt="logo" />VIGNESWARA NURSERY</span>
                </div>
                <div className="right">
                    <span className="header1 btn" onClick={() => navigate('/home/home')}>HOME</span>
                    <span className="header1 btn" onClick={() => navigate('/home/shop')}>SHOP </span>
                    <div
                        className="header1 btn dropdown-container"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        CATEGORIES<ArrowDropDownIcon/>
                        {isDropdownVisible && (
                            <div className="dropdown">
                                <ul>
                                    <li onClick={() => handleData("fruits")}>Fruit Plants</li>
                                    <li onClick={() => handleData("Flower")}> Flowering Plants </li>
                                    <li onClick={() => handleData("Indoor Plant")}>Indoor Plants </li>
                                    <li onClick={() => handleData("Medicinal")}>Medicinal Plants </li>
                                    <li onClick={() => handleData("/home/shop")}>Category 5</li>
                                    <li onClick={() => handleData("/home/shop")}>Category 6</li>
                                    <li onClick={() => handleData("all")}>ALL PLANTS</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <span className="header1 btn" onClick={() => navigate('/home/cart')}
                        ><IconButton aria-label="cart">
                        <Badge badgeContent={duplicatePlants.length} color="primary" >
                            <ShoppingCartIcon color="success"/>
                        </Badge>
                    </IconButton></span>
                    <span className="header1 btn" onClick={() => navigate('/home/contact')}>CONTACT</span>
                <span className="header1 btn" onClick={()=>navigate('/login')}>LOGOUT</span>

                </div>
            </header>
            </div>
            {children}
        </>
    )
}