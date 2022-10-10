//ask for input and store value
let firstNo = +prompt('Input your first no?', '');

let secondNo = +prompt('Input your second no?', '');
//ask for operator
let operator = prompt("Input your operator?", "");

let Result;

//set condition to perform operation based on operator
    if ( operator == "+" ) {
         Result = firstNo + secondNo;
    }

    else if (operator == "-") {
        Result = (firstNo - secondNo);
    }

    else if (operator == "/" ) {
        Result = (firstNo / secondNo);
    }

    else if (operator == "%" ) {
        Result = (firstNo % secondNo);
    }

    else if (operator == "*" ) {
        Result = firstNo * secondNo;
       
    }

alert(`${firstNo} ${operator} ${secondNo} = ${Result}`);
    //alert(`${firstNo} ${operator} ${secondNo} = ${Result}`);

//alert(Result);
//print out value
