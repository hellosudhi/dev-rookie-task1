import Alert from '@material-ui/lab/Alert/Alert'
import React from 'react'
import './ListItem.css'
function ListItem({ listItem }) {
  console.log(listItem)
  return (
    <div className="listItem">
      {listItem.map((data, index) => (
        <Alert icon={false} key={index} className="listItem__content">
          {data}
        </Alert>
      ))}
    </div>
  )
}

export default ListItem
