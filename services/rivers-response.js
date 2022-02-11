const formatRiverData = (rivers, favorite) => {
  const returnArr = [];

  rivers.forEach(river => {
    let riverObj = {
      [river.usgsId]: { river, favorite }
    };
    returnArr.push(riverObj);
  });
  return returnArr;
};

module.exports = { formatRiverData };
