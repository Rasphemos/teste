const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.pegaTodasAsPessoas)
router.get('/pessoas/:id', PessoaController.pegaUmapessoa)
router.post('/pessoas', PessoaController.criaPessoa)
router.put('/pessoas/:id', PessoaController.atualizapessoa)
router.delete('/pessoas/:id', PessoaController.apagaPessoa)
router.get('/pessoas/:estudanteId/matricula/:MatriculaId', PessoaController.pegaUmaMatricula)
router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
router.put('/pessoas/:estudanteId/matricula/:MatriculaId', PessoaController.atualizaMatricula)
router.delete('/pessoas/:estudanteId/matricula/:MatriculaId', PessoaController.apagaMatricula)

module.exports = router