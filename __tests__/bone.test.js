import {storeState, changeState, attackEnemy, dogState, skeletonAttack } from '../src/js/bone.js';

describe ('attackEnemy', () => {

  // beforeEach(() => {

  // });

  test('Should decrease Dogs health by 2', () => {
    dogState(skeletonAttack);
    const result = dogState();
    expect(result).toEqual({Health: -3, Strength: 2});
  });
});


