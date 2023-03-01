import Medusa from "@medusajs/medusa-js"

const medusaClient = new Medusa({ baseUrl: import.meta.env.VITE_baseUrl })

export { medusaClient }