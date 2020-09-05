const Schedule = require('./Schedule');
const Order = require('./Order');
describe('Schedule object', () => {
  const newSchedule = new Schedule();
  it('returns the first minute that is unscheduled', () => {
    
    const date = new Date();
    const nextAvailable = newSchedule.nextOpenMinute();
    console.log(nextAvailable);
    expect(nextAvailable).toEqual((date.getMinutes() + (date.getHours() * 60)) - 1);
  });
  it('clears out schedule and makes all positions false', () => {
    const clearSchedule = new Schedule();
    const array = [true, false, false, false, true, true, true];

    // const cleared = clearSchedule.clear();
    // expect(cleared).toEqual([false, false, false, false, false, false, false]);
        
  });
  it('prints the schedule', () => {




  });
  it('takes an order adds it to the schedule according to the orders startMinute and deliveryMinute', () => {
    const order = new Order('meal', 0, 50);
    const addedOrder = newSchedule.addOrder(order);

    expect(addedOrder).toEqual()

    

      
  });
    

 



});
