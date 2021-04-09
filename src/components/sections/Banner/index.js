import React from "react";
import {Dot} from "../../common/Dot";
import {Container} from "../../../layout/layout.styles";
import {Heading} from "./banner.styles";
import {Socials} from "../../common/Socials";

export const Banner = () => {
    return (
        <section id="home">
            <Container>
                <Heading>Hey! I'm <strong>Yurii</strong><Dot/></Heading>
                <p>A minimal, clean, and AJAX driven free portfolio template created by the fine folks at Colorlib.</p>
                <Socials />
            </Container>
        </section>
    )
}
