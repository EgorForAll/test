// Задача 2. Найти сумму четных чисел последовательности Фибоначии, значения которой не превышают 4 млн.

// Функция по возвращению последовательности Фибоначчи. 
function fibonacci(num) {
  const result = [0, 1];

  for (let i = 2; i <= num; i++) {
    const prevNum1 = result[i - 1];
    const prevNum2 = result[i - 2];
    result.push(prevNum1 + prevNum2)
  }
  return result;
}

// Функция для сложения всех элементов массива
function add(accumulator, a) {
  return accumulator + a;
}

// Функция по сложению всех четных элементов массива Фибоначчи, значения которых не больше 4 млн.
function sumOfeven(arr) {
  const arrOfEven = [];
  for (let num of arr) {
    if (num < 4000000) {
      if (num % 2 === 0) {
        arrOfEven.push(num);
      }
    }
  }
  return arrOfEven.reduce(add, 0);
}

// Попробуем найти сумму четных чисел из последовательности Фибоначчи длиной (к примеру) 40 чисел

const sum = sumOfeven(fibonacci(40));

// Ответ 4613732
