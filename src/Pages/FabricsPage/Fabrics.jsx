import React from 'react'
import './Fabrics.scss'
import Scrolling from '../../Components/Scrolling/Scrolling'
import Menu from '../../Components/Menu/Menu'
import Fabric from '../../Components/Fabric/Fabric'
import Footer from '../../Components/Footer/Footer'

function Fabrics() {
  return (
    <div className='fabrics'>
      <Scrolling/>
      <Menu/>
      <Fabric/>
      <Footer/>
    </div>
  )
}

export default Fabrics
