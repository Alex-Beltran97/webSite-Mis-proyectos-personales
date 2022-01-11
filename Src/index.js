const projects = document.querySelector("#projects");
const exitProjects = document.querySelector(".exit-menu");
const menuProjects = document.querySelector(".menu_proyectos");
const  exit = document.querySelector(".exit-menu")

import {pages} from "./data.js";

pages.map(item=>{
    const ulItem = document.createElement("ul");
    const liItem = document.createElement("li");
    const link = document.createElement("a");
    const img = document.createElement("img");
    img.setAttribute("src",item.image);
    img.setAttribute("title",item.Description);
    link.setAttribute("href",item.url);
    link.setAttribute("target","_blank");
    link.innerHTML = item.name;    
    liItem.appendChild(img);
    liItem.appendChild(link);
    ulItem.appendChild(liItem);
    menuProjects.appendChild(ulItem);
})

let openProjects = false;

const showProjects = ()=>{
    openProjects = !openProjects;
    if (openProjects){
        menuProjects.removeAttribute("style");
        exit.removeAttribute("style");
    }
}

const leaveProjects = ()=>{
    openProjects = !openProjects;
    if (openProjects == false){
        menuProjects.setAttribute("style","display:none");
        exit.setAttribute("style","display:none");
    }
};

if(openProjects==false){
    projects.addEventListener("click",showProjects);
}

exitProjects.addEventListener("click",leaveProjects);