import React from 'react';
import {Container, Grid, SectionWrap} from "../../../layout/layout.styles";
import {SectionHeading} from "../../common/SectionHeading";
import {ServicesList } from "./services.styles";
import {ServiceItem} from "./ServicesItem";
import {IReact} from "../../common/Icons";
import {IMobile} from "../../common/Icons/Mobile";

const servicesInfo = [
    {
        icon: IReact,
        title: 'Build Single-Page Application',
        description: `You've saw many times these cool sites which don't reload after going to another page? It's a SPA? 
        Do you want the same? Just write me.`
    },{
        icon: IMobile,
        title: 'Mobile app developing',
        description: `Are you looking for an mobile app? And you want it to work on Android and iOS. Let's chat!`
    }
];

export const Services = () => {
    return (
        <Container>
            <SectionWrap id="services">
                <SectionHeading align="center" title="Services" subtitle="The skills to pay the bills." />
                <ServicesList>
                    <Grid columns="1fr 1fr 1fr">
                        {servicesInfo.map(service => <ServiceItem
                            Icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />)}
                    </Grid>
                </ServicesList>
            </SectionWrap>
        </Container>
    )
}
