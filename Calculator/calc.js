const express = require('express');
const app = express();

app.use(express.json());

app.post('/', (req, res) => {
  res.send('Hello World!')
  
});

app.post('/calculate/',(req,res)=>{
	
	var operator = req.body.TYPE;
	var num1 = req.body.a;
	var num2 = req.body.b;
	var result;

	switch(operator){
		case "add":
		result = add(num1, num2);
		break;

    case "mod":
		result = (num1%num2);
		break;

		case "subtract":
		result = subtract(num1, num2);
		break;

    case "power":
		result = (Math.pow(num1,num2));
		break;

		case "multiply":
		result = (num1*num2);
		break;

    case "square-root":
		result = Math.sqrt(num1);
		break;

		case "divide":
		result = divide(num1, num2);
		break;

		default:
		result = "Sorry, please enter a valid operator!"
	}

	function add(a, b){
		return a + b
	}

	function subtract(a, b){
		return a - b
	}

	function multiply(a, b){
		return a * b
	}

	function divide(a, b){
		return a / b
	}
    var r=result.toString()
	res.send(r);
})
const port = 3005;



app.listen(port, (error) => {
  console.log(`Example app listening on port ${port}`);
});
