const replaceStringWithElement = (str, match, fn) => {
  let curCharStart = 0;
  let curCharLen = 0;

  if (str === '') {
    return str;
  }

  const result = str.split(match);

  for (let i = 1, { length } = result; i < length; i += 2) {
    curCharLen = result[i].length;
    curCharStart += result[i - 1].length;
    result[i] = fn(result[i], i, curCharStart);
    curCharStart += curCharLen;
  }

  return result;
};

export default replaceStringWithElement;
