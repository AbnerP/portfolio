import React from 'react'
import "./Resume.css"

function Resume() {
  return (
    <div className='resume'>
      {/* <iframe src="../assets/Abner_Pena_Resume_web.pdf" style="width: 100%;height: 100%;border: none;"></iframe> */}
      {/* <embed type='application/html' src="../assets/Abner_Pena_Resume.html" width="800px" height="2100px" /> */}
      <img className='resume__image' src={require("../../assets/Abner_Pena_Resume.png")} alt="" />
    </div>
  )
}

export default Resume
