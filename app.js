const internet =false 

const getData=()=>{
    return new Promise((resolve, reject)=>{
        if (internet) {
            resolve('some data 21')
            
        }else{
            reject('som error 21')
        }

    })
}
getData()
.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})