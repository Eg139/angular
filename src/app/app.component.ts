import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  
  palabra = ['ARBOL','AUSTRALOPITECUS','PIKACHU','DRAGON','ESTERNOCLEIDOMASTOIDEO'];
  palabraOculta = '';
  intentos = 0;
  nivel = generateRandom(0,4);
  letraUsada= [];
  ganar = false;
  perdio = false;

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
            'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor() {
    this.palabraOculta = '_ '.repeat(this.palabra[this.nivel].length);
  }


  comprobar(letra)
  {
   this.letraUsada = this.letraUsada + letra; 

    
    this.existeLetra(letra);

    const palabraOcultaArray = this.palabraOculta.split(' ');
    for(let i = 0; i < this.palabra[this.nivel].length; i++){
      if(this.palabra[this.nivel][i] === letra){
        palabraOcultaArray[i] = letra;
      }
    }

    this.palabraOculta = palabraOcultaArray.join(' ');
    this.verificaGane();
  }

verificaGane()
{
  const palabraAr = this.palabraOculta.split(' ');
  const palabraEvaluada = palabraAr.join('');

  if( palabraEvaluada === this.palabra[this.nivel])
  {
    this.ganar = true;
    console.log("Usuario Gano");
  }

  if( this.intentos >= 9 )
  {
    this.perdio = true;
    console.log("usuario perdio");
  }

}



  existeLetra(letra)
  {
    if(this.palabra[this.nivel].indexOf(letra)>=0)
    {
    //console.log('Letra existe '+letra);
  }else{
    //console.log('Letra no existe '+letra);
    this.intentos++;
  }
}


}

function  generateRandom(min,max) {
  min=Math.ceil(min);
  max =Math.floor(max);
  return Math.floor(Math.random()*(1+max-min)+min);
}
