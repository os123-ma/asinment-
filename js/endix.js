






//Use an array to hold the value of the quotes
const arrayOfQuotes = [
    {'author': 'Jim Rohn', 
     'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {'author': 'Epictetus', 
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;
    
}







































// function osama (num1 , num2){
//     f = num1 + num2
//     all = f / 2
//     console.log(all)

// }

// osama(2,3)






// Ahmed => Index 0
// Sayed => Index 1
// Ali => Index 2

// let arr = ["Ahmed", "Sayed", "Ali"];

//  console.log(arr.length); // 3

//  console.log(Math.random() * arr.length);

//  console.log(Math.floor(Math.random() * arr.length));
//  console.log(Math.trunc(Math.random() * arr.length));

// console.log(arr[Math.trunc(Math.random() * arr.length)]);






// let arr = ["It's not what happens to you, but how you react to it that matters.--Epictetus", "Resentment is like drinking poison and waiting for your enemies to die.", "You miss 100% of the shots you don't take." , "Do not take life too seriously. You will not get out alive."];



// document.write(arr[Math.trunc(Math.random() * arr.length)]);


// document.getElementById("demo") .innerHTML(
    
// )
















// let osama = ["Hi osama","Hello osama" ,"How are yuo osama"];


// console.log(osama.length);
// console.log(Math.round());

