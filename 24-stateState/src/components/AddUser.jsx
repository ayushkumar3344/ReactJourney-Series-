

const AddUser = ({setUser}) => {

  return (
    <div>
      <h1>AddUser</h1>
      <input 
      onChange={(e) => setUser(e.target.value)}
      type="text" 
      placeholder='enter user name' />
      <hr />
    </div>
  )
}

export default AddUser
