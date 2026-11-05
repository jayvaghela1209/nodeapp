import express from 'express'

const app = express()
const PORT = process.env.PORT ?? 8081


app.get('/',(req, res)=>{
    return res.json({ mes: "Hello from Node JS" })
})

app.listen(PORT, ()=>{
    console.log(`server is up and running on PORT ${PORT}`)
})

