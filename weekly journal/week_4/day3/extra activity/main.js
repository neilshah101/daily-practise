const speakersul = document.getElementById("speakersul")


const speakers = [
    { name: 'John Doe', category: 'JavaScript' },
    { name: 'Mary Doe', category: 'Python' },
    { name: 'Alex Doe', category: 'iOS' },
    { name: 'Steve Doe', category: 'Kotlin' },
    { name: 'Jerry Doe', category: 'Java' },
]


for (let i = 0; i < speakers.length; i++) {
    let speaker = speakers[i]
    let speakeritem = `
    <li>
    <div>${speaker.name}, ${speaker.category}</div><br>
    </li>
    
    `
    speakersul.insertAdjacentHTML('beforeend', speakeritem)
}