export const pages = [
    {
        name:"Calculadora de área y/o perímetro.",
        Description:"Aquí podras calcular el área y/o el perimetro de un rectangulo conociendo su base y su altura.",
        image:"../Style/images/calculadora de areas y promedios.JPG",
        url: "https://alex-beltran97.github.io/Calculadora-de-area-y-o-perimetro/"
    },
    {
        name:"Presentation-card.",
        Description:"Aquí podras ver el diseño de una targeta de opresetancion demasiado basica.",
        image:"../Style/images/Presetation card.JPG",
        url: "https://alex-beltran97.github.io/Presentation-card/"
    },
    {
        name:"Consumiendo una API: Generador de perritos.",
        Description:"Aquí podras generar diferentes imagenes de perritos con tan solo pulsar un botón.",
        image:"../Style/images/Generador de perritos.JPG",
        url: "https://alex-beltran97.github.io/Generador-de-perritos/"
    },
    {
        name:"Formulario de registro funcional.",
        Description:"Aquí podras ingresar tu nombre, apellido y edad para que estos se vean reflejados en pantalla.",
        image:"../Style/images/Formulario de registro -1.JPG",
        url: "https://alex-beltran97.github.io/Generador-de-perritos/"
    },
    {
        name:"Page: Error 404 (Not-Found).",
        Description:"Aquí podras ver una maqueta de como luciria una pagina de Error 404.",
        image:"../Style/images/Error 404 not found.JPG",
        url: "https://alex-beltran97.github.io/Alex-Beltran97-Page-Error-404-Not-Found/"
    },
    {
        name:"Landing page, freeCodeCamp.",
        Description:"Aquí podras ver una maqueta de la landing page de freeCodeCamp.",
        image:"../Style/images/FreeCodeCamp.JPG",
        url: "https://alex-beltran97.github.io/Imitacion-Inicio-freeCodeCamp/"
    },
    {
        name:"Calculadora para principiante.",
        Description:"Esta calculadora solo admite sumas basicas de una cifra (por el momento).",
        image:"../Style/images/Calculadora basica.JPG",
        url: "https://alex-beltran97.github.io/calculadora/"
    },
    {
        name:"Landing page básica.",
        Description:"Aquí podras observar el diseño básico de una landing page con su repectiva semantica.",
        image:"../Style/images/Landing page basica.JPG",
        url: "https://alex-beltran97.github.io/pagina_prueba/"
    },
    {
        name:"Maqueta de formulartio de registro.",
        Description:"Aquí podras observar la maqueta de un formulario de registro básico.",
        image:"../Style/images/Maqueta de formulario.png",
        url: "https://alex-beltran97.github.io/Formulario-Registro/"
    },
    {
        name:"Reto técnico Sofka: ¿Quíen quiere ser millonario?.",
        Description:"Aquí podras jugar a quien quiere ser millonario.Diseñado para Sofka.",
        image:"../Style/images/Sofka.png",
        url: "https://alex-beltran97.github.io/Reto-tecnico-sofka-2.0/"
    },
    {
        name:"Página web para parejas.",
        Description:"Aquí podras regalarle un pequeño detalle a tu pareja con una serie de divertidas preguntas y mensajes romanticos.",
        image:"../Style/images/Pagina para parejas.JPG",
        url: "https://alex-beltran97.github.io/pagina-hecha-para-parejas/"
    },

];


pages.sort((a,b)=>{
    if (a.name<b.name){
        return -1;
    }else if (a.name>b.name){
        return 1;
    }else{
        return 0;
    }
})
