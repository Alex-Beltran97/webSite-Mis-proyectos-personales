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
        name:"Generador-de-perritos.",
        Description:"Aquí podras generar diferentes imagenes de perritos con tan solo pulsar un botón.",
        image:"../Style/images/Generador de perritos.JPG",
        url: "https://alex-beltran97.github.io/Generador-de-perritos/"
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
