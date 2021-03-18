import React from "react"
import View from "./View"
import { getCurrentUser } from "../utils/auth"

const Profile = () => {
  const { name } = getCurrentUser()

  return (
    <View title="Your Profile">
      <p>Welcome back to your profile, {name}!</p>
      <p>
       #start with vps
      </p>
    </View>
  )
}

export default Profile
