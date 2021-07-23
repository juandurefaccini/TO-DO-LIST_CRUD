import Task from '../models/task.js'

var TaskTransactions = {}

TaskTransactions.getTaskByTitle = function (req, res) {
    if (req.params && req.params.title) {
        const taskTitle = req.params.title
        Task
            .find({ "title": taskTitle })
            .exec(
                function (err, result) {
                    if (err) {
                        return res.status(404).send(err)
                    }
                    else {
                        if (!result) {
                            return res.status(404).send({ message: "No hay tarea que corresponda con ese nombre" })
                        } else {
                            return res.status(200).send(result)
                        }
                    }
                }
            )
    }
    else {
        res.status(404).send({ message: 'Debe ingresar el titulo requerido' })
    }
};

// Get todas las task
TaskTransactions.getTasks = function (req, res) {
    Task
        .find({})
        .exec(function (err, result) {
            if (err) {
                return res.status(404).json({ mensaje: "Error en el servidor", err })
            }
            else {
                if (result) {
                    return res.status(200).json(result)
                }
                return res.status(404).json({ mensaje: "No hay tareas" })
            }
        })
};

//save transaction
TaskTransactions.save = function (req, res) {
    var newTask = new Task({
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
        tags: [{ priority: req.body.priority, taskType: req.body.taskType }]
    });

    newTask.save(function (err, trans) {
        if (err) return res.status(500).json({ mensaje: "Error en el servidor", err });
        return res.json(trans);
    });
};

//save task by title
TaskTransactions.updateByTitle = function (req, res) {
    if (req.params.title) {
        Task.updateOne({ title: req.params.title }, req.body, (err, result) => {
            if (!result) return res.status(400).json({
                mensaje: 'Failed request'
            })

            if (err) return res.status(500).json(err)

            return res.status(200).json(result)
        })

    } else {
        return res.status(400).json({
            mensaje: 'Debe ingresar un title valido para buscar la task'
        })
    }
};

//delete by title
TaskTransactions.deleteByTitle = function (req, res) {
    if (req.params.title) {
        Task.deleteOne({ title: req.params.title }, (err, result) => {
            if (!result) return res.status(400).json({
                mensaje: 'Failed request'
            })

            if (err) return res.status(500).json(err)

            return res.status(200).json(result)
        })

    } else {
        return res.status(400).json({
            mensaje: 'Debe ingresar un title valido para buscar la task'
        })
    }
};

export { TaskTransactions }

