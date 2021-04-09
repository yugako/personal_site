import React from "react";
import {BackdropWrap} from "./navigation.styles";

export const Backdrop = ({isActive, clickHandler}) => <BackdropWrap isActive={isActive} onClick={clickHandler} />
