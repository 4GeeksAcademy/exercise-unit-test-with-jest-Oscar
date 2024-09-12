const { sum } = require('./javas.js');
test('adds 14 + 9 to equal 23',()=>{
let total = sum(14,9);
expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function(){
    const { fromEuroToDollar } = require('./javas.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745);
});
test("One euro should be 156.5 Yen", function(){
    const { fromDollarToYen } = require('./javas.js');
    const Yen = fromDollarToYen(3.5);
    const expected = 3.5 * 156.5;
    expect(fromDollarToYen(3.5)).toBe(547.75);
});
test("One euro should be 0.87 Pound", function(){
    const { fromYenToPound } = require('./javas.js');
    const Pound = fromYenToPound(3.5);
    const expected = 3.5 * 0.87;
    expect(fromYenToPound(3.5)).toBe(3.045);
});
