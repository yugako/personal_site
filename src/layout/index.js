import React from "react";
import {LayoutStyles} from "./layout.styles";

export const Layout = ({children}) => {
    return (
        <>
            <LayoutStyles />
            {children}
        </>
    )
}
