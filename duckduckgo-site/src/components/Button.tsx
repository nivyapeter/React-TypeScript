import React from 'react'

type ButtonProps = {
    text:string,
    class?:string,
    link:string
}

function Button(props:ButtonProps) {
  return (
    <div className="hidden md:block">
        <a href={props.link}>
        <button className={props.class? props.class : "button"}>{props.text}</button>
        </a>
    </div>
  )
}

export default Button