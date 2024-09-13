"use client"
import React from 'react'
import { useTypewriter } from "react-simple-typewriter";

type typeWriteProps = {
    words: string[];
}

const TypeWriter = (props: typeWriteProps) => {
    const { words } = props;
const [text] = useTypewriter({
    words: [
        ...words
    ],
    loop: 0,
    delaySpeed: 4000,
    });
  return (
    <>{text}</>
  )
}

export default TypeWriter