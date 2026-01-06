import ObterRespostaReceita from "../services/openai.service.js";

export const perguntarReceita = async (req, res) => {
 
    try {
    const { pergunta } = req.body
    if (!pergunta) {
        return res.status(400).json({
            erro: 'eh obrigatorio enviar uma pergunta'
        })
    }
    const resposta = await ObterRespostaReceita(pergunta)
    res.json({ resposta })
} catch (err) {
    res.status(500).json({ erro: 'erro ao processar a pergunta' })
}
}
