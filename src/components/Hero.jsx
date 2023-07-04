
import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>Hero
   
<ul>
    <li><Link to='/hero/1'>heroONe</Link></li>
    <li><Link to='/hero/2'>heroTwo</Link></li>
    <li><Link to='/hero/new'>Footer</Link></li>
</ul>


 
    </div>

    
  )
}

export default Hero
