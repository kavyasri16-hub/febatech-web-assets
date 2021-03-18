import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import View from "../components/View"
import Status from "../components/Status"

const Index = () => (
  <Layout>
    <Status />
    <View title="Welcome to Feba Technologies">
      <p>
      Welcome to FebaTech fully automated deployment of Containerized WEB APPS using NetApp cloud volume ONTap (CVO)
      </p>
      <p>
        For the full experience, go to
        {` `}
        <Link to="/app/profile">your profile</Link>.
      </p>
    </View>
  </Layout>
)

export default Index
