const Schedule = require('./Schedule');
const Order = require('./Order');
describe('Schedule object', () => {
  const newSchedule = new Schedule();
  it('returns the first minute that is unscheduled', () => {
    
    const date = new Date();
    const nextAvailable = newSchedule.nextOpenMinute();
    console.log(nextAvailable);
    expect(nextAvailable).toEqual(0);
  });
  it('clears out schedule and makes all positions false', () => {
    newSchedule.clear();
    const nextMinute = newSchedule.nextOpenMinute();
    expect(nextMinute).toEqual(0);
        
  });
  it('prints the schedule', () => {




  });
  it('takes an order adds it to the schedule according to the orders startMinute and deliveryMinute', () => {
    const order = new Order('meal', 0, 50);
    newSchedule.addOrder(order);
    const nextMinute = newSchedule.nextOpenMinute();

    expect(nextMinute).toEqual(0);

    

      
  });


    

 



});
