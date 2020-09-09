const Driver = require('./Driver');
const Schedule = require('./Schedule');

describe('Driver class', () => {
  it('has a name and currentSchedule', () => {
    const driver = new Driver ('greg');
    expect(driver.name).toEqual('greg');
    expect(driver.currentSchedule).toEqual(expect.any(Schedule));
  });
});
