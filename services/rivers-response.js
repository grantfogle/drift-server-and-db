const formatRiverData = (rivers, favorite) => {
  const returnArr = [];

  rivers.forEach(river => {
    let riverObj = {
      [river.usgsId]: { river, favorite }
    };
    riverObj[river.usgsId].river.name = titleCase(
      riverObj[river.usgsId].river.name
    );
    riverObj[river.usgsId].river.watershed = titleCase(
      riverObj[river.usgsId].river.watershed
    );
    returnArr.push(riverObj);
  });
  return returnArr;
};

const titleCase = sentence => {
  // return title cased sentence
  const words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(" ");
};

module.exports = { formatRiverData };
