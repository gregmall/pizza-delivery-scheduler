const Schedule = require('./Schedule');
describe('Schedule object', () => {
  it('returns the first minute that is unscheduled', () => {
    const time = new Schedule();
    const date = new Date();
    const nextAvailable = time.nextOpenMinute();
    console.log(nextAvailable);
    expect(nextAvailable).toEqual((date.getMinutes() + (date.getHours() * 60)) - 1);
  });
  it('clears out schedule and makes all positions false', () => {
    const clearSchedule = new Schedule();
    const cleared = clearSchedule.clear();
    expect(cleared).toEqual();
        
  });
   
    
    

 



});
