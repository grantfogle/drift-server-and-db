const formatRiverData = (rivers, favorite) => {
  const titleCasedRivers = rivers.map(river => {
    river.name = titleCase(river.name);
    river.watershed = titleCase(river.watershed);
    river.favorite = favorite;
    return river;
  });
  return titleCasedRivers;
};

const titleCase = sentence => {
  const words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(" ");
};

module.exports = { formatRiverData };
