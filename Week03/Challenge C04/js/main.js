// Main Javascript file for the piano options and keyboard

var recordKeyboard = false;

// keyboard code as property and the respective musical note
const keyboardNotes = {
  9: 'C3',
  49: 'C3#',
  81: 'D3',
  50: 'D3#',
  87: 'E3',
  69: 'F3',
  52: 'F3#',
  82: 'G3',
  53: 'G3#',
  84: 'A3',
  54: 'A3#',
  89: 'B3',
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

function keySound(soundID, recordKey) {
  const audio = document.getElementById(`note-${soundID}`);
  audio.currentTime = 0;
  audio.play();
}

function animationPressedKey(keyID) {
  const animated = document.getElementById(keyID);
  console.log(animated.className);
  animated.className += ' white-active';
}

function animationUnPressedKey(keyID) {
  const animated = document.getElementById(keyID);
  animated.className = animated.className.replace(' white-active', '');
}

document.getElementById('keyboard').addEventListener('click', (event) => {
  // e.target was the clicked element
  if (event.target && (event.target.matches('div.key-white') || event.target.matches('div.key-black'))) {
    keySound(event.target.id, false);
    document.getElementById(`note-${event.target.id}`).play();
  }
});

document.onkeydown = (event) => {
  const repeat = event.repeat;
  const x = event.which;
  const arrayNotes = Object.keys(keyboardNotes);
  if (arrayNotes.indexOf(x.toString()) === -1) {
    console.log('Not a key of the piano');
  } else {
    // avoid repeating keystroke.
    if (repeat) {
      return;
    }
    keySound(keyboardNotes[x.toString()], false);
    animationPressedKey(keyboardNotes[x.toString()]);
  }
};

document.onkeyup = (event) => {
  const x = event.which;
  const arrayNotes = Object.keys(keyboardNotes);
  if (arrayNotes.indexOf(x.toString()) === -1) {
    console.log('Not a key of the piano');
  } else {
    animationUnPressedKey(keyboardNotes[x.toString()]);
  }
};
