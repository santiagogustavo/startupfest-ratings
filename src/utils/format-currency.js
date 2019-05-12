export default currency => Number(currency).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
