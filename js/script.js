/*
 - Descrizione:
   Attraverso l'apposita API di Boolean
   "https://flynn.boolean.careers/exercises/api/random/mail"
   generare 10 indirizzi email e stamparli in pagina all'interno di una lista 
   (non ci interessa che siano tutti diversi).
- Bonus
  Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

const { createApp } = Vue

createApp({
    data() {
        return {

            emails:[]

        }
    },

    mounted() {

      axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((result) => {

          // console.log(result)

          // console.log(response.data.response)
          for(let i = 0; i < 10; i++) {
          const email = result.data.response;
          this.emails.push(email);

          console.log(this.emails)
          }
      });
      
    }
}).mount('#app');
