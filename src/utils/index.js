function getKeyByValue(object, value, format="") {
  return Object.keys(object).find((key) => formatValue(object[key], format) === formatValue(value, format));
}

const formatValue = (value, format) => {
    let formattedValue = value;
    if(format === "int") {
        formattedValue = parseInt(value, 16);
    }
    return formattedValue;
}


module.exports = {
    getKeyByValue,
    formatValue
};
