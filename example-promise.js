function getPromise(location){
  return new Promise(function(resolve,reject){
    resolve(79);
    reject("city not found");
  });
}
getPromise("Jakarta").then(function(temp){
  console.log("promise success",temp);
},function(err){
  console.log("promise error",err);
});

function addPromise(a,b){
  return new Promise(function(resolve,reject){
    if(typeof a === "number" && typeof b === "number"){
      resolve(a+b);
    }
    reject("not a number");
  });
}

addPromise(2,5).then(function(temp){
  console.log("Promise success",temp);
},function(err){
  console.log("Promise error",err);
});

addPromise("2","5").then(function(temp){
  console.log("Promise success",temp);
},function(err){
  console.log("Promise error",err);
});
