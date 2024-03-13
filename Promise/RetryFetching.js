const functionRetry = async (fetching, count) => {
    return new Promise((resolve, reject) => {
      let retry = 0;
  
      const attemptFetch = () => {
        fetching()
          .then((result) => {
            resolve(result);
          })
          .catch((error) => {
            if (retry < count) {
              retry++;
              attemptFetch();
            } else {
              reject("rejected");
            }
          });
      };
  
      attemptFetch();
    });
  };
  
  const fetching = async () => {
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/comments');
      const res = await data.json();
      console.log(res);
      return res; // Assuming you want to return the result
    } catch (error) {
      throw error; // Propagate the error up
    }
  };
  
  const promiseFetch = functionRetry(fetching, 5);
  