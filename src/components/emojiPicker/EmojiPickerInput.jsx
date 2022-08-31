import React, { useRef } from 'react'
import EmojiPicker from './EmojiPicker'

export default function EmojiPickerInput() {
  
  const inputRef = useRef(null)

    return (
    <div>
     <input ref={inputRef} ></input>
     <EmojiPicker ref={inputRef} />
    </div>
  )
}
