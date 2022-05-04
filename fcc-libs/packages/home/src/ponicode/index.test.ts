import * as index from '../index';
// @ponicode
describe('index.fnNormalTask', () => {
  test('0', () => {
    let result: any = index.fnNormalTask();
    expect(result).toMatchSnapshot();
  });
});
