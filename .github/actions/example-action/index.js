//const core = require('@actions/core');

try {
//    const input = core.getInput('my-input');
//    console.log(`Hello ${input}!`);
    console.log(`Hello Input!`);

    //const output = `Processed input: ${input}`;
    const output = `Processed input: INPUT`;
    core.setOutput('my-output', output);
} catch (error) {
    core.setFailed(error.message);
}