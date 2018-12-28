var fs = require('fs');

// use the write funct to print out a string
var question = [
    'What is your name?',
    'What is your fav hobby?',
    'What is your preferred programming language?'
];
var result = `----------------Result--------------------;\n`;
var answer = [];

// function result(string){
//     result = `-----------------Questions-------------------`;
//     result += string 
// }

function ask(i){
    process.stdout.write(question[i]);
    process.stdout.write("   >   ");
};

process.stdin.on('data', function(data){
    answer.push(data.toString());// push input data
    process.stdout.write(data.toString()); // return data

    if (question.length > answer.length) {
        ask(answer.length);
    }else{
        fs.writeFileSync('Result.md', result); // create a file with the content of result variable
        
        var i = 0;
       
        question.forEach(questions => {
            console.log(`${questions} => ${answer[i]}`);
            fs.appendFile('Result.md', `\n ${questions} => ${answer[i]} \n *************************`, function(err){
                console.log(`${questions} => ${answer[i]} Appended`);
            });// append each quest and answer
            i++;
        });
        // process.exit();
    }
});

ask(0);