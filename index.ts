import express from 'express'
// const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {

  res.status(201).json({
    ok: true,
    // msg: 'No hay token en la petición'
    msg: 'Nuevo id: 1243242'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})