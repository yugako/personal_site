import React from "react";
import {Container, Masonry, SectionWrap} from "../../../layout/layout.styles";
import {WorkItem} from "./WorkItem";

const worksData = [
    {
        preview: '/images/works/amerifreight.jpg',
        title: 'AmeriFreight',
        category: 'Corporate'
    },
    {
        preview: '/images/works/saa.jpg',
        title: 'SAA',
        category: 'Non-profit'
    },
    {
        preview: '/images/works/dtr.jpg',
        title: 'DTR Modern',
        category: 'Art'
    },
    {
        preview: '/images/works/nmr.jpg',
        title: 'NMR Distribution',
        category: 'WholeSale'
    },
    {
        preview: '/images/works/rhode.jpg',
        title: 'RhodesideRevival',
        category: 'Services'
    },
    {
        preview: '/images/works/uweed.jpg',
        title: 'uWeed',
        category: 'Medicine'
    },
    {
        preview: '/images/works/dlfny.jpg',
        title: 'DLFNY',
        category: 'Design'
    },
    {
        preview: '/images/works/assistrx.jpg',
        title: 'AssistRX',
        category: 'Medicine'
    },
    {
        preview: '/images/works/acacio.jpg',
        title: 'Acacio',
        category: 'Landscape'
    },
    {
        preview: '/images/works/hr.jpg',
        title: 'Hryzantema',
        category: 'Services'
    },
    {
        preview: '/images/works/ambari.jpg',
        title: 'AmabariBeauty',
        category: 'Cosmetics'
    }
]

export const Works = () => {
    return (
        <SectionWrap id="works">
            <Container>
                <Masonry>
                    {worksData.map(work => (
                        <WorkItem
                            key={work.title}
                            title={work.title}
                            preview={work.preview}
                            category={work.category} />
                    ))}
                </Masonry>
            </Container>
        </SectionWrap>

    )
}
