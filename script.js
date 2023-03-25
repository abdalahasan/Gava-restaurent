const bar = document.querySelector(".fa-bars");
// const close = document.querySelector(".fa-xmark");
// const menu = document.querySelector(".menu");
bar.addEventListener("click", function(){
    document.querySelector(".menu").classList.toggle("mobile_menu")
   
})
// if(bar){
//     document.addEventListener("click", ()=>{
//         document.querySelector(".mobile_menu").style.display = "none";
//         console.log("hhhhh")
//     })
// }





// bar.addEventListener("click", show);

// function show(){
//     menu.style.display = "flex";
//     bar.style.display = "none";
//     close.style.display = "inline";
    
// }

// close.addEventListener("click", remove);

// function remove(){
//     menu.style.display = "none";
//     close.style.display = "none";
//     bar.style.display = "inline";
// }