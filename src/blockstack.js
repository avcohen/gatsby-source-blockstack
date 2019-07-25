const fetch = require('node-fetch');
const blockstack = require('blockstack');

exports.getFile = async ({
    blockstackPath,
    blockstackUsername,
    blockstackAppOrigin
}) => {
    const blogstackURI = await blockstack.getUserAppFileUrl(
        blockstackPath,
        blockstackUsername,
        blockstackAppOrigin
    );
    return fetch(blogstackURI).then(_ => _.json());
};
