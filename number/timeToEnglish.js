module.exports = function timeToEnglish(number){
  var inputNumber  = number < 0 ? false : number
  var unitWords    = ['sec', 'min', 'hours', 'day', 'week', 'month', 'year']
  var splitUnit    = 60
  var splitCount   = unitWords.length
  var resultArray  = []
  var resultString = ''

  for (var i = 0; i < splitCount; i++){
    var unitResult = (inputNumber % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i)
    unitResult = Math.floor(unitResult)
    if (unitResult > 0){
      resultArray[i] = unitResult
    }
  }

  for (var a = 0; a < resultArray.length; a++){
    if(!resultArray[a]) continue
    resultString = String(resultArray[a]) + unitWords[a] + ' ' + resultString
  }

  return resultString.replace(/ $/, '')
}

/*
 * @example timeToEnglish(100000000000)
 * @output 2year 8month 36week 2day 57hours 46min 40sec
 */
