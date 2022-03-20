import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import { ethereumTestnet, ethereumMainnet } from '../lib/Networks';
import { openSea } from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: ethereumTestnet,
  mainnet: ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'YourNftToken',
  tokenName: 'My NFT Token Test',
  tokenSymbol: 'MNT',
  hiddenMetadataUri: 'ipfs://QmZX5UQcDFcwRWTpRQa8TYMKSeKFaC2VftqqGqpo8Qw7Lq/hidden.json',
  maxSupply: 10,
  whitelistSale: {
    price: 0.005,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.02,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.04,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0x35cFaBe643D2D8dd60208514e868D07dD28aEcE3",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
