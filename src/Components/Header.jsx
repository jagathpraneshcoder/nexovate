import React from 'react'
import coin from './../assets/bg-coin-2.svg'


const Header = () => {
  return (
    <header className='header-nt'>
        <div className='h-text'>Non - Tech</div>
        
        <img className='ace-img img-2' src={coin} alt="ace" />
        <img className='ace-img img-1' src={coin} alt="ace" />
    </header>
  )
}

export default Header