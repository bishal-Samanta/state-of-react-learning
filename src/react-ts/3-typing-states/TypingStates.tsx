import { useState } from "react"

type User = {
    name : string ;
    age? : number;
}


export const TypingStates = () => {

  //By Default its assigning the numnber 
  const [count , setCount] = useState(0);

  //We can also implecitly do it 
  const [age , setAge] = useState<number>(20)
  //Type of setCount - React.Dispatch<React.SetStateAction<number>>


  //But using non primitive we need to assigning it 
  const [user , setUser] = useState<User | null>(null);


  return (
    <div>
        <p>Count: {count}</p>
        <p>Age : {age}</p>
        <p>User Name : {user?.name}</p>
        <button onClick={()=> setUser({ name : "Bishal"})}>Change USER name</button>
        <button onClick={() => setCount(count + 1)} >Click</button>
        <button onClick={() => setAge(age + 1)} >Click</button>
    </div>
  )
}
