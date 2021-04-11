import React from "react";
import {AppLogo} from "../../common/Logo";
import {Container} from "../../../layout/layout.styles";
import {FooterText, FooterWrap} from "./footer.styles";
import {Socials} from "../../common/Socials";

export const Footer = () => {
    return (
        <FooterWrap>
            <Container>
                <AppLogo />
                <Socials horizontal="center" />
                <FooterText>
                    All rights reserved &copy; {new Date().getFullYear()}
                </FooterText>
            </Container>
        </FooterWrap>
    )
}
