import calculateRisk from "../Components/BinaryRiskMatrix/Risk";

//Testing where both inputs are equal 
test('takes in a likelihood of High, impact of High and returns High for its risk', () => {
    const likelihood = 'High'
    const impact = 'High'
    expect(calculateRisk(likelihood, impact)).toBe('High');
});

test('takes in a likelihood of Medium, impact of Medium and returns Medium for its risk', () => {
    const likelihood = 'Medium'
    const impact = 'Medium'
    expect(calculateRisk(likelihood, impact)).toBe('Medium');
});

test('takes in a likelihood of Low, impact of Low and returns Low for its risk', () => {
    const likelihood = 'Low'
    const impact = 'Low'
    expect(calculateRisk(likelihood, impact)).toBe('Low');
});

//Testing all other possibilities 
test('takes in a likelihood of Low, impact of Medium and returns Medium for its risk', () => {
    const likelihood = 'Low'
    const impact = 'Medium'
    expect(calculateRisk(likelihood, impact)).toBe('Medium');
});

test('takes in a likelihood of Low, impact of High and returns Medium for its risk', () => {
    const likelihood = 'Low'
    const impact = 'High'
    expect(calculateRisk(likelihood, impact)).toBe('Medium');
});

test('takes in a likelihood of Medium, impact of Low and returns Low for its risk', () => {
    const likelihood = 'Medium'
    const impact = 'Low'
    expect(calculateRisk(likelihood, impact)).toBe('Low');
});

test('takes in a likelihood of Medium, impact of High and returns High for its risk', () => {
    const likelihood = 'Medium'
    const impact = 'High'
    expect(calculateRisk(likelihood, impact)).toBe('High');
});

test('takes in a likelihood of High, impact of Low and returns Medium for its risk', () => {
    const likelihood = 'High'
    const impact = 'Low'
    expect(calculateRisk(likelihood, impact)).toBe('Medium');
});

test('takes in a likelihood of High, impact of Medium and returns High for its risk', () => {
    const likelihood = 'High'
    const impact = 'Medium'
    expect(calculateRisk(likelihood, impact)).toBe('High');
});