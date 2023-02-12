# Como pasar queries:

Ir a http://localhost:5000/graphql  => Te dirije a graphiql

1) Pasar todos los nombres de clientes
  {
  clients {
    name,	
  }
}

2) Pasar nombre, id y descripcion de todos los proyectos
{
  projects {
    name,
    id,
    description
  }
}

3) Pasar proyecto por id
{
  project(id: "1") {
    name,
    description,
    status
  }
}

4) Pasar proyecto por id y cliente asociado
{
  project(id: "1") {
    name,
    description,
    status,
    client {
      name,
      email
    }
  }
}

4) Add project
mutation {
    addProject(name: "Pumps replacement", description: "Replace pumps in plant", status: new, clientId: "63e91dd2ee09269677290145") {
    name,
    id
  }
}

5) Get projects
{
  projects {
    name,
    status,
    client {
      name,
      email
    }
  }
}

6) Delete project
mutation {
  deleteProject(id:"63e950c628310c00e26c1a79") {
    id
  }
}

7) Update project
mutation {
  updateProject(id: "63e951f1d18eab7d339e57c9", name: "Fresh air ventilation", status: completed) {
    name,
    status
  }
}



