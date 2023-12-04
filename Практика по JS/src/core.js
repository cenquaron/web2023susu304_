//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return ~~n === n
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let evenNum = 2;
    let result = [];

    while (evenNum <= 20) {
        result.push(evenNum);
        evenNum += 2;
    }

    return result
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let result = 0;

    for (let i = 1; i <= n; i++) {
        result += i;
    }

    return result
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    let num = 0;
    let result = 0;

    while (num !== n) {
        num++;
        result += num;
    }

    return result;
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    return (n.toString(2).replace(/0/g, '') === '1');
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    let prevNum = 0;
    let curNum = 1;

    for (let i = 1; i < n; i++) {
        const tempNum = curNum;
        curNum += prevNum;
        prevNum = tempNum;
    }

    return curNum;
}

/** Напишите функцию, которая принимает начальное значение и функцию операции
 * и возвращает функцию - выполняющую эту операцию.
 * Если функция операции (operatorFn) не задана - по умолчанию всегда
 * возвращается начальное значение (initialValue)
 * @param initialValue
 * @param operatorFn - (storedValue, newValue) => {operation}
 * @example
 * const sumFn =  getOperationFn(10, (a,b) => a + b);
 * console.log(sumFn(5)) - 15
 * console.log(sumFn(3)) - 18
 */
function getOperationFn(initialValue, operatorFn) {
    if (!operatorFn) {
        return () => initialValue;
    }

    let firstValue = initialValue;

    return (newValue) => {

        const result = operatorFn(firstValue, newValue);
        firstValue = operatorFn(firstValue, newValue);
        
        return result;
    }
}

/**
 * Напишите функцию создания генератора арифметической последовательности.
 * При ее вызове, она возвращает новую функцию генератор - generator().
 * Каждый вызов функции генератора возвращает следующий элемент последовательности.
 * Если начальное значение не передано, то оно равно 0.
 * Если шаг не указан, то по дефолту он равен 1.
 * Генераторов можно создать сколько угодно - они все независимые.
 *
 * @param {number} start - число с которого начинается последовательность
 * @param {number} step  - число шаг последовательности
 * @example
 * const generator = sequence(5, 2);
 * console.log(generator()); // 5
 * console.log(generator()); // 7
 * console.log(generator()); // 9
 */
function sequence(start = 0, step = 1) {
    let genNum = start;

    return () => {
        const result = genNum;
        genNum += step;
        return result
    }
}

/**
 * Напишите функцию deepEqual, которая принимает два значения
 * и возвращает true только в том случае, если они имеют одинаковое значение
 * или являются объектами с одинаковыми свойствами,
 * значения которых также равны при сравнении с рекурсивным вызовом deepEqual.
 * Учитывать специфичные объекты(такие как Date, RegExp итп) не обязательно
 *
 * @param {object} firstObject - первый объект
 * @param {object} secondObject - второй объект
 * @returns {boolean} - true если объекты равны(по содержанию) иначе false
 * @example
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 33], text: 'text'}) // true
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 3], text: 'text2'}) // false
 */
function deepEqual(firstObject, secondObject) {
    if (firstObject === secondObject || (String(firstObject) === 'NaN' && String(secondObject) === 'NaN')) {
        return true
    }

    if (typeof(firstObject) !== 'object' || firstObject === null || typeof(secondObject) !== 'object' || secondObject === null) {
        return false;
    }
    
    if (Object.keys(firstObject).length !== Object.keys(secondObject).length) {
        return false;
    }

    for (let key in firstObject) {
        if (!secondObject.hasOwnProperty(key)) {
            return false;
        }

        if (typeof(firstObject[key] === 'object')) {
            if (!deepEqual(firstObject[key], secondObject[key])) {
                return false;
            }
        }
    }

    return true
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};
