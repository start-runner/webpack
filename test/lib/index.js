import test from 'tape';

import * as task from '../../lib/';

test('build: basic', (t) => {
  t.equal(
    typeof task.build,
    'function',
    '1st function'
  );

  t.equal(
    typeof task.build(),
    'function',
    '2nd function'
  );

  t.equal(
    typeof task.build()(),
    'function',
    '3rd function'
  );

  t.end();
});

test('dev: basic', (t) => {
  t.equal(
    typeof task.dev,
    'function',
    '1st function'
  );

  t.equal(
    typeof task.dev(),
    'function',
    '2nd function'
  );

  t.equal(
    typeof task.dev()(),
    'function',
    '3rd function'
  );

  t.end();
});
