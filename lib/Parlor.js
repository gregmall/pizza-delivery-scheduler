class Parlor {
    #drivers = [];
    #orders = [];

    #currentDriverSchedule() {
        for(let i = 0; i < this.#drivers.length; i++){
            this.#drivers[i].currentSchedule.clear();

        }
    }

    #sortOrders() {
        return this.#orders.sort((a,b) => a.deliveryMinute = b.deliveryMinute);
    }

    #calculateSchedule() {

    }

    









    addDriver(driver) {
        this.#drivers.push(driver);
        this.#calculateSchedule();
    }



}