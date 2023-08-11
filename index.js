const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards() {
    const emptyArray = [];
  for (let i = 0; i < names.length; i++) {
    emptyArray.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
  return emptyArray;
}

console.log(writeCards());

function countDown(startingNumber) {
    let currentNumber = startingNumber;
  
    while (currentNumber >= 0) {
      console.log(currentNumber);
      currentNumber--;
    }
  }
  
  countDown(10); // This will log the numbers from 10 down to 0
  
