module.exports = function reverse (n) {
  const numToStringToArrayToJoin = Math.abs(n).toString().split('').reverse().join('');
  return Number(numToStringToArrayToJoin);
}
