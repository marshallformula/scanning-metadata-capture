import React, { PropTypes } from 'react';

const Viewer = ({ right, rotation, rotateLeft, rotateRight }) => {
  const style = { right }
  const trans = { transform: `rotateZ(${rotation}deg)`};

  return (
    <div id="viewer" style={style}>

      <img className="img-responsive" style={trans} src="/Users/nate/Desktop/Mauck's Obits/IMG_3804.JPG" />

      <div className="rotate">
        <button onClick={() => rotateLeft(rotation)} className="btn btn-default btn-sm">
          <span className="fa fa-rotate-left"></span>
        </button>
        <button onClick={() => rotateRight(rotation)} className="btn btn-default btn-sm">
          <span className="fa fa-rotate-right"></span>
        </button>
      </div>

    </div>
  )
}

Viewer.propTypes = {
  right: PropTypes.number,
  rotation: PropTypes.number
}

export default Viewer
