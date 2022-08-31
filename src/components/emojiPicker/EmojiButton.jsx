import React from 'react'


export default function EmojiButton({emoji, onClick}) {

    function handleClick () {
        onClick(emoji)
    }

  return (
    <button className='emokiButton' onClick={handleClick} >{emoji.symbol}</button>
  )
}
