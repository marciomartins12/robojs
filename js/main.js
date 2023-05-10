const pecas={
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
};
const estatisticas=document.querySelectorAll("[data-estatistica]")


const controledeclasses=document.querySelectorAll("[data-controle]");
controledeclasses.forEach((elemento) => {
    
    elemento.addEventListener("click", function (evento){
      
      manipuladados(evento.target.dataset.controle, evento.target.parentNode); 
      somartudoedaroresultado(evento.target.dataset.estatisticapeca, evento.target.dataset.controle)  
    })
    
});


    function manipuladados(operacao, ope){
        const peca= ope.querySelector("[data-contador]");
        if(operacao=="-"){
            peca.value=parseInt(peca.value)-1;
            if(peca.value<=0){
                peca.value="00";
            }
        }  
        if(operacao=="+"){
            peca.value=parseInt(peca.value)+1;
        } 
    }
    function somartudoedaroresultado (peca, controle){
        if(controle=="+"){
        estatisticas.forEach((elemento)=>{
            
        elemento.textContent= parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        console.log(pecas[peca][elemento.dataset.estatistica])
        
       
        })
    }
    if(controle=="-"){
      
        estatisticas.forEach((elemento)=>{
            
            elemento.textContent= parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]

            })
          

    }
    }