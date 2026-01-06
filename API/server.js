import express from 'express'
import receitasRoute from './src/routes/receita.route.js'
export const app = express()
const PORT = 3001   
app.use(express.json())
app.use('/api/receita', receitasRoute)
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})