function writeCards(names, event) {
    const messages  = [];

    for (let i = 0; i < names.length; i++ ) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
      
    }
return messages; 
   
}
writeCards(["Ashley", "Sharon", "Alex"], "birthday")

function countDown (){
    let count = 10
    while (count > -1) {
        console.log(count);
        count--;
    }
}
countDown();
