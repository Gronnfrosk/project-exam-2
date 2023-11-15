

export const lowerize = obj =>
Object.keys(obj).reduce((acc, k) => {
  acc[k.toLowerCase()] = obj[k];
  return acc;
}, {});