function toPrintLcd(allLcds) {
    var numbers = splitNumber();

    var lcdNumbers = buildLcdNumber(allLcds, numbers);

    var numberArrays = reconstitueLcd(lcdNumbers);

    var numberText = printLcd(numberArrays);

    console.log(numberText);
}

function splitNumber() {
    var numberstring = '910';
    var number;
    number = numberstring.split('');
    return number;
}

function buildLcdNumber(allLcds, numbers) {
    var lcdNumbers = [];

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

function reconstitueLcd(lcdNumbers) {
    var numberArrays = [];
    var i = 0, j = 0;

    for (i = 0; i < lcdNumbers[0].type.length; i++) {
        var numberi = '';
        for (j = 0; j < lcdNumbers.length; j++) {
            numberi += lcdNumbers[j].type[i] + ' ';
        }

        numberArrays.push(numberi);
    }

    return numberArrays;
}

function printLcd(numberArrays) {
    var numberText = '';

    numberArrays.forEach(function (numberArray) {
        numberText += numberArray + '\n';
    })

    return numberText;
}

