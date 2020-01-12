export function getRandomItem(items) {
  return Math.floor(Math.random() * items.length);
}


export function changeRandomItem(items) {

    for (let i = 0; i < 3; i++) {
      let removedItem = items.splice(getRandomItem(items), 1);
      removedItem[0].rating = (Math.random() * 10).toFixed(2)
      items.push(removedItem[0])
      // console.log(removedItem[0])
    }
    return items
}