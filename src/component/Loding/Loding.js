import React from 'react'
import './Loding.css'
import img from './Spinner-1s-200px.gif'
function Spinner() {
  return (
    <>
      <div className='container-xxl'>
        <img src={img} alt="Loding" className='lode'/>
      </div>
    </>
  )
}

export default Spinner
