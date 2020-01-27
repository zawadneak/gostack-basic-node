const express = require('express');

const { Router } = express;

const routes = new Router();

const projects = [];

const checkID = (req,res,next)=>{
  const { id } = req.params;
  const findProject = projects.find(item => item.id == id);

  if(!findProject){
    return res.status(400).json({error:"Project id is invalid!"})
  }
  
  const projectIndex = projects.indexOf(findProject);
  req.projectIndex = projectIndex;
  
  return next();
}

const checkIndex = (req,res,next)=>{
  const { id,index } = req.params;

  const findTask = projects.find(item=> item.id ==id)

  if(!findTask.tasks[index]){
    return res.status(400).json({error:"Task index is invalid!"})
  }

  req.index = index;
  return next();
}



routes.get('/projects',(req,res)=>{
  return res.json(projects);
})

routes.post('/projects',(req,res)=>{
 const { title,id } = req.body;

 const newProject = ({
   id,
   title,
   tasks:[],
 })

 projects.push(newProject)

 return res.json(newProject)
});

routes.post('/projects/:id/tasks', checkID,(req,res)=>{
  const { title } = req.body;
  const { projectIndex } = req;

  projects[projectIndex].tasks.push(title);

  return res.json(projects[projectIndex]);
})

routes.put('/projects/:id',checkID,(req,res)=>{
  const { title } = req.body;
  const { projectIndex } = req;

  projects[projectIndex].title = title;

  return res.json(projects[projectIndex]);
})

routes.put('/projects/:id/tasks/:index',checkID,checkIndex,(req,res)=>{
  const { projectIndex,index } = req;
  const { title } = req.body;

  projects[projectIndex].tasks[index] = title;

  return res.json(projects[projectIndex]);
}) 

routes.delete('/projects/:id',checkID,(req,res)=>{
  const { projectIndex } = req;

  projects.splice(projectIndex,1);

  return res.send();
})

routes.delete('/projects/:id/tasks/:index',checkID,checkIndex,(req,res)=>{
  const { projectIndex,index } = req;

  projects[projectIndex].tasks.splice(index,1);

  return res.send()
})

module.exports = routes