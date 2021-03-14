import { createContext } from 'react'
import { ClientManager } from '@cookies'

const CookiesContext = createContext(new ClientManager())

export default CookiesContext
