import { Router } from 'express';
var router = Router()
import { TaskTransactions } from '../controllers/task_transactions.js'

// GUARDAR
router.post('/', (req, res) => {
    TaskTransactions.save(req, res)
})

// VER TODAS LAS TASKS
router.get('/', (req, res) => {
    TaskTransactions.getTasks(req, res)
})

// VER UNA TASK BUSCANDO POR TITULO
router.get('/:title', (req, res) => {
    TaskTransactions.getTaskByTitle(req, res)
})

// ACTUALIZAR POR TITULO
router.put('/:title', (req, res) => {
    TaskTransactions.updateByTitle(req, res)
})

// BORRAR POR TITULO
router.delete('/:title', (req, res) => {
    TaskTransactions.deleteByTitle(req, res)
})

export default router;