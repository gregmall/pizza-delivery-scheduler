const Order = require ('./Order');

describe('Order class', () => {
  it('gets the sum of COOK_TIME and drivingDistanceInMinutes', () => {

    const meal = new Order('meal', 400, 15);

    const totalTime = meal.startMinute();
    expect(totalTime).toEqual(365);


  });

});

