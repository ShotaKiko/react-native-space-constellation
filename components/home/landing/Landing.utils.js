export default function searchFilterFunction({ text, data }) {
  if (text) {
    const newData = data.filter((item) => {
      const itemData = item.name.first
        ? item.name.first.toUpperCase()
        : "".toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    return newData;
  } else {
    return data;
  }
}
// TODO: Unit test
