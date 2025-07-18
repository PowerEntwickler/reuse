import * as core from '@actions/core'

try {
    const input = core.getInput('my-input');
    console.log(`Hello ${input}!`);

    const output = `Processed input: ${input}`;
    core.setOutput('my-output', output);
} catch (error) {
    core.setFailed(error.message);
}