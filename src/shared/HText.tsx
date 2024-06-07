import React from 'react'

type HTextProps = {
    children: React.ReactNode;
}

function HText({children}: HTextProps) {
  return (
    <h1 className="basis-3/5 font-montserrat text-3xl font-bold">
        {children}
    </h1>
  )
}

export default HText;