import { forwardRef, useEffect, useRef, useState } from 'react' // pasa ref a hijos

import React from 'react'
import { data } from './data';
import EmojiSearch from './EmojiSearch';
import EmojiButton from './EmojiButton';


export default forwardRef((props, inputRef) => {

  const [isOpen, setIsOpen] = useState(false);
  const [emojins, setEmojins] = useState([...data]);

  const containerRef = useRef(null)

useEffect(() => {
window.addEventListener("click", e =>{
  if(!containerRef.current.contains(e.target)){ 
setIsOpen(false)
setEmojins(data)
  }
})
}, []);

  function handleclickemoji(emoji) {

    const cursorPos = inputRef.current.selectionStart;
    const text = inputRef.current.value;
    const prev = text.slice(0, cursorPos);
    const next = text.slice(cursorPos);

    inputRef.current.value = prev + emoji.symbol + next
    inputRef.current.selectionStart = cursorPos + emoji.symbol.length
    inputRef.current.selectionEnd = cursorPos + emoji.symbol.length
    inputRef.current.focus()

  }


  function handleSearch(e) {
    const q = e.target.value

    if (!!q) {
      const search = data.filter(emoji => {
        return (
          emoji.name.toLowerCase().includes(q) ||
          emoji.keywords.toLowerCase().includes(q)
        )
      }
      )
      setEmojins([...search])

    } else {
      setEmojins([...data])
    }

  }

  /*   function EmojiPickerContainer() {
  
    return (
      <div>
       <EmojiSearch onSearch={handleSearch} />
        <div>{
          emojins.map(emoji=>(
              <div key={emoji.symbol} >{emoji.symbol}</div>
          ))
        }</div>
      </div>
    )
  } */


  return (
    <div ref={containerRef} className="inputContainer">

      <button onClick={() =>setIsOpen(!isOpen) } className="emojiPickerButton" >😀</button>
      {
        isOpen ?

          <div className='emojiPickerContainer'>
            <EmojiSearch onSearch={handleSearch} />
            <div className='emojiList' >{
              emojins.map(emoji => (
                <EmojiButton key={emoji.symbol} emoji={emoji} onClick={handleclickemoji}></EmojiButton>
              ))
            }</div>
          </div>

          : ""
      }
    </div>
  )
})



