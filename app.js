const express = require('express')
const app = express()

app.use(express.json())

const port = 3000

const turmas = {
    "Ciência da Computação": "15/12/2022",
    "Analise e Desenvolvimento de Sistemas": "30/12/2022"
}

//API que recebe uma turma, e retorna a próxima data.
app.post('/proximaturma', (req,res) => {
        const turma = req.body.turma;
        console.log(turma)
        const proximo_horario = turmas[turma]
        
        if (proximo_horario == undefined) {
            res.send({horario: "turma não existe"})
        }
        
        res.send({horario: turmas[turma]})
})

app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
})