class Schedule {

    #schedule = [...Array(1440)].fill(false);

    nextOpenMinute(){
     
      let available = null;
   
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
   
      for(let i = order.startMinute; i <= order.deliveryMinute; i++) {
        this.#schedule[i] = true;

      }

    }

    print(){
      const schedule = this.#schedule.reduce((acc, minute, i) => {
        if(this.#schedule[i - 1] === minute) {
          acc[acc.length - 1] = { ...acc[acc.length - 1], end: i };

        } else { 
          acc.push({ start: i, end: i, status: minute ? 'busy' : 'free' });
        }
        return acc;
      }, []);
      console.table(schedule);
    }

    


}



module.exports = Schedule;
