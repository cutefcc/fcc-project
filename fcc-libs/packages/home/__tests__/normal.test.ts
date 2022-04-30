import { normalTask } from '../src/index';
// @ponicode
describe('normal task resolves', () => {
  it('fetchData', async () => {
    const data = await normalTask();
    expect(data.user).toBe('fcc');
  });
});
