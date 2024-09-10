import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ThemedContextProvider } from './Components/Context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemedContextProvider>
    <App />
    </ThemedContextProvider>
  </StrictMode>,
)
