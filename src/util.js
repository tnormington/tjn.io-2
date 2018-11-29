export const randomItemFromArray = arr => {
  return arr[Math.floor(Math.random() * arr.length)]
}

export const isEven = n => {
  return n % 2 == 0
}

export const getRandomArbitrary = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}
