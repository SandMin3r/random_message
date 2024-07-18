//random number generator between 0 and num given -1
//=======================================================================================================================
const randomNum = num => {
    return Math.floor(Math.random()*num)
}

// messageArray
//=======================================================================================================================
const messageArray = {
    'ID': ['58H311 - Alias: Helen', '58F555 - Alias: Fifi', '58R212 - Alias: R2-ro'],
    'Program': ['AI-1.21.4', "Windows 97 ;) nahh! I'm a Rogue one.", 'AI-1.20.2', 'Static-2.5.7'],
    'Purpuse': ['Cleaner', 'Fighter', 'Manteinance', 'Transport', 'Host'],
    'Status': ['Ready for orders', 'On duty', 'Warning - Battery under 10%', 'Overheated - waiting to cooldown'],
};

//function for random mix of responses
//=======================================================================================================================
const randomResponse = () => {
    let randResponse = [];
    let i=0;
    for (let key in messageArray) {
        randResponse.push(key + ': ' + messageArray[key][randomNum(messageArray[key].length)])
    };
    return randResponse.join('\n');
}

console.log(randomResponse());
