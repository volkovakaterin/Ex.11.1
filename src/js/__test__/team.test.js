/* eslint-disable linebreak-style */
/* eslint-disable no-console */

import Team from '../team';


test('team', () => {
  function test() {
    const team = new Team();
    for (const person of team) {
      console.log(person);
    }
  }
  const expected = undefined;
  expect(test()).toEqual(expected);
});
