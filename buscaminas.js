var tds = document.querySelectorAll("td");
var blackGround = document.getElementById("blackGround");
var message = document.getElementById("message");
var button = document.getElementById("button");
var total = tds.length;
var counter=0;//Para las celdas vacías
var counterBomb=0;//Para las bombas

tds.forEach((item) => {
    item.classList.add("free");
});

//Añadimos nuestras bombas
for(var i = 0; i < 3; i++){
    let item = Math.floor(Math.random()*tds.length);
    tds[item].classList.add("bomb");
    tds[item].classList.remove("free");
}


//Nos recorremos todos los td DOM
tds.forEach((item) => {
    item.onclick = () => {

        //Comprobamos si la casilla a la que hemos hecho click tiene la clase bomba
        if(item.classList.contains("bomb")){
            item.style.background = "red";
            if(!item.classList.contains("opened")){
                counterBomb+=1;
                console.log(counterBomb);
            }
        }else{
            item.style.background = "green";
            if(!item.classList.contains("opened")){
                counter+=1
                console.log(counter);
            }
        }
        item.classList.add("opened");

        //Comprobamos el número de clicks que hemos hecho en cada casilla
        if(counter == document.querySelectorAll(".free").length){
            //Hacemos que el mensaje se ejecute un poco más tarde para que dé tiempo a pintarse
            setTimeout(function(){
                blackGround.classList.add("show");
                message.textContent = "Te han faltado bombas por encontrar";
            },200);
        }

        if(counterBomb == document.querySelectorAll(".bomb").length){
            setTimeout(function(){
                blackGround.classList.add("show");
                message.textContent = "Has encontrado todas las bombas";
            },200);
        }
    };
});

button.onclick = (event) => {
    event.preventDefault();
    location.reload();
}