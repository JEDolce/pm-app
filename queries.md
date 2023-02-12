# Como pasar queries:

Ir a http://localhost:5000/graphql  => Te dirije a graphiql

1) Pasar todos los nombres de clientes
  {
  clients {
    name,	
  }
}

2) Pasar nombre, id y descricion de todos los proyectos
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

