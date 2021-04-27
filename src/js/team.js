/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
export default class Team {
  constructor() {
    this.magician = {
      name: 'Magician',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 100,
      defence: 40,
    },
    this.daemon = {
      name: 'Daemon',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 100,
      defence: 40,
    },
    this.bowman = {
      name: 'Bowman',
      type: 'Bowman',
      health: 0,
      level: 1,
      attack: 25,
      defence: 25,
    },
    this.swordsman = {
      name: 'Swordsman',
      type: 'Swordsman',
      health: -5,
      level: 1,
      attack: 40,
      defence: 10,
    },
    this.undead = {
      name: 'Undead',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };
  }

  [Symbol.iterator]() {
    const persons = Object.values(this);
    let currentPersonIndex = 0;
    return {
      next() {
        const doNotHaveMorePerson = !(currentPersonIndex < persons.length);
        if (doNotHaveMorePerson) {
          return {
            value: undefined,
            done: true,
          };
        }
        return {
          value: persons[currentPersonIndex++],
          done: false,
        };
      },
    };
  }
}
