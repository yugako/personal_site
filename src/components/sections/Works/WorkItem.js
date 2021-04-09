import React from "react";
import PropTypes from 'prop-types';
import {WorkItemContent, WorkItemOverlay, WorkItemWrapper} from "./works.styles";
import {Link} from "gatsby";

export const WorkItem = ({id}) => {
    return (
        <WorkItemWrapper>
            <Link to={'/portfolio'}>
                <img src={`https://picsum.photos/id/${10 + id}/1920/1080`} alt={id}/>
                <WorkItemOverlay>
                    <span className="wrap-icon icon-link2"/>
                    <WorkItemContent>
                        <h3>Project Number {id}</h3>
                        <p>web, branding</p>
                    </WorkItemContent>
                </WorkItemOverlay>
            </Link>

        </WorkItemWrapper>
    )
}

WorkItem.propTypes = {
    id: PropTypes.number
}
