'use strict';

QUnit.module('Тестируем функцию inverse', function () {
	QUnit.test('Функция работает с пустым массивом', function (assert) {
		assert.deepEqual(inverse([]), []);
	});

	QUnit.test('Функция работает с массивом длины один', function (assert) {
		assert.deepEqual(inverse([ 1 ]), [ 1 ]);
		assert.deepEqual(inverse([ 'a' ]), [ 'a' ]);
		assert.deepEqual(inverse([ null ]), [ null ]);
		assert.deepEqual(inverse([ false ]), [ false ]);
	});

	QUnit.test('Функция работает, если в неё передан только массив', function (assert) {
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ]), [ 5, 4, 3, 2, 1 ]);
		assert.deepEqual(inverse([ 'a', 'b', 'c', 'd', 'e' ]), [ 'e', 'd', 'c', 'b', 'a' ]);
		assert.deepEqual(inverse([ null, false, 0, Infinity, '' ]), [ '', Infinity, 0, false, null ]);
	});

	QUnit.test('Функция не переставляет первые элементы массива', function (assert) {
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 0), [ 5, 4, 3, 2, 1 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 1), [ 1, 5, 4, 3, 2 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 2), [ 1, 2, 5, 4, 3 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 5), [ 1, 2, 3, 4, 5 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 15), [ 1, 2, 3, 4, 5 ]);
	});

	QUnit.test('Функция не переставляет последние элементы массива', function (assert) {
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 0), [ 5, 4, 3, 2, 1 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], -1), [ 4, 3, 2, 1, 5 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], -2), [ 3, 2, 1, 4, 5 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], -5), [ 1, 2, 3, 4, 5 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], -15), [ 1, 2, 3, 4, 5 ]);
	});

	QUnit.test('Проверка функции при передаче параметров неправильного типа без передачи number', function (assert) {
		assert.deepEqual(inverse(null), 'Invalid argument(s)');
		assert.deepEqual(inverse("asdfaasdf"), 'Invalid argument(s)');
		assert.deepEqual(inverse(5), 'Invalid argument(s)');
		assert.deepEqual(inverse(true), 'Invalid argument(s)');
		assert.deepEqual(inverse({}), 'Invalid argument(s)');
	});

	QUnit.test('Проверка функции при передаче параметров неправильного типа c передачей number', function (assert) {
		assert.deepEqual(inverse(null, null), 'Invalid argument(s)');
		assert.deepEqual(inverse([1, 2, 3, 4, 5], null), 'Invalid argument(s)');
		assert.deepEqual(inverse("asdfaasdf", 5), 'Invalid argument(s)');
		assert.deepEqual(inverse("asdfaasdf", -5), 'Invalid argument(s)');
		assert.deepEqual(inverse([1,2,3,4,5],"5"), 'Invalid argument(s)');
		assert.deepEqual(inverse([1,2,3,4,5],{}), 'Invalid argument(s)');
	});

	QUnit.test('Валидные тесты', function (assert) {
		assert.deepEqual(inverse([1], 5), [1]);
		assert.deepEqual(inverse([1], -5), [1]);
		assert.deepEqual(inverse([1, 2, 3, 2, 1], 3), [1, 2, 3, 1, 2]);
		assert.deepEqual(inverse([1, 2, 3, 2, 1], -2), [3, 2, 1, 2, 1]);
		assert.deepEqual(inverse([-3, -2, -1, 0], 5), [-3, -2, -1, 0]);
		assert.deepEqual(inverse([-3, -2, -1, 0], -5), [-3, -2, -1, 0]);
	});
});
