import pkg from 'mongoose';
const { Schema, model } = pkg;

const taskSchema = new Schema({ //Define el esquema
    title: String,
    description: String,
    status: String,
    tags: [{ priority: String, taskType: String }]
})

export default model('Task', taskSchema);
