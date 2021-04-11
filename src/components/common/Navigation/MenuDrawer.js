import React from "react";
import {MenuDrawerWrap} from "./navigation.styles";
import {Backdrop} from "./Backdrop";
import {Socials} from "../Socials";
import {AppLogo} from "../Logo";

export const MenuDrawer = ({isActive, clickHandler}) => {
    return (
        <>
            <Backdrop isActive={isActive} clickHandler={clickHandler} />
            <MenuDrawerWrap isActive={isActive}>
                <AppLogo />
               <ul>
                   <li>
                       <a href="#works">Works</a>
                   </li>
                   <li>
                       <a href="#services">Services</a>
                   </li>
                   <li>
                       <a href="#about">About</a>
                   </li>
                   <li>
                       <a href="#blog">Blog</a>
                   </li>
                   <li>
                       <a href="#contact">Contact</a>
                   </li>
               </ul>
                <Socials />
            </MenuDrawerWrap>
        </>

    )
}
