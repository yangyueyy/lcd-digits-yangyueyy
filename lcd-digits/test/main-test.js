describe('Lcd-digits', function () {
    var lcdStings;

    beforeEach(function () {
        lcdStings=lcdString();
    });

    it('should print correct LCD', function () {

        spyOn(console, 'log');

        toPrintLcd(lcdStings);

        var expectText =
            '._. ... ._. \n' +
            '|_| ..| |.| \n' +
            '..| ..| |_| \n';

        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});

describe('unitTest', function () {
    describe('splitNumber', function () {
        var lcdStings;
        var numbers;
        

        beforeEach(function () {
            lcdStings=lcdString();
        });

        it('should print correct number', function () {
            numbers = splitNumber(lcdStings);

            var expectNumber = ['9', '1', '0'];
            expect(numbers).toEqual(expectNumber);
        });
    });

    describe('buildLcdNumber', function () {
        var lcdStings;
        var numbers;

        beforeEach(function () {
            lcdStings=lcdString();
            numbers = splitNumber(lcdStings);

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

