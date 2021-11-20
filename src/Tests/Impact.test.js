import calculateImpact from "../Components/BinaryRiskMatrix/Impact";

//Testing all possible scenarios 
test('tests for when all are true, expects to return High', () => {
    const values = [
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        true, 
        true, 
        true, 
        true];
    
    expect(calculateImpact(values)).toBe('High');
});

test('tests for when all are false, expects to return Low', () => {
    const values = [
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        false, 
        false, 
        false, 
        false];
    
    expect(calculateImpact(values)).toBe('Low');
});

test('tests for when q7 is true and the rest are false, expects to return Low', () => {
    const values = [
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        true, 
        false, 
        false, 
        false];
    
    expect(calculateImpact(values)).toBe('Low');
});

test('tests for when q8 is true and the rest are false, expects to return Low', () => {
    const values = [
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        false, 
        true, 
        false, 
        false];
    
    expect(calculateImpact(values)).toBe('Low');
});

test('tests for when q9 is true and the rest are false, expects to return Low', () => {
    const values = [
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        false, 
        false, 
        true, 
        false];
    
    expect(calculateImpact(values)).toBe('Low');
});

test('tests for when q10 is true and the rest are false, expects to return Low', () => {
    const values = [
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        false, 
        false, 
        false, 
        true];
    
    expect(calculateImpact(values)).toBe('Low');
});

test('tests for when q7 & q8 are true and the rest are false, expects to return Medium', () => {
    const values = [
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        true, 
        true, 
        false, 
        false];
    
    expect(calculateImpact(values)).toBe('Medium');
});

test('tests for when q7 & q8 v& q9 are true and q10 is false, expects to return High', () => {
    const values = [
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        true, 
        true, 
        true, 
        false];
    
    expect(calculateImpact(values)).toBe('High');
});

test('tests for when q8 v& q9 are true and q7 & q10 is false, expects to return Medium', () => {
    const values = [
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        false, 
        true, 
        true, 
        false
    ];
    
    expect(calculateImpact(values)).toBe('Medium');
});

test('tests for when q8 & q9 & q10 are true and q7 is false, expects to return High', () => {
    const values = [
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        false, 
        true, 
        true, 
        true
    ];
    
    expect(calculateImpact(values)).toBe('High');
});

test('tests for when q9 & q10 are true and q7 & q8 are false, expects to return Medium', () => {
    const values = [
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        false, 
        false, 
        true, 
        true
    ];
    
    expect(calculateImpact(values)).toBe('Medium');
});

test('tests for when q9 are true and q7 & q8 & q10 are false, expects to return Low', () => {
    const values = [
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        false, 
        false, 
        true, 
        false
    ];
    
    expect(calculateImpact(values)).toBe('Low');
});

test('tests for when q7 & q9 & q10 are true and q8 is false, expects to return High', () => {
    const values = [
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        'not required', 
        true, 
        false, 
        true, 
        true
    ];
    
    expect(calculateImpact(values)).toBe('High');
});