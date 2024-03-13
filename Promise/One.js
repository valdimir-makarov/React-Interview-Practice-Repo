


 var promise = new Promise(function(res,rej){

   setTimeout(()=>{
     res("resolved")
   },10000)

 })

  promise.then((res)=>{
     console.log(res)
  })