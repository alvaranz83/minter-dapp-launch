require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "PadelManiaks";
const description = "PadelManiaks is the first NFT Club dedicated to Padel, the fastest growing sport in the world. You can get exclusive access to Padel Perks, Services and Rewards by holding one or more of our unique 5,000 Padelmaniak NFTs. NFT holder Utility is the #1 Goal of the PadelManiaks collection.";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

const layerConfigurations = [

  {
    growEditionSizeTo: 60, //With Hair and Jackets
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Benches" },
      { name: "Shorts" },
      { name: "Body" },
      { name: "LeftWristbands" },
      { name: "RightWristbands" },
      { name: "LeftWristbandLogos" },
      { name: "Tshirts" },
      { name: "Neckchains" },
      { name: "Jackets" },
      { name: "Rackets" },
      { name: "Hands" },
      { name: "FacialExpressions" },
      { name: "Hair" },
      { name: "Earrings" },
      { name: "Beards" },
      { name: "Moustaches" },
      { name: "NosePiercing" },
      { name: "Glasses" },
    ],
  },
  {
    growEditionSizeTo: 120, //With Hair and Jackets + ChinPiercing(NoBeard)
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Benches" },
      { name: "Shorts" },
      { name: "Body" },
      { name: "LeftWristbands" },
      { name: "RightWristbands" },
      { name: "LeftWristbandLogos" },
      { name: "Tshirts" },
      { name: "Neckchains" },
      { name: "Jackets" },
      { name: "Rackets" },
      { name: "Hands" },
      { name: "FacialExpressions" },
      { name: "ChinPiercing" },
      { name: "Hair" },
      { name: "Earrings" },
      { name: "Moustaches" },
      { name: "NosePiercing" },
      { name: "Glasses" },
    ],
  },
  {
    growEditionSizeTo: 180, // With Hair and Hoodies
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Benches" },
      { name: "Shorts" },
      { name: "Body" },
      { name: "LeftWristbands" },
      { name: "RightWristbands" },
      { name: "LeftWristbandLogos" },
      { name: "Tshirts" },
      { name: "Neckchains" },
      { name: "Rackets" },
      { name: "Hands" },
      { name: "Hoodies" },
      { name: "FacialExpressions" },
      { name: "Hair" },
      { name: "Earrings" },
      { name: "Beards" },
      { name: "Moustaches" },
      { name: "NosePiercing" },
      { name: "Glasses" },
    ],
  },
  {
    growEditionSizeTo: 240, // With Hair and Hoodies + ChinPiercing(NoBeard)
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Benches" },
      { name: "Shorts" },
      { name: "Body" },
      { name: "LeftWristbands" },
      { name: "RightWristbands" },
      { name: "LeftWristbandLogos" },
      { name: "Tshirts" },
      { name: "Neckchains" },
      { name: "Rackets" },
      { name: "Hands" },
      { name: "Hoodies" },
      { name: "FacialExpressions" },
      { name: "ChinPiercing" },
      { name: "Hair" },
      { name: "Earrings" },
      { name: "Moustaches" },
      { name: "NosePiercing" },
      { name: "Glasses" },
    ],
  },
  {
    growEditionSizeTo: 300, // With Cap and Jackets
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Benches" },
      { name: "Shorts" },
      { name: "Body" },
      { name: "LeftWristbands" },
      { name: "RightWristbands" },
      { name: "LeftWristbandLogos" },
      { name: "Tshirts" },
      { name: "Neckchains" },
      { name: "Jackets" },
      { name: "Rackets" },
      { name: "Hands" },
      { name: "FacialExpressions" },
      { name: "Earrings" },
      { name: "Beards" },
      { name: "Moustaches" },
      { name: "NosePiercing" },
      { name: "Glasses" },
      { name: "Caps" },
    ],
  },
  {
    growEditionSizeTo: 360, // With Cap and Jackets + ChinPiercing (No Beard)
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Benches" },
      { name: "Shorts" },
      { name: "Body" },
      { name: "LeftWristbands" },
      { name: "RightWristbands" },
      { name: "LeftWristbandLogos" },
      { name: "Tshirts" },
      { name: "Neckchains" },
      { name: "Jackets" },
      { name: "Rackets" },
      { name: "Hands" },
      { name: "FacialExpressions" },
      { name: "ChinPiercing" },
      { name: "Earrings" },
      { name: "Moustaches" },
      { name: "NosePiercing" },
      { name: "Glasses" },
      { name: "Caps" },
    ],
  },
  {
    growEditionSizeTo: 420, // With Cap and Hoodies
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Benches" },
      { name: "Shorts" },
      { name: "Body" },
      { name: "LeftWristbands" },
      { name: "RightWristbands" },
      { name: "LeftWristbandLogos" },
      { name: "Tshirts" },
      { name: "Neckchains" },
      { name: "Rackets" },
      { name: "Hands" },
      { name: "Hoodies" },
      { name: "FacialExpressions" },
      { name: "Earrings" },
      { name: "Beards" },
      { name: "Moustaches" },
      { name: "NosePiercing" },
      { name: "Glasses" },
      { name: "Caps" },
    ],
  },
  {
    growEditionSizeTo: 480, // With Cap and Hoodies + ChinPiercing (No Beard)
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Benches" },
      { name: "Shorts" },
      { name: "Body" },
      { name: "LeftWristbands" },
      { name: "RightWristbands" },
      { name: "LeftWristbandLogos" },
      { name: "Tshirts" },
      { name: "Neckchains" },
      { name: "Rackets" },
      { name: "Hands" },
      { name: "Hoodies" },
      { name: "FacialExpressions" },
      { name: "ChinPiercing" },
      { name: "Earrings" },
      { name: "Beards" },
      { name: "Moustaches" },
      { name: "NosePiercing" },
      { name: "Glasses" },
      { name: "Caps" },
    ],
  },
  {
    growEditionSizeTo: 540, // With Hair, Hoodies and No T-shirts
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Benches" },
      { name: "Shorts" },
      { name: "Body" },
      { name: "LeftWristbands" },
      { name: "RightWristbands" },
      { name: "LeftWristbandLogos" },
      { name: "Neckchains" },
      { name: "Rackets" },
      { name: "Hands" },
      { name: "Hoodies" },
      { name: "FacialExpressions" },
      { name: "Hair" },
      { name: "Earrings" },
      { name: "Beards" },
      { name: "Moustaches" },
      { name: "NosePiercing" },
      { name: "Glasses" },
    ],
  },
  {
    growEditionSizeTo: 600, // With Hair, Hoodies and No T-shirts + ChinPiercing(NoBeard)
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Benches" },
      { name: "Shorts" },
      { name: "Body" },
      { name: "LeftWristbands" },
      { name: "RightWristbands" },
      { name: "LeftWristbandLogos" },
      { name: "Neckchains" },
      { name: "Rackets" },
      { name: "Hands" },
      { name: "Hoodies" },
      { name: "FacialExpressions" },
      { name: "ChinPiercing" },
      { name: "Hair" },
      { name: "Earrings" },
      { name: "Moustaches" },
      { name: "NosePiercing" },
      { name: "Glasses" },
    ],
  },
  {
    growEditionSizeTo: 660, // With Cap, Hoodies and No-Tshirts
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Benches" },
      { name: "Shorts" },
      { name: "Body" },
      { name: "LeftWristbands" },
      { name: "RightWristbands" },
      { name: "LeftWristbandLogos" },
      { name: "Neckchains" },
      { name: "Rackets" },
      { name: "Hands" },
      { name: "Hoodies" },
      { name: "FacialExpressions" },
      { name: "Earrings" },
      { name: "Beards" },
      { name: "Moustaches" },
      { name: "NosePiercing" },
      { name: "Glasses" },
      { name: "Caps" },
    ],
  },
  {
    growEditionSizeTo: 720, // With Cap, Hoodies and No-Tshirts + ChinPiercing(NoBeard)
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Benches" },
      { name: "Shorts" },
      { name: "Body" },
      { name: "LeftWristbands" },
      { name: "RightWristbands" },
      { name: "LeftWristbandLogos" },
      { name: "Neckchains" },
      { name: "Rackets" },
      { name: "Hands" },
      { name: "Hoodies" },
      { name: "FacialExpressions" },
      { name: "ChinPiercing" },
      { name: "Earrings" },
      { name: "Moustaches" },
      { name: "NosePiercing" },
      { name: "Glasses" },
      { name: "Caps" },
    ],
  },
  {
    growEditionSizeTo: 780, //With Hair and No-Tshirt
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Benches" },
      { name: "Shorts" },
      { name: "Body" },
      { name: "LeftWristbands" },
      { name: "RightWristbands" },
      { name: "LeftWristbandLogos" },
      { name: "Neckchains" },
      { name: "Rackets" },
      { name: "Hands" },
      { name: "FacialExpressions" },
      { name: "Hair" },
      { name: "Earrings" },
      { name: "Beards" },
      { name: "Moustaches" },
      { name: "NosePiercing" },
      { name: "Glasses" },
    ],
  },
  {
    growEditionSizeTo: 840, //With Hair and No-Tshirt + ChinPiercing (NoBeard)
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Benches" },
      { name: "Shorts" },
      { name: "Body" },
      { name: "LeftWristbands" },
      { name: "RightWristbands" },
      { name: "LeftWristbandLogos" },
      { name: "Neckchains" },
      { name: "Rackets" },
      { name: "Hands" },
      { name: "FacialExpressions" },
      { name: "ChinPiercing" },
      { name: "Hair" },
      { name: "Earrings" },
      { name: "Moustaches" },
      { name: "NosePiercing" },
      { name: "Glasses" },
    ],
  },
  {
    growEditionSizeTo: 930, // With Cap and No-Tshirt
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Benches" },
      { name: "Shorts" },
      { name: "Body" },
      { name: "LeftWristbands" },
      { name: "RightWristbands" },
      { name: "LeftWristbandLogos" },
      { name: "Neckchains" },
      { name: "Rackets" },
      { name: "Hands" },
      { name: "FacialExpressions" },
      { name: "Earrings" },
      { name: "Beards" },
      { name: "Moustaches" },
      { name: "NosePiercing" },
      { name: "Glasses" },
      { name: "Caps" },
    ],
  },
  {
    growEditionSizeTo: 1000, // With Cap and No-Tshirt + ChinPiercing (NoBeard)
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Benches" },
      { name: "Shorts" },
      { name: "Body" },
      { name: "LeftWristbands" },
      { name: "RightWristbands" },
      { name: "LeftWristbandLogos" },
      { name: "Neckchains" },
      { name: "Rackets" },
      { name: "Hands" },
      { name: "FacialExpressions" },
      { name: "ChinPiercing" },
      { name: "Earrings" },
      { name: "Moustaches" },
      { name: "NosePiercing" },
      { name: "Glasses" },
      { name: "Caps" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 2000,
  height: 3000,
  smoothing: false,
};

const extraMetadata = {
  external_url: "https://Padelmaniaks.com", // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 2; // Your API key rate limit
const CHAIN = 'polygon'; // only rinkeby, polygon, or ethereum

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'PADELMANIAKS';
const CONTRACT_SYMBOL = 'PMS';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0xd24B4Bd00D6909707816AFA28846DB7f73d3f5b8';
const TREASURY_ADDRESS = '0xd24B4Bd00D6909707816AFA28846DB7f73d3f5b8';
const MAX_SUPPLY = 1000; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 0.01; //********** I NEED TO UNDERSTAND WHICH CHAIN ARE WE ADDING THEM TO Minting price per NFT. Rinkeby = ETH, Ethereum = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 1000; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-03-20T11:30:48+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = null; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 1000; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0xd8B808A887326F45B2D0cd999709Aa6264CeF919"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = []; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = "YOUR CONTRACT ADDRESS"; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = true; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "REPLACE THIS"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/QmUf9tDbkqnfHkQaMdFWSGAeXwVXWA61pFED7ypx4hcsfh"; // Replace with your generic image that will display for all NFTs pre-reveal.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK") {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};
