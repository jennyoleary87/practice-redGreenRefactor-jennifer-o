/*
04/29/15
Test-Driven Development - 2 Pair Practice: Red, Green, Refactor

You are tasked with implementing a countVowels function that takes a string and
returns the number of vowels (a, e, i, o, u) in the string.

● Red Phase:
○ Write a failing test case for the countVowels function. Describe what
behavior you want to test and why the test is expected to fail initially.
○ Document what you believe the expected output should be for various
inputs (e.g., "hello", "world", "").
○ Write down why starting with a failing test case clarifies the function's
requirements.

● Green Phase:
○ Brainstorm the simplest code that could make the test pass.
Document your implementation ideas, focusing only on meeting the
test's expectations.
○ Reflect on why it's important to prioritize functionality over
optimization in this step.

● Refactor Phase:
○ Once the test passes, identify ways to improve the code's readability,
efficiency, or maintainability. Propose specific refactoring steps and
explain how they improve the implementation.
○ Reflect on why this step is critical for long-term project success.
*/

function countVowels(str) {
    let count = 0; // start from scratch
    const char = str.toLowerCase().split(''); // turn all characters lowercase and split to better compare
    char.forEach(char => {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') { // if character is a OR e OR i OR o OR u
            count++; // increment count of vowels
        }
    });
    return count;
}

module.exports = countVowels;
