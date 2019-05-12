module.exports = {
  nestedFind: function nestedFind(o, s) {
    let values = new Set();

    const mergeSets = (s1, s2) => (values = new Set([...s1, ...s2]));
    function isObject(e) {
      // check the given variable if it's object
      return typeof e === "object" ? true : false;
    }

    if (Array.isArray(o)) {
      o.forEach(x => {
        mergeSets(values, nestedFind(x, s));
      });
    } else {
      if (typeof o === "object") {
        Object.keys(o).forEach(e => {
          let io = isObject(o[e]);
          if (io) {
            // either object or array object
            if (Array.isArray(o[e])) {
              o[e].forEach(x => {
                mergeSets(values, nestedFind(x, s));
              });
            } else if (o[e] == "undefined" || o[e] == null) {
            } else {
              mergeSets(values, nestedFind(o[e], s));
            }
          } else {
            if (e === s) {
              // add value to the set
              values.add(o[e]);
            }
          }
        });
      }
    }

    return values;
  }
};
