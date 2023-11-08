

export const EventHandlersTyping = () => {

  const handleClick = ( event: React.MouseEvent<HTMLButtonElement, MouseEvent> ) =>{
    console.log(event);

  }  
  return (
    <div>
        <h3>Event handlers Typing...</h3>
        <button onClick={handleClick} >Click</button>
    </div>
  )
}
