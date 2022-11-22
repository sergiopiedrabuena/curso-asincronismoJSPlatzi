//En este desafío debes crear una función la cual produzca una espera en un tiempo específico y debe funcionar como una promesa.
//La función deberá recibir dos parámetros:
//time = el tiempo de espera
//message = el mensaje que debe imprimir despues del tiempo de espera

function delay(time, message) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(message);
      }, time)
    })
  }

delay(2000,"Hola")