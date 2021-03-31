import React from "react"
import View from "./View"
import { getCurrentUser } from "../utils/auth"

const Profile = () => {
  const { name } = getCurrentUser()

  return (
    <View title="Welcome to FebaTech fully automated deployment of Containerized WEB APPS using NetApp cloud volume ONTap (CVO)!">
      <br></br>
      <center>    
      <p>
      Let's Provision VPC, NetApp CVO
      </p>
     <input type="submit" value="click here" /></center>
     <br></br>
      <center>
      <p>
      Let's create EKS Cluster
      </p>
     <input type="submit" value="click here" /></center>
     <br></br>
      <center>
      <p>
      Let's Deploy Web App
      </p>
     <input type="submit" value="click here" /></center>
    </View>
  )
}

export default Profile
