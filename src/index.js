module.exports = function toReadable (number) {
    let zeroToNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let twentyToNinety = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let result = '';
    let num = number.toString()

    if (num[num.length - 2] == '0' || num[num.length - 2] == undefined) {
        result = zeroToNine[num[num.length - 1]];
    } else if (num[num.length - 2] == '1') {
        result = tenToNineteen[num[num.length - 1]];
    } else {
        if (num[num.length - 1] == '0') {
        result = twentyToNinety[num[num.length - 2] - 2];
        } else {
        result = `${twentyToNinety[num[num.length - 2] - 2]} ${zeroToNine[num[num.length - 1]]}`;
        }
    }

    if (num.length == 3) {
        if (result == 'zero') {
        result = `${zeroToNine[num[num.length - 3]]} hundred`;
        } else {
        result = `${zeroToNine[num[num.length - 3]]} hundred ${result}`;
        }
    }

    return result
}
