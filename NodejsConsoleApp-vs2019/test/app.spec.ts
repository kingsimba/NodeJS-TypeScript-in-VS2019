import assert = require('assert');
import { printHello, Calculator } from '../app';

// https://docs.microsoft.com/en-us/visualstudio/javascript/unit-testing-javascript-with-visual-studio?view=vs-2019

const calculator = new Calculator();

describe('Calculator', () => {
    it('Test 1', () => {
        assert.equal(calculator.sum(2, 3), 5, "This shouldn't fail");
    })

    it('Test 2', () => {
        assert.equal(calculator.sum(2, 3), 5, "This shouldn't fail");
        assert.equal(calculator.sum(2, 3), 6, "This should fail");
    })
})