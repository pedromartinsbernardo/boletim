const calcular = document.getElementById('calcular')



calcular.addEventListener('click',media)

function media(){
    const bimestre1  = parseFloat(document.getElementById('bimestre1').value) 

    const bimestre2 = parseFloat(document.getElementById('bimestre2').value) 
    
    const bimestre3 = parseFloat(document.getElementById('bimestre3').value) 

    const bimestre4 = parseFloat(document.getElementById('bimestre4').value) 

    const resultado = document.getElementById('resultado')

    const media=(bimestre1+bimestre2+bimestre3+bimestre4)/4


   if(media<5){
resultado.innerHTML="reprovado"
   }else{media>5
 resultado.innerHTML="aprovado"
   }
   
}
 





