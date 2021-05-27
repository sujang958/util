module.exports = function timeToKorean(number){
  var inputNumber  = number < 0 ? false : number
  var unitWords    = ['초', '분', '시', '주', '월', '년']
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
/**
  * @example timeToKorean(1000000000000)
  * @output 37시 46분 40초
  */
