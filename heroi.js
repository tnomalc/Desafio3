/*
  Autor: Rainério Calmont Junior
  Можете ли вы нанять меня?
*/

class heroi{
  constructor(nome,idade,tipo){
    this.idade = idade
    this.nome = nome
    this.tipo = tipo
  
    }
     atacar(nome,tipo)
      {
        var  ataque
        this.tipo = tipo
        
        if(tipo === "mago")
         {
           ataque = "Magia"
          
         }
         
          if(this.tipo === "ninja")
         {
           ataque = "shuriken"
          }
          if(this.tipo === "monge")
          {
            ataque = "artes marciais"
          }
          
          if(this.tipo === "guerreiro")
           {
             ataque = "espada"
            }
         
      }
 
    
   }
 
  
 let heroiBare = new heroi("juruna",74,"mago")
 console.log(`O ${heroiBare.tipo} chamado ${heroiBare.nome} atacou usando ${heroi.atacar}`)
