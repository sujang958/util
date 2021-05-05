function num_to_kor(num) {
    let bNum = BigInt(num);
    let str = bNum.toString().replace('n', '');
    let strArr = str.split('');
    let resultArr = [];
    let unitWords = {
        '여백의미': null,
        '': 3,
        천: 3,
        만: 4,
        억: 4,
        조: 4,
        경: 4,
        해: 4,
        자: 4,
        양: 4,
        구: 4,
        간: 4,
        정: 4,
        재: 4,
        극: 4,
        항아사: 4,
        아승기: 4,
        나유타: 4,
        불가사의: 4
    };
    let final = [];
    let a = 1;
    let b = 1;

    for (let i = 3; i <= strArr.length; i += 3) {
        let _arr = Object.entries(unitWords);
        let __arr = _arr[i - (3 * a) + b];
        a += 1;
        b += 1;
        if (!__arr)
            continue;
        if (str.substr(i, __arr[1]).length <= 0)
            continue;
        resultArr.push(str.substr(i-3, __arr[1]));
    }
    
    for (let i in resultArr) {
        let _arr = Object.entries(unitWords);
        _arr = _arr.slice(1);
        final.push(`${resultArr[i]}${_arr[i][0]}`);
    }

    return final.reverse().join(' ');
}