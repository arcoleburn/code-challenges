'use strict';

const wordlist = ['APPLE', 'PLEAS', 'PLEASE'];
const keypads = [
  'AELWXYZ',
  'AELPXYZ',
  'AELPSXY',
  'SAELPRT',
  'XAEBKSY',
];

const naiveKeypads = (wordList, keypads) => {
  let solution = [];
  for (let i = 0; i < keypads.length; i++) {
    let ans = 0;
    let map = {};
    for (let j = 0; j < keypads[i].length; j++) {
      map[keypads[i][j]] = 1;
    }
    for (let k = 0; k < wordList.length; k++) {
      if (!wordList[k].includes(keypads[i][0])) {
        continue;
      }
      for (let i = 0; i < wordList[k].length; i++) {
        if (map[wordlist[k][i]] !== 1) {
          break;
        } else if (
          i == wordList[k].length - 1 &&
          map[wordList[k][i]] == 1
        ) {
          ans += 1;
        }
      }
    }
    solution.push(ans);
  }
  return solution;
};

// console.log(naiveKeypads(wordlist, keypads));

const solveKeyPads = (wordList, keypads) => {
  let solution = []; //O1
  let wordListMaps = []; //O1
  let totalKeypads = keypads.length; //O1
  let totalWords = wordList.length; //O1

  //create word maps
  for (let i = 0; i < totalWords; i++) { //0(n)
    let wordMap = {};
    for (let j = 0; j < wordList[i].length; j++) {
      wordMap[wordList[i][j]] = 1;
    }
    wordListMaps.push(wordMap);
  }

  //loop over keypad
  for (let i = 0; i < totalKeypads; i++) {
    //highest answer possible is total words
    let ans = totalWords;

    //create keymap
    let keyMap = {};
    for (let j = 0; j < keypads[i].length; j++) {
      keyMap[keypads[i][j]] = 1;
    }

    //loop over word maps
    for (let j = 0; j < wordListMaps.length; j++) {
      //check for key letter
      if (wordListMaps[j][keypads[i][0]] !== 1) {
        ans--;
        continue;
      }

      //if key letter present, loop over current word map properties
      for (let property in wordListMaps[j]) {
        //if keymap does not have letter from wordmap, decrement ans by one and break to next word
        if (keyMap[property] !== 1) {
          ans--;
          break;

          //if keymap DOES have letter from wordmap, continue
        } else {
          continue;
        }
      }
    }
    solution.push(ans);
  }
  return solution;
};

console.log(naiveKeypads(wordlist,keypads))
console.log(solveKeyPads(wordlist, keypads));
