import { createMachine, interpret } from 'xstate';
import str from '@mmfcc/core';
console.log('str11', str);
type DemoData = {
  userId: number;
  user: string;
  error: null | Error;
  data?: object;
};

export const machine =
  /** @xstate-layout N4IgpgJg5mDOIC5QQPZQHQENYBsxgAcBiAd0wGs4BaAVwMVAJVgEsAXFlAOwZAA9EVAEwAOdABYAbFKEB2AJyyArCJGyRQoQBoQAT0Tj56OQAYAjELMiTp2QGZJSgL5OdqDNjyEiAMxQoIKhwaACcwXiZWDm5eAQQqCxN0ETshSSElDPk0lJEdfXjE9DMzSRN5cUNMk2lxFzc0LDJKX0wcHFgqT3x6JBBI9k4ePriLO2NLcTlJESVxJTsRSXzBIQcJeTKNWTXs+RNnepAuALhedyxcHojmQZiRwTsTMSkSuyUrGYPZlfjU9FkskkChShnkS3EsiOF0wzXCfQG0WGoFGC2Si3EJhqBymSkcvymEkxwIh0hSc2haBuUSGsUe-1eZnen2sKiUvyoTyM4iWFU0GW+8kOLiAA */
  createMachine(
    {
      id: 'dog',
      initial: 'asleep',
      states: {
        asleep: {
          on: {
            'wakes-up': {
              actions: 'go wakes up',
              target: 'awake',
            },
            'food-lure': {
              actions: 'give food',
              target: 'awake',
            },
          },
        },
        awake: {
          entry: 'awake entry',
          exit: 'awake out',
          on: {
            'falls-asleep': {
              actions: 'go asleep',
              target: 'asleep',
            },
          },
        },
      },
    },
    {
      actions: {
        'go wakes up': () => {
          alert('go wakes up');
        },
        'give food': () => {
          alert('give food');
        },
        'go asleep': () => {
          alert('go asleep');
        },
        'awake entry': () => {
          alert('awake entry');
        },
        'awake out': () => {
          alert('awake out');
        },
      },
    }
  );
const toggleService = interpret(machine)
  .onTransition(state => {
    console.log(state.value);
    window.dispatchEvent(new CustomEvent('xxx', { detail: state.value }));
  })
  .start();

// toggleService.send('wakes-up');
const fnNormalTask = () => {
  return new Promise<DemoData>((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      console.log('random', random);
      if (random > 0.5) {
        resolve({
          userId: random,
          user: 'fcc',
          error: null,
          data: {
            str,
          },
        });
      } else {
        reject({
          userId: 0,
          user: '',
          error: new Error('test'),
          data: {},
        });
      }
    }, 1000);
  });
};

export { fnNormalTask };
