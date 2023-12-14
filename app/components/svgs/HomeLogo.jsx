import Image from 'next/image'
import React from 'react'

function HomeLogo(props) {
  return (
    <Image src={'home-logo.svg'} alt='logo' width={100} height={100} {...props} />
  )
}

export default HomeLogo