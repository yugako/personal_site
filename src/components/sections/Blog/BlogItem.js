import React from "react";
import PropTypes from 'prop-types';
import {BIDate, BIImage, BITitle, BIWrap} from "./blog.styles";

export const BlogItem = ({preview, title, date}) => {
    return (
        <BIWrap href="#">
            <BIImage src={preview} />
            <BITitle>{title}</BITitle>
            <BIDate>{date}</BIDate>
        </BIWrap>
    )
}

BlogItem.propTypes = {
    preview: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string
}
