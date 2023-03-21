import * as core from '@actions/core'

async function run() {
    try {
        const { GITHUB_WORKSPACE, GITHUB_SHA, GITHUB_RUN_NUMBER } = process.env
        const repository = GITHUB_WORKSPACE.split('/').pop()
        const slicedSha = GITHUB_SHA.slice(0, 7)
        const tagName = `${repository}-${GITHUB_RUN_NUMBER}-${slicedSha}`
        core.setOutput('tag', tagName)
    } catch (error) {
        core.setFailed(error.message)
    }
}

run()
