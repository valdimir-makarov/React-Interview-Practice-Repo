


 const FlatenOj = function(input){

 let result = []

 function isObj(check) {
    return typeof variable === 'object' && variable !== null;
  }
   var Check =  isObj(input)

    if(!Check){
        result.push(input)
        
    }
    else{
 for(let item of input){
  
 if(typeof(item='object' && !Array.isArray(item))){

       temp =  FlatenOj(item)
        for(let item2 of temp){
              result.push(item2)
        } 
 }
else{
     result.push(item)
}


 }

    }


 return result

 }
 let obj = {
    Company: "GeeksforGeeks",
    Address: "Noida",
    contact: +91999999999,
    mentor: {
      HTML: "GFG",
      CSS: "GFG",
      JavaScript: "GFG",
      abc: {
        xyz: 1,
      },
    },
  };

   console.log(FlatenOj(obj))
