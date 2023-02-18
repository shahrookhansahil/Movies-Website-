import React from 'react'
import PropTypes from 'prop-types'

const MyInfo = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.frm}</h2>
      <h2>{props.cast}</h2>
      <h2>{props.age}</h2>
    </div>
  )
}

export default MyInfo
