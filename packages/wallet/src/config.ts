import { AppConfig, getAppConfig, NetworkConfigs } from "@cosmicdapp/logic";

const local: AppConfig = {
  chainId: "testing",
  chainName: "Testing",
  addressPrefix: "wasm",
  rpcUrl: "http://localhost:26659",
  httpUrl: "http://localhost:1317",
  faucetUrl: "http://localhost:8000",
  feeToken: "ucosm",
  stakingToken: "uatom",
  coinMap: {
    ucosm: { denom: "COSM", fractionalDigits: 6 },
    uatom: { denom: "ATOM", fractionalDigits: 6 },
  },
  gasPrice: 0.025,
};

const uninet: AppConfig = {
  chainId: "uni",
  chainName: "Uni",
  addressPrefix: "juno",
  rpcUrl: "https://rpc.uni.juno.deuslabs.fi",
  httpUrl: "https://lcd.uni.juno.deuslabs.fi",
  faucetUrl: "https://faucet.uni.juno.deuslabs.fi",
  feeToken: "ujunox",
  stakingToken: "ujunox",
  coinMap: {
    ujunox: { denom: "JUNOX", fractionalDigits: 6 },
  },
  gasPrice: 0.025,
};

const malaganet: AppConfig = {
  chainId: "malaga-420",
  chainName: "Malaga",
  addressPrefix: "wasm",
  rpcUrl: "https://rpc.malaga-420.cosmwasm.com",
  httpUrl: "https://api.malaga-420.cosmwasm.com",
  faucetUrl: "https://faucet.malaga-420.cosmwasm.com",
  feeToken: "ucosm",
  stakingToken: "uatom",
  coinMap: {
    ucosm: { denom: "COSM", fractionalDigits: 6 },
    uatom: { denom: "ATOM", fractionalDigits: 6 },
  },
  gasPrice: 0.025,
};
const osmo_test: AppConfig = {
  chainId: "osmo-test-4",
  chainName: "Osmosis Testnet",
  addressPrefix: "osmo",
  rpcUrl: "https://osmosis-testnet-rpc.allthatnode.com:26657/",
  httpUrl: "https://osmosis-testnet-rpc.allthatnode.com:26657/",
  faucetUrl: "https://lcd-test.osmosis.zone",
  feeToken: "uosmo",
  stakingToken: "osmo",
  coinMap: {
    uosmo: { denom: "OSM0", fractionalDigits: 6 },
    osmo: { denom: "ATOM", fractionalDigits: 6 },
  },
  gasPrice: 0.025,
};

const pebblenet: AppConfig = {
  chainId: "pebblenet-1",
  chainName: "Pebblenet",
  addressPrefix: "wasm",
  rpcUrl: "https://rpc.pebblenet.cosmwasm.com",
  httpUrl: "https://lcd.pebblenet.cosmwasm.com",
  faucetUrl: "https://faucet.pebblenet.cosmwasm.com",
  feeToken: "upebble",
  stakingToken: "urock",
  coinMap: {
    urock: { denom: "ROCK", fractionalDigits: 6 },
    upebble: { denom: "PEBBLE", fractionalDigits: 6 },
  },
  gasPrice: 0.025,
};

const configs: NetworkConfigs = { local, uninet, malaganet, pebblenet, osmo_test };
export const config = getAppConfig(configs);
