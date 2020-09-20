import { Button, Input } from '@material-ui/core'
import React, { useState } from 'react'
import ListItem from './../ListItem/ListItem'
import './AddValues.css'
function AddValues() {
  const [input, setInput] = useState('')
  const [listItem, setListItem] = useState([])
  const addList = () => {
    setListItem((preveItem) => [...preveItem, input])
    setInput('')
  }
  return (
    <div className="addvalue">
      <div className="addvalue__container">
        <Input
          className="addvalue__container__input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <Button
          className="addvalue__container__button"
          color="default"
          variant="contained"
          onClick={() => addList()}
        >
          ADD
        </Button>
      </div>
      <ListItem listItem={listItem} />
    </div>
  )
}

export default AddValues
