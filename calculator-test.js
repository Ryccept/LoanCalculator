describe('general testing', () =>{
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 30000, years: 10, rate: 2.7 };
  expect(calculateMonthlyPayment(values)).toEqual('285.55');
});

it("should return a result with 2 decimal places", function() {
  const values = {amount: 20000, years: 2.2, rate: 3.513};
  expect(calculateMonthlyPayment(values)).toEqual('800.00');
});
})
