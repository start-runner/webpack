import test from 'tape';

import webpack from '../../lib/';

test('basic', (t) => {
  t.equal(
    typeof webpack,
    'function',
    '1st function'
  );

  t.equal(
    typeof webpack(),
    'function',
    '2nd function'
  );

  t.equal(
    typeof webpack()(),
    'function',
    '3rd function'
  );

  t.end();
});
