import React from 'react'

type Props = {
  [key: string]: any;
  alt: string
}

const Image: React.FC<Props> = (props) => {
  return (
    <img {...props} alt={props.alt} />
  )
}

export default Image;