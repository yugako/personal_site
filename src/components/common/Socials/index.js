import * as React from "react"
import { IEnvelope, ILinkedin, IGithub, ITelegram, IFacebook, IInstagram } from "../Icons"
import { SocialsWrapper } from "./Socials.styles"

const links = [
    {
        to: "mailto:hasiuk.george@gmail.com",
        icon: IEnvelope
    },
    {
        to: "https://www.linkedin.com/in/yurii-hasiuk/",
        icon: ILinkedin
    }, {
        to: "https://github.com/yugako",
        icon: IGithub
    }, {
        to: "https://t.me/george_hs",
        icon: ITelegram
    }, {
        to: "https://www.facebook.com/yurko.hasiuk/",
        icon: IFacebook
    }, {
        to: "https://www.instagram.com/yurko_hasiuk/",
        icon: IInstagram
    }
]

export const Socials = ({ horizontal }) => (
    <SocialsWrapper horizontal={horizontal}>
        {links.map(link => (
            <a target={"_blank"} key={link.to} href={link.to} rel="noreferrer">
                <link.icon color="var(--light)" />
            </a>
        ))}
    </SocialsWrapper>
)
