let precio;
let costo;


const fun1 = () => {
    setTimeout(()=>{
        costo=200;
    },2000);
}


const fun2 = (costo) => {
    precio = costo *2;
    console.log(`Precio del producto ${precio}`)
}


fun1();
fun2(costo);

// Promesa

const promise1 = () =>{
    return new Promise((resolve,reject) => {
        if(true){
            resolve(200);
        }else{
            reject(new Error('No se pudo ejecutar'))
        }
    }) 
}


promise1().then(res =>{
    fun2(res);
})
