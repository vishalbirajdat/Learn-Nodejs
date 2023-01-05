let like = 1000;

const youtube = {
    name : 'vishal birajdar',
    subscribers : 9800
}


const thapa = (a, b)=>{
    a = 200,
    b.subscribers = 100000;
}


thapa(like, youtube);

console.log(like);
console.log(youtube.subscribers);
