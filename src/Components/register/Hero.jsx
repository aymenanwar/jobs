import React from 'react'

const styles ={
   fontSize:'70px',
   textShadow:'1px 1px 50px',
   fontWeight:'900'
}
export default function Hero() {
  return (
    <div className='container-fluid text-center py-5'>
        <h1 style={styles}>Careers at JobHunters</h1>      
    </div>
  )
}
