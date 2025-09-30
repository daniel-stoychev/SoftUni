# noSQL & MongoDB

## Relational and Non-Relational Databases

### Relational

- SQL - Structure query language
- Used for general purpose
- RDBMS - Relational database management system
- PostgreSQL

### Non-Relational

- Do not use SQL
- More specialized in their purpose, solve only specific/cutom problems
- Example - Reddis (one of the fastest in the world): good in keeping data for short period of times (cache for example)
- Example - Apache Cassandra: good in keeping data for long periods, BUT data that has been written recently will be easier and faster to reach (Facebook for example)
- Scaling
  - horizontal - we can add one more server/node and connect them both (better) / mainly used in Non-Relational DBs
  - vertical - we add more resources on the machine
-

#### MongoDB and Mongoose

- MongoDB (driver) - more general (standard) purpose, resembles as Relational but it is actually Non-Relational
- GUI - graphical user interface
- CLI - command line interface
- MongoDB has documents (not objects) / database -> collections -> documents -> key / value

---

- Mongoose: (Middlemans / collections) - make the connection betwenn node.JS and the DB (MongoDB)
  - ORM - Object relation mapper/model (famous with relation databases)
  - ODM - Object document mapper/model (famous with non-relation/document databases)
  - schema-based solution
  - Atlas - onpine Cloud for hosting DBs

#### Mongoose models

- we first create the schema beofe creating the model
- Mongoose makes a magic! - it puralize the name of the models (mongoose.model('Person', peopleSchema); -> collection is 'people')
- there are validators

#### CRUD with Mongoose

-

#### Mongoose Querying
