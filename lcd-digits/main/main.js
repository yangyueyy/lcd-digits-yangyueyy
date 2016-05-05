function toPrintLcd(lcdStings) {
    var numbers = splitNumber(lcdStings);

    var lcdNumbers = buildLcdNumber(numbers);

    var numberText = printLcd(lcdNumbers);

    console.log(numberText);
}

function splitNumber(lcdStings) {
    var number;
    
    number = lcdStings.split('');
    
    return number;
}

function buildLcdNumber(numbers) {
    var lcdNumbers = [];
    var allLcds=describeLcd();
    
    numbers.forEach(function (number) {
        var lcdNumber = getExistLcd(allLcds, number);
        lcdNumbers.push(lcdNumber);
    });

    return lcdNumbers;
}

function getExistLcd(allLcds, number) {
    var existLcd;

    allLcds.forEach(function (allLcd) {
        if (allLcd.number == number)
            existLcd = allLcd;
    });

    return existLcd;
}

function printLcd(lcdNumbers) {
    var numberText = '';
    var numberArrays = [];
    var i = 0, j = 0;

    for (i = 0; i < lcdNumbers[0].type.length; i++) {
        var numberi = '';
        for (j = 0; j < lcdNumbers.length; j++) {
            numberi += lcdNumbers[j].type[i] + ' ';
        }

        numberArrays.push(numberi);
    }

    numberArrays.forEach(function (numberArray) {
        numberText += numberArray + '\n';
    });

    return numberText;
}

