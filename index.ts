import { ChainGrpcBankApi, getEndpointsForNetwork, Network } from '@routerprotocol/router-chain-sdk-ts';
  
const endpoint = getEndpointsForNetwork(Network.Testnet);
const bankClient = new ChainGrpcBankApi(endpoint.grpcEndpoint);
const ROUTER_TO_SEND = '10';
  
async function fetchAccountDetails() {
  // Fetch all balances of an account
  const accountBalances = await bankClient.fetchBalances(
      'router16sqwdtdxjl6zdvx49rvayhkyelfrhavpmknxh9'
  );
  console.log(accountBalances);
    
  // Fetch particular coin's balance of an account
  const routersBalances = await bankClient.fetchBalance({
      accountAddress: 'router16sqwdtdxjl6zdvx49rvayhkyelfrhavpmknxh9',
      denom: 'route',
  });
  console.log(routersBalances);
}
  
fetchAccountDetails();

