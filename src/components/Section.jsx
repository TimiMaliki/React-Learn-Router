
import React from 'react'
import { useParams } from 'react-router-dom'

const Section = () => {
    const {id} = useParams()
  return (
   
    <div>Section {id}</div>
  )
}

export default Section