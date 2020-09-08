class Schedule {

    #schedule = [...Array(1439)].fill(false);

    nextOpenMinute(){
      // const date = new Date();
       let available = null;
      // let time = (date.getMinutes() + (date.getHours() * 60));
   
      // console.log(time);
      // do{
      //   if(this.#schedule[time - 1] === false){
      //     available = time - 1;
      //     console.log(available);
      //     return available;



      //   } else {
      //     time ++;
      //   }

      
    

         
      // } while(this.#schedule[time - 1] === true);
      for(let i = 0; i < this.#schedule.length; i++){
        if(this.#schedule[i] === false){
          available = i;
          return available;
        }
      }


    }
    clear(){

      this.#schedule.fill(false);
      

    }

    addOrder(order){
      this.#schedule.fill(true, order.startMinute(), order.deliveryMinute);
      console.log(this.#schedule);

    }

    


}



module.exports = Schedule;
