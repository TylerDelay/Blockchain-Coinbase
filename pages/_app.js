import '../styles/globals.css'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'

//chainId for rinkeby is 4
const supportedChainIds = [4]
const connectors = {
  injected: {},
}

//entire app is wrapped by 3rd web authentication
function MyApp({ Component, pageProps }) {
  return(
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  )
}

export default MyApp
