const core = require('@actions/core');
// const core = require('@actions/core');

try {
    const nameToParse = core.getInput('gh-name')
    const parsedName = nameToParse.replace(/-/, "").toUpperCase()
    core.exportVariable('P_NAME', parsedName)
} catch (error) {
    core.setFailed(error.message)
}