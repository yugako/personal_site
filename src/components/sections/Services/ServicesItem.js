import React from "react";
import PropTypes from 'prop-types';
import {SIIconWrap, SIText, SITitle, SIWrap} from "./services.styles";
import {IReact} from "../../common/Icons/ReactIcon";

export const ServiceItem = ({Icon, title, description}) => {
    return (
        <SIWrap>
            <SIIconWrap>
                <Icon />
            </SIIconWrap>
            <SITitle>{title}</SITitle>
            <SIText>{description}</SIText>
        </SIWrap>
    )
}

ServiceItem.propTypes = {
    Icon: PropTypes.elementType,
    title: PropTypes.string,
    description: PropTypes.string
}
