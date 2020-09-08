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
    const schedule = new Schedule();
    const order = new Order('meal', 40, 20);
    console.table = jest.fn();
    schedule.addOrder(order);

    schedule.print();
    
    expect(console.table).toHaveBeenCalledWith([
      { start: 0, end: 40, status: 'busy' },
      { start: 41, end: 1439, status: 'free' }
    ]);




  });
  it('takes an order adds it to the schedule according to the orders startMinute and deliveryMinute', () => {
    const order = new Order('meal', 0, 50);
    newSchedule.addOrder(order);
    const nextMinute = newSchedule.nextOpenMinute();
    newSchedule.clear

    expect(nextMinute).toEqual(0);

    

      
  });


    

 



});
