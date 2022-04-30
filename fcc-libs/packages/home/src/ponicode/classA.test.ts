import * as classA from '../classA';
// @ponicode
describe('classA.ClassA.doSomething', () => {
  let inst: any;

  beforeEach(() => {
    inst = new classA.ClassA();
  });

  test('0', () => {
    let result: any = inst.doSomething();
    expect(result).toBe(true);
  });
});
