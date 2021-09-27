function getKeyByValue(object, value, format = "") {
  return Object.keys(object).find(
    (key) => formatValue(object[key], format) === formatValue(value, format)
  );
}

const formatValue = (value, format) => {
  let formattedValue = value;
  if (format === "int") {
    formattedValue = parseInt(value, 16);
  }
  return formattedValue;
};

/** Checks if given code is valid.
 * @param  {number} code
 */
const isValidCode = (code) => {
  const codeLength = code.toString().length;
  const lastDigit = code % 10;

  if (codeLength !== 6 || lastDigit === 7) {
    return false;
  }
  return true;
};

module.exports = {
  getKeyByValue,
  formatValue,
  isValidCode,
};
