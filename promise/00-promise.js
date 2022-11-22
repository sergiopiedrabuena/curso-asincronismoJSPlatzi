const promise = new Promise(function (resolve,reject){
    resolve('resolve branch')
})

//declaro variable contable
const cows = 15;
//declaro contador en forma de promesa, con dos "result", una rama "resolve" y otra rama "reject"
const countCows = new Promise(function (resolve,reject) {
    if (cows > 10){
        resolve(`We have ${cows} cows on the farm`)
    } else {
        reject("there is not cows on the farm")
    }
});
//hago llamado a la ejecucion de la promesa con "then", obteniendo un posible error con "catch"
countCows.then((result)=>{
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('Ejecucion de promesa finalizada')
})