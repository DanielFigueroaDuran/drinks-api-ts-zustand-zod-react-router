import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRuter from './ruter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRuter />
  </StrictMode>,
)
