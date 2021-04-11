import React from "react";
import PropTypes from 'prop-types';
import {SCSubtitle, SCTitle, SCWrap} from "./section-heading.styles";

export const SectionHeading = ({title, subtitle, align}) => {
    return (
        <SCWrap align={align}>
            <SCTitle>{title}</SCTitle>
            <SCSubtitle>{subtitle}</SCSubtitle>
        </SCWrap>
    )
}

SectionHeading.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    align: PropTypes.string
}
