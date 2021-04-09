import * as React from "react"
import {Layout} from "../layout";
import {Header} from "../components/sections/Header";
import {Banner} from "../components/sections/Banner";
import {Works} from "../components/sections/Works";

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
