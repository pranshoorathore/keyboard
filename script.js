const keypress = new Audio('./keypress.wav');
const keys = document.getElementsByClassName('key');

document.body.addEventListener('keydown', (event)=>{

    keypress.play();
    for(let i=0; i<keys.length; i++){
        if(event.key == 'a'){
            document.getElementById('a').style.backgroundColor = 'white'
            document.getElementById('a').style.color = 'black'
        }
        if(event.key == 'b'){
            document.getElementById('b').style.backgroundColor = 'white'
            document.getElementById('b').style.color = 'black'
        }
        if(event.key == 'c'){
            document.getElementById('c').style.backgroundColor = 'white'
            document.getElementById('c').style.color = 'black'
        }
    }
});

document.body.addEventListener('keyup', (event)=>{
    
    for(let i=0; i<keys.length; i++){
        if(event.key == 'a'){
            document.getElementById('a').style.backgroundColor = 'black'
            document.getElementById('a').style.color = 'white'
        }
        if(event.key == 'b'){
            document.getElementById('b').style.backgroundColor = 'black'
            document.getElementById('b').style.color = 'white'
        }
        if(event.key == 'c'){
            document.getElementById('c').style.backgroundColor = 'black'
            document.getElementById('c').style.color = 'white'
        }
    }
});

for(let i=0; i<keys.length; i++){
    keys[i].addEventListener('mousedown', (event)=>{
        keypress.play();
        if(event.target.id == 'a'){
            document.getElementById('a').style.backgroundColor = 'white'
            document.getElementById('a').style.color = 'black'
        }
    })
}

for(let i=0; i<keys.length; i++){
    keys[i].addEventListener('mouseup', (event)=>{
        if(event.target.id == 'a'){
            document.getElementById('a').style.backgroundColor = 'black'
            document.getElementById('a').style.color = 'white'
        }
    })
}
