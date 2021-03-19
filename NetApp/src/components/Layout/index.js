import React from "react"
import { Helmet } from "react-helmet"

import Header from "../Header"

// Global styles and component-specific styles.
import "./global.css"
import { main } from "./main.module.css"

const Layout = ({ children }) => (
  <div>
    <Helmet title="NetApp" />
    <Header />
    <main className={main}>{children}</main>
  </div>
)

export default Layout
