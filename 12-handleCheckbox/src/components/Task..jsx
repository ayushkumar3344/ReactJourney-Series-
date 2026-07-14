import React, { useState } from 'react'

const Task = () => {

    const [skills, setSkills] = useState([])

    const controlOptions = (e) => {
        console.log(e.target.value, e.target.checked); 
        if(e.target.checked){
            setSkills([...skills,e.target.value])
        } else {
            setSkills([...skills.filter((items) => items!=e.target.value)])
        }
    }

  return (
    <div>
      <h1>Select Your Skills</h1>

      <input 
      onChange={controlOptions}
      value="javaScript"
      id='javascript'
      type="checkbox"/>
      <label htmlFor="javascript">Java Script</label>
      <br /><br />

      <input 
      onChange={controlOptions}
      value="python"
      id='Python'
      type="checkbox"/>
      <label htmlFor="Python">Python Programming</label>
      <br /><br />

      <input 
      onChange={controlOptions}
      value="MongoDB"
      id='MongoDB'
      type="checkbox"/>
      <label htmlFor="MongoDB">MongoDB</label>
      <br /><br />

      <input 
      onChange={controlOptions}
      value="HTML"
      id='HTML'
      type="checkbox"/>
      <label htmlFor="HTML">HTML</label>
      <br /><br />

      
      <h1>{skills.toString()}</h1>

    </div>
  )
}

export default Task
