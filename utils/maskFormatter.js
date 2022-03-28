const maskFormatter = (mask, replaceChar, value) => {
  return value.toString().split('').reduce((prevValue, currentValue, currentIndex, arr) => {
    return prevValue.replace(replaceChar, currentValue)
  }, mask)
}

export default maskFormatter
