// Задача №1. Функция генерирует объект. Объектом для примера является ноутбук. В качестве 1 параметра функция принимает список из технических характеристик ноутбука, в качестве 2 параметра - список из показателей этих характеристик. На выходе появляется объект, где пара ключ-значение является описанием характеристик ноутбука.

const laptopKeys = ['screeen', 'cpu', 'ram', 'rom', 'system', 'color', 'weight'];
const laptopValues = ['1920x1200', 'intel core i7', 512, 16, 'Windows'];

const laptop = {};

function createLaptop(parameters, indicators) {
  parameters.forEach(key => laptop[key] = '');
  const arrOfKeys = Object.keys(laptop);
  for (let i = 0; i < arrOfKeys.length; i++) {
    let currentKey = arrOfKeys[i];
    laptop[currentKey] = indicators[i];
  }
  const arrOfValues = Object.values(laptop);
  // Проверка на случай, если у ключа отсутствует значение, тогда ключу присваивается значение none
  if (arrOfValues.includes(undefined)) {
    for (let key of arrOfKeys) {
      if (laptop[key] === undefined) {
        laptop[key] = 'none';
      }
    }
  }
}

createLaptop(laptopKeys, laptopValues);
console.log(laptop)