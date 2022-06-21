import React from 'react';

type Props = {
  text: string,
  class?: string
}

const Button = (props:Props) => {
  return (
    <div>
        <button className={props.class? props.class : "button"}>{props.text}</button>
    </div>
  )
}

export default Button