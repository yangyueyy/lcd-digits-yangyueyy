describe('Lcd-digits', function () {
    var allLcds;

    beforeEach(function () {
        allLcds = describeLcd();
    });

    it('should print correct LCD', function () {

        spyOn(console, 'log');

        toPrintLcd(allLcds);

        var expectText =
            '._. ... ._. \n' +
            '|_| ..| |.| \n' +
            '..| ..| |_| \n';

        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});


describe('unitTest', function () {
    describe('splitNumber', function () {
        var numbers;
        var numberstring = '910';

        beforeEach(function () {

        });

        it('should print correct number', function () {
            numbers = splitNumber();

            var expectNumber = ['9', '1', '0'];
            expect(numbers).toEqual(expectNumber);
        });
    });

    describe('buildLcdNumber', function () {
        var allLcds;
        var numbers;

        beforeEach(function () {
            allLcds = describeLcd();
            numbers = splitNumber();

        });

        it('should print correct lcdNumbers', function () {
            var lcdNumbers = buildLcdNumber(allLcds, numbers);

            var expectNumber = [
                {
                    number: 9,
                    type: ['._.',
                        '|_|',
                        '..|']
                },
                {
                    number: 1,
                    type: ['...',
                        '..|',
                        '..|']
                },
                {
                    number: 0,
                    type: ['._.',
                        '|.|',
                        '|_|']
                }
            ];

            expect(expectNumber).toEqual(lcdNumbers);
        });
    });

    describe('reconstitueLcd', function () {
        var allLcds;
        var numbers;

        beforeEach(function () {
            allLcds = describeLcd();
            numbers = splitNumber();
        });

        it('should print correct reconstitueLcd', function () {
            var lcdNumbers = buildLcdNumber(allLcds, numbers);
            var numberArrays = reconstitueLcd(lcdNumbers);
            var expectArrays = [
                '._. ... ._. ',
                '|_| ..| |.| ',
                '..| ..| |_| '
            ];

            expect(expectArrays).toEqual(numberArrays);
        });
    });
});

