const deepFlat = (arr) => {
  const isDeep = arr.some(Array.isArray);
  if (!isDeep) {
    return arr;
  }

  const result = [].concat(arr);
  return deepFlat(result);
};
