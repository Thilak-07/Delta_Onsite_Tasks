const white_KEYS = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
const black_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
	key.addEventListener('click', () =>
	playNote(key))})
	
document.addEventListener('keydown', e => {
	//if (e.repeat) return 
	const key = e.key
    console.log(key)
	const whiteKeyIndex = white_KEYS.indexOf(key) 
	const blackKeyIndex = black_KEYS.indexOf(key)
    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]) 
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})
		
function playNote(key) { 
	const noteAudio = document.getElementById(key.dataset.note) 
    noteAudio.currentTime = 0
    noteAudio.play()
}

window.addEventListener("keydown", function(event) {
    event.preventDefault()
}, false);

alert("Use 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p' to play white keys & 'z', 'x', 'c', 'v', 'b', 'n', 'm' to play black keys :)")