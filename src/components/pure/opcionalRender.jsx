import React,{useState} from 'react'


const logguedStyle={
    backgroundColor: 'green',
    color: 'white'
}
const unLogguedStyle={
    backgroundColor: 'tomato',
    color:'white',
    fontWeight: 'bold'
}
//login/ loout buttons
const LoginButton = ({loginAction, propStyle})=>{
    return(
        <button style={propStyle} onClick={loginAction}>Login</button>
    )
}
const LogoutButton = ({logoutAction,propStyle})=>{
    return(
        <button style={propStyle} onClick={logoutAction}>Logout</button>
    )
}

function OpcionalRender() {

    const [acces, setAcces] = useState(true);
    const [nmessages, setNmessages] = useState(0);

/*     const updateAcces = ()=>{
        setAcces(!acces)
    } */
    const loginAction = () =>{
        setAcces(true)
    }
    const logoutAction = () =>{
        setAcces(false)
    }


    let opcionalbutton;

    if (acces){
        opcionalbutton= <LogoutButton propStyle={logguedStyle} logoutAction={logoutAction}></LogoutButton>
    } else {
        opcionalbutton= <LoginButton propStyle={unLogguedStyle} loginAction={loginAction}></LoginButton>
    }

    let addMessages = ()=>{
        setNmessages(nmessages+1)
    }

  return (
    <div>
    {/* optional button */}
      {opcionalbutton}
      {/* n messages unread */}
      { nmessages ===1 && <p>you have {nmessages} new message</p>}
      {nmessages >1 && <p>you have {nmessages} new messages</p>}
      {nmessages ===0 && <p>you have no messages</p>}
      <button onClick={addMessages} >add new message</button>
    </div>
  )
}

export default OpcionalRender
