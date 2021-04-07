import React from "react";
import {Container, Masonry} from "../../layout/layout.styles";
import {WorksSection} from "./works.styles";

export const Works = () => {
    return (
        <WorksSection>
            <Container>
                <Masonry>
                    {
                        Array(15)
                        .fill(1)
                        .map((_item, index) => <div key={index}>
                            <img src={`https://picsum.photos/id/${10 + index}/1920/1080`} alt={index}/>
                        </div>)
                    }
                </Masonry>
            </Container>
        </WorksSection>

    )
}
