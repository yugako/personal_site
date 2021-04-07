import * as React from "react"
import {Layout} from "../layout";
import {Header} from "../components/Header";
import {Banner} from "../components/Banner";
import {Works} from "../components/Works";

const IndexPage = () => {
  return (
      <Layout>
          <Header />
          <Banner />
          <Works />
      </Layout>
  )
}

export default IndexPage
