![Red Logo Less Border Smaller](https://user-images.githubusercontent.com/3296518/135195502-0aeba42a-15bc-42f1-8229-91c1ddabb332.png)

# Character Token (ctok)

## Details
As NFT projects continue to evolve, the space is hindered by the need to host digital assets apart from the smart contracts that govern their transfer. 

Character Token (CTOK) is the first sovereign, layer 1 blockchain that supports NFTs that are represented as protocol buffers, which can be imported into any programming language or digital platform.

Any digital asset that can be represented as binary data may be stored or transferred. The movement and purchase of assets may be protected from sale or transfer on the platform, adding a layer of protection from bad actors in addition to providing [Byzantine Fault Tolerance](https://blog.cosmos.network/tendermint-explained-bringing-bft-based-pos-to-the-public-blockchain-domain-f22e274a0fdb) to chain transactions.

## Testnet

Testnet is up, node id: 3335a2e067732d983b6499a3ded8d54c644692ce

Genesis files are available at [ctok-testnet](https://github.com/charactertoken/ctok-testnet)

Please check out the [Wiki](https://github.com/charactertoken/ctok/wiki) for the initial documentation.

**ctok** is a blockchain built using Cosmos SDK and Tendermint and created with [Starport](https://github.com/tendermint/starport).

## Get started

Visit http://tutorials.cosmos.network/publish-app-do/#connect-your-local-running-chain-to-the-published-chain to learn how to connect to the testnet.

### Configure

Your blockchain in development can be configured with `config.yml`. To learn more, see the [Starport docs](https://docs.starport.network).

### Launch

To launch your blockchain live on multiple nodes, use `starport network` commands. Learn more about [Starport Network](https://github.com/tendermint/spn).

### Web Frontend

Starport has scaffolded a Vue.js-based web app in the `vue` directory. Run the following commands to install dependencies and start the app:

```
cd vue
npm install
npm run serve
```

The frontend app is built using the `@starport/vue` and `@starport/vuex` packages. For details, see the [monorepo for Starport front-end development](https://github.com/tendermint/vue).

## Release
To release a new version of your blockchain, create and push a new tag with `v` prefix. A new draft release with the configured targets will be created.

```
git tag v0.1
git push origin v0.1
```

After a draft release is created, make your final changes from the release page and publish it.

### Install
To install the latest version of your blockchain node's binary, execute the following command on your machine:

```
curl https://get.starport.network/charactertoken/ctok@latest! | sudo bash
```
`charactertoken/ctok` should match the `username` and `repo_name` of the Github repository to which the source code was pushed. Learn more about [the install process](https://github.com/allinbits/starport-installer).

## Learn more

- [Starport](https://github.com/tendermint/starport)
- [Starport Docs](https://docs.starport.network)
- [Cosmos SDK documentation](https://docs.cosmos.network)
- [Cosmos SDK Tutorials](https://tutorials.cosmos.network)
- [Discord](https://discord.gg/cosmosnetwork)
