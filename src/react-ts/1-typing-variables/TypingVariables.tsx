


export const TypingVariables = () => {
  //Typing Variables 
  const url : string = "https://www.google.com";
  const num : number = 10;
  const isAuth : boolean = false;

  //Typing Functions 
  //Arguments Typing 
  //Return Typing 
  const convertCurrency = ( amount : number , currency : string ) =>{
    return `Amount : ${amount} and Currency : ${currency}`;
  }
  convertCurrency(10 , "USD")



  console.log(url , num , isAuth);
  return (
    <button>
      Click Me
    </button>
  )
}
