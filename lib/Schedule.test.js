const Schedule = require('./Schedule')
describe('Schedule object', () => {
  it('returns the first minute that is unscheduled', () => {
    const time = new Schedule();
    const nextAvailable = time.nextOpenMinute();
    console.log(nextAvailable);
    expect(nextAvailable).toEqual(989);
   
    
    

  });



});
