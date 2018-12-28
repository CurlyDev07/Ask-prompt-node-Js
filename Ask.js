var fs = require('fs');

// use the write funct to print out a string
var question = [
    'What is your name?',
    'What is your fav hobby?',
    'What is your preferred programming language?'
];
var result = [];
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
    answer.push(data.toString());
    process.stdout.write(data.toString());
    
    if (question.length > answer.length) {
        ask(answer.length);
    }else{
        var i = 0;
        console.log('-----------------Questions-------------------');
       
        question.forEach(questions => {

            console.log(`${questions} => ${answer[i]}`);
            result += questions.toString() +' => ' + answer[i].toString();
            i++;
        });

      
     
        console.log('------------------------------------');
        console.log(result);
        console.log('------------------------------------');
     

        fs.writeFile('Result.md', result, function(err){
            console.log('------------------------------------');
            console.log("File Created");
            console.log('------------------------------------');
        });

        // process.exit();
    }
});

ask(0);