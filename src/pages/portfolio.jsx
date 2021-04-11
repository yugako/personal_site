import React from 'react';
import { Link } from 'gatsby';
import {
  WDContent,
  WDDescription,
  WDImg,
  WDLabel,
  WDMeta,
  WDTitle,
  WDValue, WDWrap,
} from '@components/sections/Works/work-details.styles';
import { ButtonWrap } from '@components/common/Button/button.styles';
import { Container, Flex, Grid } from '../layout/layout.styles';
import { Layout } from '../layout';

// eslint-disable-next-line react/jsx-props-no-spreading
const BackLink = (props) => <Link to="/" {...props}>Go Back</Link>;

export default function PortfolioDetails() {
  return (
    <Layout>
      <WDWrap>
        <Container>
          <Flex horizontal="space-between">
            <WDTitle>AmeriFreight</WDTitle>
            <ButtonWrap as={BackLink} />
          </Flex>
          <Grid gap={50} vertical="stretch">
            <WDImg
              src="https://www.amerifreight.net/wp-content/uploads/2019/11/auto-transport-auto-transport-company.png"
              alt="AmeriFreight"
            />
            <WDContent>
              <Grid style={{ marginBottom: 50 }}>
                <WDMeta>
                  <WDLabel>Project Date</WDLabel>
                  <WDValue>March 9th, 2020</WDValue>
                </WDMeta>
                <WDMeta>
                  <WDLabel>Role</WDLabel>
                  <WDValue>Frontend Developer</WDValue>
                </WDMeta>
                <WDMeta>
                  <WDLabel>Client</WDLabel>
                  <WDValue>AmeriFreight</WDValue>
                </WDMeta>
                <WDMeta>
                  <WDLabel>Visit</WDLabel>
                  <WDValue>
                    <a href="https://amerifreight.net" target="_blank" rel="nofollow noreferrer">https://amerifreight.net</a>
                  </WDValue>
                </WDMeta>
              </Grid>
              <WDDescription>
                Excellent work has been done on developing the site for AmeriFreight,
                a reliable auto transport company in Georgia, USA.
                AmeriFreight is an auto transport broker that works
                with a network of reliable carriers to help consumers transport
                their cars and other vehicles across the lower 48 states,
                Canada and a few other select locations.
              </WDDescription>
              <WDDescription>
                The company can ship motorcycles,
                automobiles, trailers, RVs, boats, classic cars and trucks.
                You can use AmeriFreight’s rate calculator on the website to get
                a better idea of how much it will cost to ship your vehicle.
              </WDDescription>
            </WDContent>
          </Grid>
        </Container>
      </WDWrap>
    </Layout>
  );
}
