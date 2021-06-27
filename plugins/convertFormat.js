module.exports = (num) => {
    if (!num) return "0";
  
    const number = parseFloat(num.substr(0, num.length - 1));
    const unit = num.substr(-1);
    const zeros = { K: 1e3, k: 1e3, M: 1e6, m: 1e6, B: 1e9, b: 1e9, T: 1e12, t: 1e12};
  
    if (!zeros[unit]) return parseFloat(num);
  
    num = number * zeros[unit];
  
    return num;
  };