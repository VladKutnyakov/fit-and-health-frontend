export function numberDeclension (number, wordVariants) {
  number = Math.abs(number) % 100

  const modulo = number % 10

  if (number > 10 && number < 20) {
    return wordVariants[2]
  } else if (modulo > 1 && modulo < 5) {
    return wordVariants[1]
  } else if (modulo == 1) {
    return wordVariants[0]
  }

  return wordVariants[2]
}

export function daysDeclension (number) {
  return numberDeclension(number, ['день', 'дня', 'дней'])
}

export function hoursDeclension (number) {
  return numberDeclension(number, ['час', 'часа', 'часов'])
}

export function minutesDeclension (number) {
  return numberDeclension(number, ['минута', 'минуты', 'минут'])
}

export function secondsDeclension (number) {
  return numberDeclension(number, ['секунда', 'секунды', 'секунд'])
}

// Пример
// methods: {
//   day (number) {
//     return `${number} ${daysDeclension(number)}`
//   }
// }
