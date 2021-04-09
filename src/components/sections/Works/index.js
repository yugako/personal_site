import React from "react";
import {Container, Masonry} from "../../../layout/layout.styles";
import {WorksSection} from "./works.styles";
import {WorkItem} from "./WorkItem";

export const Works = () => {
    return (
        <WorksSection>
            <Container>
                <Masonry>
                    {
                        Array(10)
                        .fill(1)
                        .map((_item, index) => <WorkItem key={index} id={index} />)
                    }
                </Masonry>
            </Container>
        </WorksSection>

    )
}
