// Main Javascript file for the piano options and keyboard

// When true, enable the record in the functions
let recordKeyboard = false;
let arrayRecorded = [];
let flagShowNotes = false;
let flagShowKeyboard = false;
let flagDemoSong = false;
let flagRecordedSong = false;

const furElise = [
  ['rest', 0],
  ['E4', 175],
  ['D4#', 175],
  ['E4', 175],
  ['D4#', 175],
  ['E4', 175],
  ['B3', 175],
  ['D4', 175],
  ['C4', 175],
  ['A3', 350],
  ['rest', 175],
  ['C3', 175],
  ['E3', 175],
  ['A3', 175],
  ['B3', 350],
  ['rest', 175],
  ['E3', 175],
  ['G3#', 175],
  ['B3', 175],
  ['C4', 350],
  ['rest', 175],
  ['E3', 175],
  ['E4', 175],
  ['D4#', 175],
  ['E4', 175],
  ['D4#', 175],
  ['E4', 175],
  ['B3', 175],
  ['D4', 175],
  ['C4', 175],
  ['A3', 350],
  ['rest', 175],
  ['C3', 175],
  ['E3', 175],
  ['A3', 175],
  ['B3', 350],
  ['rest', 175],
  ['E3', 175],
  ['C4', 175],
  ['B3', 175],
  ['A3', 350],
  ['rest', 175],
  ['B3', 175],
  ['C4', 175],
  ['D4', 175],
  ['E4', 525],
  ['G3', 175],
  ['F4', 175],
  ['E4', 175],
  ['D4', 525],
  ['F3', 175],
  ['E4', 175],
  ['D4', 175],
  ['C4', 525],
  ['E3', 175],
  ['D4', 175],
  ['C4', 175],
  ['B3', 350],
  ['rest', 175],
  ['E3', 175],
  ['E4', 175],
  ['rest', 175],
  ['E4', 175],
  ['E4', 175],
  ['rest', 175],
  ['D4#', 175],
  ['E4', 350],
  ['rest', 175],
  ['D4#', 175],
  ['E4', 175],
  ['D4#', 175],
  ['E4', 175],
  ['D4#', 175],
  ['E4', 175],
  ['B3', 175],
  ['D4', 175],
  ['C4', 175],
  ['A3', 100],
];

// keyboard code as property and the respective musical note
const keyboardNotes = {
  81: 'C3',
  350: 'C3#',
  87: 'D3',
  51: 'D3#',
  69: 'E3',
  82: 'F3',
  53: 'F3#',
  84: 'G3',
  54: 'G3#',
  89: 'A3',
  55: 'A3#',
  85: 'B3',
  90: 'C4',
  83: 'C4#',
  88: 'D4',
  68: 'D4#',
  67: 'E4',
  86: 'F4',
  71: 'F4#',
  66: 'G4',
  72: 'G4#',
  78: 'A4',
  74: 'A4#',
  77: 'B4',
  188: 'C5',
};

// Play the sound of the key,
function keySound(soundID, recordKey) {
  if (recordKey === true) {
    const newDate = new Date();
    const newNote = [soundID, newDate.getTime()];
    arrayRecorded.push(newNote);
  }
  const audio = document.getElementById(`note-${soundID}`);
  audio.currentTime = 0;
  audio.play();
}
// The "animation" when you press a key, works with the keyboard inputs
function animationPressedKey(keyID) {
  const animated = document.getElementById(keyID);
  animated.className += ' white-active';
}

function showPianoNotes() {
  const showKeyboardNotes = document.getElementsByClassName('note');
  if (flagShowNotes === false) {
    document.getElementById('showNotes').className += ' selected';

    // Removing the not-show class of every text key
    for (let i = 0; i < showKeyboardNotes.length; i += 1) {
      showKeyboardNotes[i].className = showKeyboardNotes[i].className.replace(' not-show', '');
    }
    flagShowNotes = true;
  } else {
    document.getElementById('showNotes').className = document.getElementById('showNotes').className.replace(' selected', '');

    // Adding the not-show class of every text key
    for (let i = 0; i < showKeyboardNotes.length; i += 1) {
      showKeyboardNotes[i].className += ' not-show';
    }
    flagShowNotes = false;
  }
}

function showKeys() {
  const showKeyboardKeys = document.getElementsByClassName('keyboard-key');

  if (flagShowKeyboard === false) {
    document.getElementById('showKeyboard').className += ' selected';

    // Removing the not-show class of every text key
    for (let i = 0; i < showKeyboardKeys.length; i += 1) {
      showKeyboardKeys[i].className = showKeyboardKeys[i].className.replace(' not-show', '');
    }
    flagShowKeyboard = true;
  } else {
    document.getElementById('showKeyboard').className = document.getElementById('showKeyboard').className.replace(' selected', '');

    // Adding the not-show class of every text key
    for (let i = 0; i < showKeyboardKeys.length; i += 1) {
      showKeyboardKeys[i].className += ' not-show';
    }
    flagShowKeyboard = false;
  }
}

