describe('Lcd-digits', function () {
    var lcdStrings;

    beforeEach(function () {
        lcdStrings = lcdString();
    });

    it('should print correct LCD', function () {

        spyOn(console, 'log');

        toPrintLcd(lcdStrings);

        var expectText =
            '._. ... ._. \n' +
            '|_| ..| |.| \n' +
            '..| ..| |_| \n';

        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});

describe('unitTest', function () {
    describe('splitNumber', function () {
        var lcdStrings;
        var numbers;


        beforeEach(function () {
            lcdStrings = lcdString();
        });

        it('should print correct number', function () {
            numbers = splitNumber(lcdStrings);

            var expectNumber = [9, 1, 0];
            expect(numbers).toEqual(expectNumber);
        });
    });

    describe('buildLcdNumber', function () {
        var lcdStrings;
        var numbers;

        beforeEach(function () {
            lcdStrings = lcdString();
            numbers = splitNumber(lcdStrings);

        });

        it('should print correct lcdNumbers', function () {
            var lcdNumbers = buildLcdNumber(numbers);

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

});

