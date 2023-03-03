const getRandomElement = arr => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr[Math.floor(Math.random() * arr.length)];
}

const getAuthorQuotes = (author, arr) => {
  returnArr = [];
  console.log(`Input author is ${author}.`);
  for (let index = 0; index < arr.length; index++) {
    if(arr[index].person === author) {
      console.log(`Array's Author = ${arr[index].person}. Input author is ${author}.`);
      returnArr.push(arr[index]);
    }
  }
  return returnArr;
}

module.exports = {
  getRandomElement, getAuthorQuotes
};
