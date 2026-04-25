const github = "https://openblockcc.github.io";
const gitee = "https://openblockcc.gitee.io";

const statusCode = 302;

addEventListener("fetch", async event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    const url = new URL(request.url);
    const { pathname, search } = url;

    if (request.cf.country === 'CN') {
        base = gitee;
    } else {
        base = github;
    }

    const destinationURL = base + pathname + search;

    return Response.redirect(destinationURL, statusCode);
}