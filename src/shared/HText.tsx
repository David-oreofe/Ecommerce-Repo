import React from 'react'

type Props = {
    children: React.ReactNode;
}

const HText = ( {children}: Props) => {
  return (
    <div>
        <h1 className='basis-3/5 font-Montserrat text-2xl font-bold mt-10 text-amber-900'>
        {children}
        </h1>
    
    </div>
  )
}
export default HText;