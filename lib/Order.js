class Order {

        name;
        deliveryMinute;
        #COOK_TIME = 20;
        #drivingDistanceInMinutes;
        
    
        constructor(name, deliveryMinute, drivingDistanceInMinutes) {
          this.name = name;
          this.deliveryMinute = deliveryMinute;
          this.#drivingDistanceInMinutes = drivingDistanceInMinutes;
          
        }
        startMinute() { 
          return this.deliveryMinute - (this.#drivingDistanceInMinutes + this.#COOK_TIME); 
        }
          
    
}
module.exports = Order;
    
    
  
