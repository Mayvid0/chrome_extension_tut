document.addEventListener('DOMContentLoaded', () => {
    const dialogBox = document.getElementById('dialog-box');
    const query = { active: true, currentWindow: true };

    chrome.tabs.query(query, (tabs) => {
        dialogBox.innerHTML = getTitle(tabs[0].title);
    });
});

const getTitle = (tabTitle) => {
    const Title = `${getRandomSound()} Ahem.. I mean, we are at: ${tabTitle}`
    return Title;
}

const sounds = [
    'YEE HAWW!',
    'HEAR ME OUT!!',
    'YOU DUMBO!',
    'YOU STUPID SACK OF POTATOES!!'
]

const getRandomSound = () => {
    const sound = sounds[Math.floor(Math.random() * sounds.length)];
    return sound;
}