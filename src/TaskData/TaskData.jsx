const textTasks = [
    {
      task: 'Напишите функцию userInformation которая принимает в себя 2 параметра и возвращает строку "Dmitriy Sidorenko, age: 18", 1-й параметр это имя пользователя, 2-й его возраст.',
      expectedText: 'Ожидается: "Dmitriy Sidorenko, age: 18"',
      initialCode: `const name = 'Dmitriy Sidorenko';
const age = 18;

function userInformation(userName, userAge){}`,
      answerCode: `const name = 'Dmitriy Sidorenko';
const age = 18;
      
function userInformation(userName, userAge){
  return userName + ', age: ' + userAge
}
      
userInformation(name, age)`,
      answer: 'Dmitriy Sidorenko, age: 18',
      taskId: '81',
      lang: 'JavaScript',
      taskName: 'Параметры функции',
      level: 8,
      id: 'returnString',
      steps: {
        step1: 'Создайте функцию с именем userInformation, которая принимает два параметра: username и age.',
        step2: 'В теле функции объедините значения параметров username и age в строку, используя шаблонные строки или оператор конкатенации.',
        step3: 'Верните полученную строку.',
      },
      addExperience: 9
    },
    {
      task: 'Напишите функцию squared, которая принимает в себя параметр numberToSquared и возвращает это же число в возведённое в квадрат.',
      expectedText: 'Ожидается: Number',
      initialCode: `const numberToSquared = 5;

function squared(number){}`,
      answerCode: `const numberToSquared = 5;

function squared(number){
return number * number
}
      
squared(numberToSquared)`,
      answer: 25,
      taskId: '82',
      lang: 'JavaScript',
      taskName: 'Возведение числа в квадрат',
      level: 8,
      id: 'returnNumber',
      steps: {
        step1: 'Создадим функцию с именем squared, которая принимает один параметр numberToSquared.',
        step2: 'Внутри функции возводим переданное число в квадрат, используя оператор **.',
        step3: 'Возвращаем полученное значение.',
      },
      addExperience: 10
    },
    {
      task: 'Напишите функцию, которая находит и возвращает сумму элементов массива',
      expectedText: 'Ожидается: Number',
      initialCode: `const sum = [1, 2, 3, 4, 5];`,
      answerCode: `const sum = [1, 2, 3, 4, 5];

function findArraySum(array) {
  return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

findArraySum(sum)`,
      answer: 15,
      taskId: '84',
      lang: 'JavaScript',
      taskName: 'Найти сумму элементов массива',
      level: 8,
      id: 'returnNumber',
      steps: {
        step1: 'Создадим функцию с именем findArraySum, которая принимает один параметр array, представляющий собой массив чисел.',
        step2: 'Внутри функции при помощи метода .reduce() проходим по каждому элементу массива array и возвращаем сумму элементов массива.',
      },
      addExperience: 11
    },
    {
      task: 'Напишите функцию, которая возвращает среднее значение чисел в массиве.',
      expectedText: 'Ожидается: Number',
      initialCode: `const numbers = [2, 4, 6, 8, 10];`,
      answerCode: `const numbers = [2, 4, 6, 8, 10];
function calculateAverage(numbers) {
  let sum = 0;
      
  // Проходим по всем элементам массива и суммируем их
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
      
  // Вычисляем среднее значение, деля сумму на количество элементов массива
  const average = sum / numbers.length;
      
  return average;
}

calculateAverage(numbers)`,
      answer: 6,
      taskId: '71',
      lang: 'JavaScript',
      taskName: 'Получить среднее значение чисел в массиве',
      level: 7,
      id: 'returnNumber',
      steps: {
        step1: 'Создаем функцию с именем findAverage, которая принимает один параметр array. Этот параметр представляет собой массив чисел, для которого мы будем находить среднее значение.',
        step2: 'Сначала мы проверяем, не является ли массив пустым, чтобы избежать деления на ноль. Если массив пустой (array.length === 0), возвращаем ноль, поскольку среднее значение пустого массива по определению равно нулю.',
        step3: 'Мы используем метод reduce() для нахождения суммы всех элементов массива. Внутри колбэк-функции для метода reduce() мы прибавляем текущее значение элемента массива (currentValue) к аккумулятору (accumulator).',
        step4: 'После того, как мы нашли сумму всех элементов массива, делим эту сумму на количество элементов массива (array.length). Это даст нам среднее значение чисел в массиве.',
        step5: 'Возвращаем полученное среднее значение.',
      },
      addExperience: 10
    },
]

const testJS = [
  {
    task: 'Что вернет эта функция при передаче ей массива [1, 2, 3, 4, 5]',
    testId: '811',
    lang: 'JavaScript',
    taskName: 'Поиграем в угадай ?',
    level: 8,
    id: 'returnNumber',
    code: `function mysteryFunction(input) {
  let result = 0;
  for (let i = 0; i < input.length; i++) {
    result += input[i];
  }
  return result;
}`,
  answer: 'Функция возвращает сумму всех элементов массива.',
  moreAnswer: ['Функция возвращает длинну массива.', 'Функция возвращает новый массив.'],
  clue: `function mysteryFunction(input) {
  let result = 0; // Создаем переменную result и инициализируем её значением 0
  for (let i = 0; i < input.length; i++) { // Начинаем цикл, перебирая элементы массива input
    result += input[i]; // Добавляем текущий элемент массива к переменной result
  }
  return result; // Возвращаем сумму всех элементов массива
}`,
  addExperience: 8
  },
  {
    task: 'Что вернет эта функция при передаче ей массива [1, 2, 3, 4, 5]',
    testId: '611',
    lang: 'JavaScript',
    taskName: 'Что я верну ?',
    level: 6,
    id: 'returnNumber',
    code: `function mysteryFunction(input) {
  let result = 0;
  for (let i = 0; i < input.length; i++) {
    result += input[i];
  }
  return result;
}`,
  answer: 'Функция возвращает сумму всех элементов массива.',
  moreAnswer: ['Функция возвращает длинну массива.', 'Функция возвращает новый массив.'],
  clue: `function mysteryFunction(input) {
  let result = 0; // Создаем переменную result и инициализируем её значением 0
  for (let i = 0; i < input.length; i++) { // Начинаем цикл, перебирая элементы массива input
    result += input[i]; // Добавляем текущий элемент массива к переменной result
  }
  return result; // Возвращаем сумму всех элементов массива
}`,
  addExperience: 7
  },
]



const userData = {
  userName: 'user78534392',
  userPassword: '00000000',
  userGender: 'Boy',
  userLevel: 8,
  userExperience: 0,
  idCompletedTasks: [],
  checkInTime: 'Неизвестно!',
  savedCode: {}
}


export {textTasks, testJS, userData}
