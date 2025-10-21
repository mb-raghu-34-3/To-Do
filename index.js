require('dotenv').config()
let bodyParser = require('body-parser')
let express = require('express');
let app = express();
const supabase = require('./supabase')
let cors = require('cors')
const path = require('path');

const json = {"message": "Hello json"}
app.use(express.static(path.join(__dirname, 'client', 'dist')));

app.use(bodyParser.json())

app.use(cors())
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

//login user
app.post('/api/login', async(req,res)=>{
    try {
        const { email:loginEmail, password :loginPass} = req.body;
        const { data, error } = await supabase
        .from('users')
        .select()
        .eq('email', loginEmail)
        .eq('password',loginPass)
        .single()
        
        if (!data) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const {name,email,id} = data 
        res.json({name,email,id})
    } catch (error) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }

})
//signup user
app.post('/api/signup', async(req,res)=>{
    try {
        const {name:userName, email:loginEmail, password :loginPass} = req.body;
        const {data,error } = await supabase
            .from('users')
            .insert({ name: userName, email: loginEmail, password: loginPass })
            .select()
        
        if (error) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const {name,email,id} = data[0]
        res.json({name,email,id})
    } catch (error) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }

})

app.get('/api/todos', async(req,res)=>{
    try {
        const { userId } = req.query;
        console.log(typeof userId)
        const { data, error } = await supabase
        .from('todo')
        .select()
        .eq('user_id', userId) 

        res.json(data)
    } catch (error) {
        return res.status(400).json({ message: 'Error Fetching ToDo' });
    }
})
app.post('/api/todos', async(req,res)=>{
    try {
        const { text, id } = req.body;
        console.log(req.body)
        const { data, error } = await supabase
        .from('todo')
        .insert({text:text, user_id:id})
        .select()

        res.json(data)
    } catch (error) {
        return res.status(400).json({ message: 'Error inserting a todo' });
    }
})

app.put('/api/todos/:id',async (req,res) => {
    try {
        let {text:newToDo} = req.body
        let {id: todoId} = req.params
        const { data, error } = await supabase
                    .from('todo')
                    .update({ text: newToDo })
                    .eq('id', todoId)
                    .select()
    
        res.json(data)
    } catch (error) {
        return res.status(400).json({ message: 'Error updating a todo' });
    }

})
app.patch('/api/todos/:id/toggle',async (req,res) => {
    try {
        let {id: todoId} = req.params
        let {completed:isDOne} = req.body
        console.log(req.params,req.body)
        const { data, error } = await supabase
                    .from('todo')
                    .update({ completed: !isDOne })
                    .eq('id', todoId)
                    .select()
        res.json(data)
    } catch (error) {
        return res.status(400).json({ message: 'Error updating a todo' });
    }

})

app.delete('/api/todos/:id', async(req,res) =>{
    try {
        let {id: todoId} = req.params
        const { data, error } = await supabase
                        .from('todo')
                        .delete()
                        .eq('id', todoId)
                        .select()
                            
        res.json(data)
    } catch (error) {
        return res.status(400).json({ message: 'Error deleting a todo' });
    }
})



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Node is listening on port ${port}...`);
});

module.exports = app;