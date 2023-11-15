const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings
const animalSounds = {
  moo: 'cow',
  baa: 'sheep',
  oink: 'pig',
  cluck: 'chicken',
  neigh: 'horse'
};

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
const { moo, baa, oink, cluck, neigh } = animalSounds;

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
const traditionalAnimalNames = { bessie: 'cow', dolly: 'sheep', babe: 'pig', little: 'chicken' };
const { bessie, dolly, babe, little } = traditionalAnimalNames;

// 3. uses destructuring to declare the three traditional animal colors
const animalColors = { blackAndWhite: 'cow', black: 'sheep', pink: 'pig' };
const { blackAndWhite, black, pink } = animalColors;

// 4. uses destructuring to declare the seven traditional rainbow color variables using the color names
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. uses destructuring to declare six rainbow color variables using initials
const [r, o, y, g, b,, v] = colors;

// 6. uses destructuring to declare Indigo using indg
const [, , , , , indg, ] = colors;

// 7. uses destructuring to assign all appropriate variables using the keys as the variable names
const { muppetName, color, song, job, partner } = muppet;

// 8. uses destructuring to assign songs 2 and 4, and Kermit's job and partner
const {
  album: {
    theMuppetMovie: { song2, song4 },
  },
  nestedJob,
  nestedPartner,
} = nestedMuppet;