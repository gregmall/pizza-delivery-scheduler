const Order = require ('./Order');

describe('Order class', () => {
  it('gets the sum of COOK_TIME and drivingDistanceInMinutes', () => {

    const meal = new Order('meal', 400, 15);

    const totalTime = meal.startMinute();
    expect(totalTime).toEqual(365);


  });
  it('gets returns name and delivery minute that it is sent', () => {

    const meal = new Order('meal', 30, 20);
    const time = new Order ('meal', 400, 20);
    const newMeal = meal.name;
    const newTime = time.deliveryMinute;
    expect(newMeal).toEqual('meal');
    expect(newTime).toEqual(400);
    
    
    
  });

});

