import React from "react"
import View from "./View"

const vps = () => {
  const { name } = getCurrentUser()

  return (
    <View>
      <br></br>
      <center>    
      <p>
      Creating VPC
      </p>
     <input type="submit" value="create VPC" /></center>
     <br></br>
      <center>
      <p>
      Creating Net App CVO
      </p>
     <input type="submit" value="create NetAPp CVO" /></center>
     <br></br>
      
    </View>
  )
}

export default vps
