import React from 'react'
import WhatIsEasyBook from '../Component/WhatIsEasyBook'
import HowItWorks from './../Component/HowItWorks';
import WhatMakesUsDifferent from '../Component/WhatMakesUsDifferent.jsx';
import MeetTheTeam from '../Component/MeetTheTeam.jsx';
import Footer from '../Component/Footer.jsx'

const About = () => {
  return (
    <div>
      <WhatIsEasyBook></WhatIsEasyBook>
      <HowItWorks></HowItWorks>
      <WhatMakesUsDifferent></WhatMakesUsDifferent>
      <MeetTheTeam></MeetTheTeam>
      <Footer></Footer>
    </div>
  )
}

export default About
