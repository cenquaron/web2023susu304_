const assert = require('assert');
const core = require('./es6');

describe('es6', () => {
    describe('#fioToName', () => {
        it('ФИО в Имя Фамилия корректно', () => {
            assert.strictEqual(core.fioToName('Иванов Иван Иванович'), 'Иван Иванов');
        });

        it('ФИ в Имя Фамилия', () => {
            assert.strictEqual(core.fioToName('Петров Петр'), 'Петр Петров');
        });

        it('ФИ из кучи пробелов', () => {
            assert.strictEqual(core.fioToName('   Петров Петр    '), 'Петр Петров');
        });
    });

    describe('#filterUnique', () => {
        it('массив с уникальными равен сам себе', () => {
            assert.deepStrictEqual(core.filterUnique([1, 2, 3]), [1, 2, 3]);
        });

        it('массив с неуникальными отфильтрован', () => {
            assert.deepStrictEqual(core.filterUnique([1, 1, 1, 1]), [1]);
        });

        it('пустой массив', () => {
            assert.deepStrictEqual(core.filterUnique([]), []);
        });
    });

    describe('#calculateSalaryDifference', () => {
        it('считает разницу корректно', () => {
            assert.strictEqual(core.calculateSalaryDifference([1, 2, 3]), 3);
        });

        it('на пустой массив возвращается falsy значение', () => {
            assert.strictEqual(!!core.calculateSalaryDifference([]), false);
        });
    });

    describe('#Dictionary', () => {
        it('экземпляр класса создается', () => {
            const dic = new core.Dictionary();
            assert.strictEqual(!!dic, true);
        });
    
        it('добавление и получение слова', () => {
            const dic = new core.Dictionary();
            dic.addWord("test", "this is a test");
            const definition = dic.getDefinition("test");
            assert.strictEqual(definition, "this is a test");
        });
    
        it('удаление слова', () => {
            const dic = new core.Dictionary();
            dic.addWord("test", "this is a test");
            dic.removeWord("test");
            const definition = dic.getDefinition("test");
            assert.strictEqual(definition, undefined);
        });
    
        it('получение определения несуществующего слова', () => {
            const dic = new core.Dictionary();
            const definition = dic.getDefinition("nonexistent");
            assert.strictEqual(definition, undefined);
        });
    
        it('добавление слова с null или undefined', () => {
            const dic = new core.Dictionary();
            dic.addWord("test", "this is a test");
    
            // Попытка добавить слово с null
            dic.addWord(null, "definition");
            let definition = dic.getDefinition(null);
            assert.strictEqual(definition, undefined);
    
            // Попытка добавить слово с undefined
            dic.addWord(undefined, "definition");
            definition = dic.getDefinition(undefined);
            assert.strictEqual(definition, undefined);
        });
    
        it('удаление слова с null или undefined', () => {
            const dic = new core.Dictionary();
            dic.addWord("test", "this is a test");
    
            // Попытка удалить слово с null
            dic.removeWord(null);
            let definition = dic.getDefinition("test");
            assert.strictEqual(definition, "this is a test");
    
            // Попытка удалить слово с undefined
            dic.removeWord(undefined);
            definition = dic.getDefinition("test");
            assert.strictEqual(definition, "this is a test");
        });
    });
});