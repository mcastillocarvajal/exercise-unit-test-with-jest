
// fromDollarToYen test
test("A hundred dollars should be 10658.333333333336 yenes", () => {
    //import the function from app.js (The function should be imported in each test for optimization purposes.)
    const { fromDollarToYen } = require('./app.js')
    // use the function like its suppoed to be used
    const yenes = fromDollarToYen(100)
    // Operation to get the amount converted.
    const expected = (100 / 1.2) * 127.9; 
    // this is the comparison for the unit test
    expect(expected).toBe(yenes);
});

// fromEuroToDollar test
test("A hundred euros should be 120 dollars", () => {
    //import the function from app.js (The function should be imported in each test for optimization purposes.)
    const { fromEuroToDollar } = require('./app.js')
    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(100)
    // Operation to get the amount converted.
    const expected = 100 * 1.2; 
    // this is the comparison for the unit test
    expect(expected).toBe(dollars);
});

// fromYanToPound test
test("1279 yanes should be 8 pounds", () => {
    //import the function from app.js (The function should be imported in each test for optimization purposes.)
    const { fromYanToPound } = require('./app.js')
    // use the function like its suppoed to be used
    const pounds = fromYanToPound(1279)
    // Operation to get the amount converted.
    const expected = (1279 / 127.9) * 0.8; 
    // this is the comparison for the unit test
    expect(expected).toBe(pounds);
});