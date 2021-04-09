import React from "react";
import { Link } from "gatsby";
import {Logo} from "./logo.styles";
import {Dot} from "../Dot";

const LogoLink = (props) => <Link to="/" {...props}>{props.children}</Link>

export const AppLogo = () => {
    return (
        <Logo as={LogoLink}>Hasiuk <Dot/></Logo>
    )
}
