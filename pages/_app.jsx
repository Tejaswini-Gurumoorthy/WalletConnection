import { chain,createClient, configureChains, WagmiConfig } from 'wagmi';
import { mainnet,goerli } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public'; //like alchemy and infura
import { SessionProvider } from 'next-auth/react';
const defaultChains= [mainnet, goerli]

const { provider, webSocketProvider } = configureChains(defaultChains, [publicProvider()]);
const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <Component {...pageProps} />
      </SessionProvider>
    </WagmiConfig>
  );
}

export default MyApp;