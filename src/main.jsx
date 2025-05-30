import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
   import './index.css'
import Demo1 from './liifecycle_component/Demo1'

createRoot(document.getElementById('root')).render(
    <StrictMode>
    {/* <App/> */}
    <Demo1/>
   </StrictMode>
)
