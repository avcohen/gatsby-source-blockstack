<div align="center">
    <h1>gatsby-source-blockstack</h1>
</div>

Source plugin for sourcing data from a Blockstack (Gaia) Storage Bucket.

# Table of Contents

-   [Install](#install)
-   [Usage](#usage)
    -   [Retrieving Data for Build](#retrieving-data-for-build)
    -   [GraphQL Query](#graphql-query)

## Install

`npm install --save gatsby-source-blockstack`

## Usage

### Retrieving Data for Build

In order to fetch and build data from a Blockstack Bucket, you'll need to specify a `blockstackUsername`, and `blockstackAppOrigin` as well as the `blockstackSources` (one, or many) you'd like to include:

```javascript
// gatsby-config.js
plugins: [
    {
        resolve: `gatsby-source-blockstack`,
        options: {
            blockstackUsername: `<YOUR_BLOCKSTACK_USERNAME>`,
            blockstackAppOrigin: `<YOUR_BLOCKSTACK_APP_URI>`,
            blockstackSources: [
                {
                    blockstackPath: `<PATH_TO_JSON_FILE>`,
                    blockstackType: `<TYPE_DEF_FOR_GQL>`
                },
                ...
            ]
        }
    }
];
```

### GraphQL Query

You'll now be able to access data from each of the `blockstackSources` via the name defined by its respective `blockstackType` as defined in `gatsby-config.js`. Created automatically on build, you can read more about _nodes_ [here](https://www.gatsbyjs.org/docs/node-creation/).
