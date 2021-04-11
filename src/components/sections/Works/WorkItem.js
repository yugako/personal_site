import React from "react";
import PropTypes from 'prop-types';
import {WorkItemContent, WorkItemOverlay, WorkItemWrapper} from "./works.styles";
import {Link} from "gatsby";

export const WorkItem = ({title, category, preview}) => {
    return (
        <WorkItemWrapper>
            <Link to={'/portfolio'}>
                <img src={preview} alt={title}/>
                <WorkItemOverlay>
                    <span className="wrap-icon icon-link2"/>
                    <WorkItemContent>
                        <h3>{title}</h3>
                        <p>Industry: {category}</p>
                    </WorkItemContent>
                </WorkItemOverlay>
            </Link>

        </WorkItemWrapper>
    )
}

WorkItem.propTypes = {
    title: PropTypes.string,
    preview: PropTypes.string,
    category: PropTypes.string
}
