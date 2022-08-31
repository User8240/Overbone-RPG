
const Skeleton = { Health: 1, Strength: 2 };
const Dog = { Health: 1, Strength: 2 };

export const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

const stateControl = storeState();
const skeletonState = storeState(Skeleton);
export const dogState = storeState(Dog);

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    });
  };
};

export const attackEnemy = (playerProp) => {
  return (playerState) => {
    return (enemyProp) => {
      return (enemyState) => ({
        ...enemyState,
        [enemyProp]: (enemyState[enemyProp]) - (playerState[playerProp])//value might be playerState.Strength? - SGplayerStrength divided by defenseSG

      });
    };
  };
};


//BELOW will increase the health by 2
const boneRecharge = changeState("Health")(2);
//skeletonState(boneRecharge);

//BELOW will decrease the health by -2
const dogAttack = changeState("Health")(-2);
//skeletonState(dogAttack);

export const skeletonAttack = attackEnemy('Strength')(Skeleton)
('Health');
dogState(skeletonAttack);

// const throwBone = changeState("Bones")(-1);
//enemyProp = Health




// const attack = attackEnemy('Strength')(Skeleton)('Health');
// const playerAttack = (playerState) =>{
//   return (enemyState) => ({
    
//     ["Health"]: (enemyState.Health) - (playerState.Strength)
//   })
// }

// enemyDawg {

//   Strength: 0
// }

                      //playerProp //PlayerState //enemyProp

// const dogAttack = attack("enemyDawg");

//FUNCTION THAT STORES OUR STATE
//   const storeState = () => {
//   let currentState = {};
//   return (stateChangeFunction = state => state) => {
//     const newState = stateChangeFunction(currentState);
//     currentState = {...newState};
//     return newState;
//   }
// }

//
//  const stateControl = storeState();

//  stateControl(feed);

//FUNCTION FACTORY
// const changeState = (prop/SOIL) => {
//   return (value/2) => {
//     return (state/PLANT) => ({
//       ...state/PLANT,
//       [prop] : (state[prop] || 0) + value/2
//     })
//   }
// }


// const feed = changeState("soil")(2);

//  { soil: 2 }

// const Skeleton = {
//   //Stats
//   "Health": 10,
//   "Strength": 5,
//   "Defense": 5,
//   "Experience": 0,
//   "Level": 1,
//   //Items
//   "Armor": "Skeleton Chestplate",//these could add extra stats
//   "Boots": "Cowboy Boots",
//   "Bones": 2,
//   "Weapons":"Shin",
//   //Abilities
//   "Fetch": ()=>{
//   skeleton.Bones[1] - 1;
//   //attack enemy lose health func
//   }
// }

// const enemyDawg = {
//   //Stats
//   "Health": 6,
//   "Strength": 3,
//   "Defense": 2,
//   "Experience": 0,
//   "Level": 1,
//   //Item Drops??
//   "Items":"Femur", //maybe a func? () => {
//   //skeleton.Bones[1].addBone();
//   //}
//   //Abilities
//   "Bite": () =>{
//   skeleton.Health - enemyDawg.Strength;
//   }
// }