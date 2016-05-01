import React from 'react'
import classNames from 'classnames'

const DataFields = ({ dataFields, close }) => {

  const screenClass = classNames({
    showing: dataFields.showing
  })

  return (
    <div id="dfScreen" className={screenClass}>
      <h1>data fields</h1>
      <button onClick={close} >close </button>
    </div>
  )
}

export default DataFields