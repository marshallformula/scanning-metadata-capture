import React, { PropTypes } from 'react'
import {processDocument} from '../processor';


const saveImg = () => {

    const doc = {
        some: 'value',
        goes: 'here',
        filePath: '/Users/nate/Desktop/Mauck\'s Obits/IMG_3804.JPG'
    };

    //processDocument(doc).subscribe(console.log.bind(console), console.error.bind(console), () => console.log('done!'));
    // all({include_docs: true}).subscribe(console.log.bind(console), console.error.bind(console), () => console.log('done?'));

}

const Tags = ({ left }) => {
  const style = { left }
  return (
    <div id="tags" style={style}>
        <p>this is the tkjkjags</p>
        <div id="content">
            <button className="btn btn-primary" onClick={saveImg}>save it</button>
        </div>
    </div>
  )
}

Tags.propTypes = {
  left: PropTypes.number
}

export default Tags
