function extend(obj, src) {
    for (var key in src) {
        if (src.hasOwnProperty(key)) {
          obj[key] = src[key];
        }
    }
    return obj;
}

exports.group1 = {
  suffleInitialSolution: true,
  temperature: 30,
  step: 5,
  tempChange: 3,
  mu: 0.4
}
