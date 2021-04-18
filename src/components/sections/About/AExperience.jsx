import React from "react";
import {Grid} from "../../../layout/layout.styles";
import {AboutExperience, AEItem, AEItemContent} from "./about.styles";
import {IBriefcase} from "../../common/Icons";

export const AExperience = () => (
    <AboutExperience>
        <h3>Work experience</h3>
        <Grid>
            <AEItem>
                <IBriefcase />
                <AEItemContent>
                    <h4>JavaScript Software Engineer</h4>
                    <a href="https://epam.com" rel="nofollow noreferrer" target="_blank">EPAM Systems</a>
                    <span>2020-now</span>
                </AEItemContent>
            </AEItem>
            <AEItem>
                <IBriefcase />
                <AEItemContent>
                    <h4>Front-end Engineer</h4>
                    <a href="https://upqode.com" rel="nofollow noreferrer" target="_blank">UPQODE</a>
                    <span>2019-2020</span>
                </AEItemContent>
            </AEItem>
        </Grid>
    </AboutExperience>
)
