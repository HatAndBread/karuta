const toSnake = (s: string) => {
  var result = s.replace(/([A-Z])/g, ' $1');
  return result.split(' ').join('_').toLowerCase();
};
const isArray = function (a: any) {
  return Array.isArray(a);
};
const isObject = function (o: any) {
  return o === Object(o) && !isArray(o) && typeof o !== 'function';
};
const snakeize = function (o: any) {
  if (isObject(o)) {
    const n = {};

    Object.keys(o).forEach((k) => {
      n[toSnake(k)] = snakeize(o[k]);
    });

    return n;
  } else if (isArray(o)) {
    return o.map((i) => {
      return snakeize(i);
    });
  }

  return o;
};

export default snakeize;
