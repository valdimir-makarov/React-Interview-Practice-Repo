

  
  const flat = (input)=>{

     let result = []
  if(!Array.isArray(input))
   return input
  

 for(let item of input){

     result = result.concat(flat(item))
 }

 
 
return result

  }



 const  input = [1, 2, 3, [5, 7, 8, [4, 8, 5]]];


  console.log(flat(input))