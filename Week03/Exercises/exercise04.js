// Create a post-it wall to save a simple text note in Local Storage

let notes = [];
function showNotes() {
  notes = (JSON.parse(localStorage['notes']));
  for (let i = 0; i < notes.length; i++) {
    const litem = document.createElement('li');
    let node = document.createTextNode(notes[i]);
    litem.appendChild(node);
    document.getElementById('list').appendChild(litem);
  }
}
function saveNote() {
  let textNote = document.getElementById('toRemember').value;
  notes.push(textNote);
  const allNotes = JSON.stringify(notes);
  localStorage.setItem('notes', allNotes);
}
try {
  showNotes();
} catch (err) {
  notes = [];
}
document.getElementById('toSave').addEventListener('click', saveNote);
