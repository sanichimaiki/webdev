function descriptor() {
    let words = ["beautiful", "cool", "ugly", "ok", "pretty", "lovely", "alright"];
    let intensifier = ["really", "just", "very", "highly", "rather", "absolutely", "utterly"];

    let description = `${intensifier[parseInt(Math.random()*6)]} ${words[parseInt(Math.random()*6)]}`;
    return description;
}

let name = prompt("What's your name?");

let punctuation = [".", "!", "!!", " lol"];
let emoji = ["^_^", "o3o", "uwu", "owo", ";A;", ":)", ":c", ":D", "o_o", ":3"]; 

alert(`${name} is a ${descriptor()} name${punctuation[parseInt(Math.random()*4)]} ${emoji[parseInt(Math.random()*10)]}`);