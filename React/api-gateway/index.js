//setup the gateway for calling
const express = require('express');
const app = express();
const projectList = require('../json-server/projects')
let projects = projectList.projectList

app.get('/', (req, res) => {
    res.send("Simple API Gateway")
})

app.get('/projects', (req, res) => {
    res.json(projects)
})

app.get('/projects/highlight', (req, res) => {
    const data = []
    for(let i = 0; i < projects.length; i++) {
        if(projects[i].highlight){
            data.push(projects[i])
        }
    }
    res.json(data)
})

console.log("Simple API Gateway run on localhost:4000")

app.listen(4000);