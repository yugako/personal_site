import * as React from "react";
import {Navigation} from "../../common/Navigation";
import {HeaderWrap} from "./header.styles";

export const Header = () => {
    return (
        <HeaderWrap>
            <Navigation />
        </HeaderWrap>
    )
}
