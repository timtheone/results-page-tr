import { QueryClient, QueryClientProvider } from 'react-query'

import styles from './App.module.scss'
import Results from './components/Results/Results'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.wrapper}>
        <Results />
      </div>
    </QueryClientProvider>
  )
}

export default App
