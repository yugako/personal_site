import React from "react";
import {Container, Grid, SectionWrap} from "../../../layout/layout.styles";
import {SectionHeading} from "../../common/SectionHeading";
import {BlogItem} from "./BlogItem";

const articles = [
    {
        preview: 'https://preview.colorlib.com/theme/space/images/gal_4.jpg',
        title: "About programmer`s lifestyle",
        date: "21 Mar, 2021"
    },{
        preview: 'https://preview.colorlib.com/theme/space/images/gal_2.jpg',
        title: "About programmer`s lifestyle",
        date: "14 Feb, 2021"
    },{
        preview: 'https://preview.colorlib.com/theme/space/images/gal_3.jpg',
        title: "About programmer`s lifestyle",
        date: "26 Dec, 2020"
    },{
        preview: 'https://preview.colorlib.com/theme/space/images/gal_1.jpg',
        title: "About programmer`s lifestyle",
        date: "23 Oct, 2020"
    }
]

export const Blog = () => {
    return (
        <SectionWrap>
            <Container>
                <SectionHeading title="Blog" subtitle="News & Updates" align="center" />
                <Grid columns="1fr 1fr 1fr 1fr" style={{marginTop: '1.5rem'}}>
                    {articles.map(article => <BlogItem
                        key={article.title}
                        preview={article.preview}
                        title={article.title}
                        date={article.date}
                    />)}
                </Grid>
            </Container>
        </SectionWrap>
    )
}
