export const galleryList = () => {
  const list = [];
  let i = 1;
  while (i <= 164) {
    list.push({
      name: `img${i}`,
      url: require(`../assets/img${i}.jpeg`)
    });
    i++;
  }
  return list;
};
