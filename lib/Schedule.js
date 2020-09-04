class Schedule {

    #schedule = [...Array(1439)].fill(false);

    nextOpenMinute(){
      const date = new Date();
      let available = null;
      let time = (date.getMinutes() + (date.getHours() * 60));
   
      console.log(time);
      do{
        if(this.#schedule[time - 1] === false){
          available = time - 1;
          console.log(available);
          return available;



        } else {
          time ++;
        }

      
    

         
      } while(this.#schedule[time - 1] === true);


    }
    clear(){

      const cleared =  this.#schedule.fill(false);
      

    }

}



module.exports = Schedule;
