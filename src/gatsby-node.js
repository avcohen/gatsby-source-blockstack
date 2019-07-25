const { getFile } = require('./blockstack');

exports.sourceNodes = async (
    { actions, createNodeId, createContentDigest },
    configOptions
) => {
    const { createNode } = actions;
    const sources = configOptions.blockstackSources;
    let nodePromises = [];

    const processDatum = (data, dataType) => {
        const nodeId = createNodeId(`blogstack-data-${data.id}`);
        const nodeContent = JSON.stringify(data.content);
        const nodeData = Object.assign({}, data, {
            id: nodeId,
            parent: null,
            children: [],
            internal: {
                type: dataType,
                content: nodeContent,
                contentDigest: createContentDigest(data)
            }
        });
        return nodeData;
    };

    for (const source of sources) {
        const config = {
            blockstackPath: source.blockstackPath,
            blockstackUsername: configOptions.blockstackUsername,
            blockstackAppOrigin: configOptions.blockstackAppOrigin
        };

        const pendingNodePromise = getFile(config).then(fileData => {
            fileData.forEach(d =>
                createNode(processDatum(d, source.blockstackType))
            );
        });
        nodePromises.push(pendingNodePromise);
    }
    return Promise.all(nodePromises);
};
