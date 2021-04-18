import React from "react";
import {AppLogo} from "../../common/Logo";
import {Socials} from "../../common/Socials";
import {Container} from "../../../layout/layout.styles";
import {FooterText, FooterWrap} from "./footer.styles";

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
