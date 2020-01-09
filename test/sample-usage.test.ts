import value from '../src/value';

describe('Sample real usage', () => {
  test('value', () => {
    expect(value.get()).toBe(42);
  });
});
