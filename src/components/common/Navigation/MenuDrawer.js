import React from "react";
import {MenuDrawerWrap} from "./navigation.styles";
import {Backdrop} from "./Backdrop";

export const MenuDrawer = ({isActive, clickHandler}) => {
    return (
        <>
            <Backdrop isActive={isActive} clickHandler={clickHandler} />
            <MenuDrawerWrap isActive={isActive}>
               <ul>
                   <li>
                       <a href="#home">Home</a>
                   </li>
                   <li>
                       <a href="#works">Works</a>
                   </li>
                   <li>
                       Services
                   </li>
                   <li>
                       About
                   </li>
                   <li>
                       Blog
                   </li>
                   <li>
                       Contact
                   </li>
               </ul>
            </MenuDrawerWrap>
        </>

    )
}
