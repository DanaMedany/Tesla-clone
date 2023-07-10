import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
      <Section 
          title = "Model S"
          description = "Order Online for Touchless Delivery"
          backgroundimage = "model-s.jpg"
          leftbtn = "Custom Order"
          rightbtn = "Exsiting Inventory"/>
      <Section 
          title = "Model X"
          description = "Order Online for Touchless Delivery"
          backgroundimage = "model-x.jpg"
          leftbtn = "Custom Order"
          rightbtn = "Exsiting Inventory"/>
      <Section 
          title = "Model 3"
          description = "Order Online for Touchless Delivery"
          backgroundimage = "model-3.jpg"
          leftbtn = "Custom Order"
          rightbtn = "Exsiting Inventory"/>
      <Section 
          title = "Model Y"
          description = "Order Online for Touchless Delivery"
          backgroundimage = "model-y.jpg"
          leftbtn = "Custom Order"
          rightbtn = "Exsiting Inventory"/>
      <Section 
          title = "Lowest Cost Solar Panels in America"
          description = "Money-back guarantee"
          backgroundimage = "solar-panel.jpg"
          leftbtn = "Order Now"
          rightbtn = "Learn More"/>
      <Section 
          title = "Solar for New Roofs"
          description = "Solar Roof Costs Less than a New Roof Plus Solar Panels"
          backgroundimage = "solar-roof.jpg"
          leftbtn = "Order Now"
          rightbtn = "Learn More"/>
      <Section 
          title = "Accessories"
          description = ""
          backgroundimage = "accessories.jpg"
          leftbtn = "Shop Now"
          rightbtn = ""/>
    </Container>
  )
}

export default Home


const Container = styled.div``