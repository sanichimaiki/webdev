let userName = prompt("Who's your friend? (Please enter a name)");

switch(userName){
    case "Emma":
    case "Max":
    case "Anna":
    case "Adam":
    case "Trent":
    case "Phoebe":
    case "Billie":
    case "George":
    case "Isabelle":
    case "Shivi":
    case "Paul":
    case "Michael":
        console.log(`Oh, ${userName} is my friend too!`);
        break;
    default:
        console.log(`I don't think I know ${userName}`);
}