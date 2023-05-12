const connection = require("mysql2");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());

app.use(cors());

const db = connection.createConnection({
  host: "localhost",
  user: "root",
  password: "23647619rbk",
  database: "project",
});

db.connect(function (err) {
  if (err) console.log("Error to connect to database", err);
  else console.log("Database connected");
});

app.get("/", (req, res) => {
  res.send("ines");
});

app.post("/login",(req,res)=>{
  const q="select * from users  where username = ? "
  const values=[req.body.username]
  db.query(q,values,(err,data)=>{
      if(err){
 res.send(err)}
 
 
 
 const temp=Object.assign({},data)


 if(temp[0]?.password==req.body.password){
  
  return res.status(200).send({succes:true,message:JSON.stringify(data)})
 }else{
  return  res.status(500).send({succes:false})
 }

   } )
  })
    
  app.post("/enregister",(req,res)=>{
     const q="insert into users(username,password) values(?,?)"
      const values=[req.body.username,req.body.password]
      
     db.query(q, values, (err, data) => {
        if (err) return res.send(err);
        return res.send("created");
       });
     });
  
  
 
app.listen(3000, () => {
  console.log("listening on 3000");
});
