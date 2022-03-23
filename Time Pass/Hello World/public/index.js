const populate = (memes) => {
    const container = document.getElementById('container');
    memes.map(meme => {
        const img = document.createElement('img');
        img.setAttribute('src',meme.preview[2]);
        container.appendChild(img);
    })
}

const handleEnter = (e) => {
    if(e.keyCode !== 13) return;
    fetch(`https://meme-api.herokuapp.com/gimme/${e.target.value}/50`)
    .then(res => res.json())
    .then( res =>{
        populate(res.memes);
        e.target.value = "";
    })
    .catch(e => console.log(e));
}

let input = document.getElementById('input');
input.addEventListener('keyup', handleEnter)