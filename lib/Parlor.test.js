const Parlor = require('./Parlor');
const Driver = require('./Driver');
const Order = require('./Order');

describe('Parlor class', () => {
  it('can add drivers', () => {
    const parlor = new Parlor();
    const driver = new Driver('greg');
    parlor.addDriver(driver);
  });



});
