import {storeState, changeState, attackEnemy, dogState, skeletonAttack, skeletonState, dogHitSkeleton } from '../src/js/bone.js';

describe ('attackEnemy', () => {

  // beforeEach(() => {

  // });

  test('Should decrease Dogs health by 2', () => {
    dogState(skeletonAttack);
    const result = dogState();
    expect(result).toEqual({Health: -1, Strength: 2});
  });
});

describe ('attackSkeleton', () => {
  test('Should decrease Skeletons health by 2', () => {
    skeletonState(dogHitSkeleton);
    const result = skeletonState();
    expect(result).toEqual({Health: -1, Strength: 2});
  });
});


