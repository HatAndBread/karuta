const toCamel = (s: string) => {
  return s.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace('-', '').replace('_', '');
  });
};
const isArray = function (a: any) {
  return Array.isArray(a);
};
const isObject = function (o: any) {
  return o === Object(o) && !isArray(o) && typeof o !== 'function';
};
const camelize = function (o: any) {
  if (isObject(o)) {
    const n = {};

    Object.keys(o).forEach((k) => {
      n[toCamel(k)] = camelize(o[k]);
    });

    return n;
  } else if (isArray(o)) {
    return o.map((i) => {
      return camelize(i);
    });
  }

  return o;
};

export default camelize;
