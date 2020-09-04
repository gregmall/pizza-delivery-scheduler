const Order = require ('./Order');

describe('Order class', () => {
  it('gets the sum of COOK_TIME and drivingDistanceInMinutes', () => {

    const newOrder = new Order();

    const totalTime = newOrder.getTotalTime(30);
    expect(totalTime).toEqual(50);


  });

});