// The "animation" when you unpress a key, works with the keyboard inputs
function animationUnPressedKey(keyID) {
  const animated = document.getElementById(keyID);
  animated.className = animated.className.replace(' white-active', '');
}

// Function that make the promises and hel with the async for playSong Function
function timeoutPromise(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Play the song of the array
async function playSong(arraySong) {
  for (let i = 0; i < arraySong.length; i += 1) {
    // Async to play note by note
    await timeoutPromise(arraySong[i][1]);
    if (arraySong[i][0] !== 'rest' && i > 1) {
      if (arraySong[i - 1][0] === 'rest') {
        animationUnPressedKey(arraySong[i - 2][0]);
      } else {
        animationUnPressedKey(arraySong[i - 1][0]);
      }
      keySound(arraySong[i][0], false);
      animationPressedKey(arraySong[i][0]);
    }
    animationUnPressedKey(arraySong[arraySong.length - 1][0]);
    // if the button Demo is pressed in the middle of the Demo, stop the Demo
    if (flagDemoSong === false && flagRecordedSong === false) {
      animationUnPressedKey(arraySong[i][0]);
      break;
    }
  }
}
// Find the key of the piano that was pressed
document.getElementById('keyboard').addEventListener('click', (event) => {
  // e.target was the clicked element
  if (event.target && (event.target.matches('div.key-white') || event.target.matches('div.key-black'))) {
    keySound(event.target.id, recordKeyboard);
    document.getElementById(`note-${event.target.id}`).play();
  }
});

// When press a key of the keyboard
document.onkeydown = (event) => {
  const { repeat } = event;
  const x = event.which;
  const arrayNotes = Object.keys(keyboardNotes);
  if (arrayNotes.indexOf(x.toString()) === -1) {
    // console.log('Not a key of the piano');
  } else {
    // avoid repeating keystroke.
    if (repeat) {
      return;
    }
    keySound(keyboardNotes[x.toString()], recordKeyboard);
    animationPressedKey(keyboardNotes[x.toString()]);
  }
};

// When the newly pressed key is lifted
document.onkeyup = (event) => {
  const x = event.which;
  const arrayNotes = Object.keys(keyboardNotes);
  if (arrayNotes.indexOf(x.toString()) === -1) {
    // console.log('Not a key of the piano');
  } else {
    animationUnPressedKey(keyboardNotes[x.toString()]);
  }
};

// Show or hide the class not-show for notes (just a display:none in the css)
document.getElementById('showNotes').addEventListener('click', () => {
  // If Keyboard is displayed, remove it and put the notes
  if (flagShowKeyboard === true) {
    showKeys();
    showPianoNotes();
  } else {
    showPianoNotes();
  }
});

// Show or hide the class not-show for keyboard keys (just a display:none in the css)
document.getElementById('showKeyboard').addEventListener('click', () => {
  // If Notes is displayed, remove it and put the Keyboard
  if (flagShowNotes === true) {
    showPianoNotes();
    showKeys();
  } else {
    showKeys();
  }
});

// Demo button
document.getElementById('demo').addEventListener('click', () => {
  const dButton = document.getElementById('demo');
  // First click start the song, second click stop the song
  if (flagDemoSong === false) {
    dButton.className += ' selected';
    flagDemoSong = true;
    playSong(furElise);
  } else {
    dButton.className = dButton.className.replace(' selected', '');
    flagDemoSong = false;
  }
});

// Enable Record
document.getElementById('record').addEventListener('click', () => {
  arrayRecorded = [];
  document.getElementById('record').className += ' recording';
  recordKeyboard = true;
  flagDemoSong = false;
});

// Stop Recording
document.getElementById('stopRecord').addEventListener('click', () => {
  const rButton = document.getElementById('record');
  const sButton = document.getElementById('stopRecord');
  sButton.className += ' selected';
  rButton.className = rButton.className.replace(' recording', '');
  recordKeyboard = false;
  flagRecordedSong = false;
});

// Play recorded song
document.getElementById('playRecord').addEventListener('click', () => {
  const arrayToPlay = [];
  const sButton = document.getElementById('stopRecord');
  const pButton = document.getElementById('playRecord');
  sButton.className = sButton.className.replace(' selected', '');
  pButton.className += ' selected';
  for (let i = 0; i < arrayRecorded.length; i += 1) {
    if (i === 0) {
      const array = ['rest', 0];
      arrayToPlay.push(array);
    } else if (i === 1) {
      const array = [arrayRecorded[i][0], 100];
      arrayToPlay.push(array);
    } else {
      const array = [arrayRecorded[i][0], (arrayRecorded[i][1] - arrayRecorded[i - 1][1])];
      arrayToPlay.push(array);
    }
  }
  flagRecordedSong = true;
  playSong(arrayToPlay);
});
