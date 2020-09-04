class Order {
    name;
    deliveryMinute;
    #COOK_TIME =20;
    #drivingDistanceInMinutes;
    

    constructor(name, deliveryMinute, drivingDistanceInMinutes) {
      this.name = name;
      this.deliveryMinute = deliveryMinute;
      this.#drivingDistanceInMinutes = drivingDistanceInMinutes;
      
    }
    getTotalTime(minutes) { return minutes + this.#COOK_TIME; }
      

}
module.exports = Order;

