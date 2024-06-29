let mainBox = document.querySelector("main");
let toggler = document.querySelector("#toggler");
let contactBtn = document.getElementById("contact-btn");
let logoUser = document.getElementById("logo-use");
let logoPath = document.getElementById("logo-path");
let togglerCross = document.getElementById("toggler-cross");
  console.log(logoPath);
  console.log(logoUser);
toggler.addEventListener("click", ()=>{
    if(mainBox.classList.contains("top-2")){
        mainBox.classList.replace("top-2", "top-[850px]");
        contactBtn.classList.replace("text-white", "text-black");
        contactBtn.classList.replace("bg-neutral-950", "bg-white");
        logoUser.classList.replace("stroke-black", "stroke-white");
        logoPath.classList.replace("fill-black", "fill-white");
        togglerCross.classList.replace("fill-black", "fill-white");
         togglerCross.innerHTML = `<path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z"></path><path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z"></path>` 

    }else{
        mainBox.classList.replace("top-[850px]", "top-2");
        contactBtn.classList.replace("text-black", "text-white");
        contactBtn.classList.replace("bg-white", "bg-neutral-950");
        logoUser.classList.replace("stroke-white", "stroke-black");
        logoPath.classList.replace("fill-white", "fill-black")
        togglerCross.classList.replace("fill-white", "fill-black");
      
        togglerCross.innerHTML = `<path d="M2 6h20v2H2zM2 16h20v2H2z"></path>`
    }
})

