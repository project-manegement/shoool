const express=require('express')

const cors=require('cors')
const app=express()
const mysql=require('mysql2')
var bodyParser = require('body-parser')

app.use(bodyParser.json())


const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'schoooly'
})

db.connect((err)=>{
    if(err){
        console.log(err)
    } else{
    console.log('connected')}
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/use',(req,res)=>{
    const sqlSelect="SELECT * FROM courses"
    db.query(sqlSelect, (err, result)=>{
        console.log('erreur',err)
        console.log('result',result)
        res.json(result)
    })

})

app.post('/create', (req, res) => {
    const course = req.body;
    console.log("creating course", course); 
    db.query(
      `INSERT INTO courses (name, subject, hour) VALUES (?, ?, ?)`,
      [course.name, course.subject, course.hour],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).send(error.message);
        } else {
          res.status(200).send(results);
        }
      }
    );
  });


 
  app.delete('/course/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM courses WHERE idcourses = ?', id, (err, result) => {
      if (err) {
        console.error('Error deleting course:', err);
        res.status(500).send('Error deleting course');
      } else if (!result.affectedRows) { 
        console.log('course not found');
        res.status(404).send('course not found');
      } else {
        console.log('course deleted successfully');
        res.send('course deleted successfully');
      }
    });
  });


app.listen(4000,()=>{
    console.log('here we go schooly')
})