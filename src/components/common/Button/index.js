import React from "react";
import {ButtonWrap} from "./button.styles";

export const Button = ({clickHandler, children}) => {
    return (
        <ButtonWrap onClick={clickHandler}>
            {children}
        </ButtonWrap>
    )
}
