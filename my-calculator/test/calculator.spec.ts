import { expect } from 'chai';
import { Calculator } from '../calculator';

const calculator = new Calculator();

describe('Calculator', () => {
    it('Test 1', () => {
        expect(calculator.sum(2, 3), "This shouldn't fail").equals(5);
    })

    it('Test 2', () => {
        expect(calculator.sum(2, 3), "This shouldn't fail").equals(5);
        expect(calculator.sum(2, 3), "This should fail").equals(6);
    })
})