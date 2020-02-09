export default {
  filters: {
    toFloat(value) {
      return parseFloat(value).toFixed(2);
    },
    capitalize(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    formatToMin(value) {
      return value + " min";
    },
    formatToML(value) {
      return value + "ml";
    },
    formatToCurrency(value) {
      return "$ " + value;
    }
  }
};
