//Python
var python = {
  language: 'Python',
  inventors: 'Guido van Rossum',
  firstAppeared: '1991',
  paradigms: [
    'object-oriented',
    'imperative',
    'functional',
    'procedural',
    'reflective'
  ],
  typingDiscipline: [
    'duck',
    'dynamic',
    'strong',
    'gradual'
  ]
};
db.my_database.insert(python);

//JavaScript
var javascript = {
  language: 'JavaScript',
  inventors: 'Brandon Eich',
  firstAppeared: '1995',
  paradigms: [
     'scripting',
     'object-oriented (prototype-based)', 'imperative',
     'functional',
     'event-driven'
  ],
  typingDiscipline: [
    'dynamic',
    'duck'
  ]
};
db.my_database.insert(javascript);

//Java
var java = {
  language: 'Java',
  inventors: 'James Gosling',
  firstAppeared: '1995',
  paradigms: [
     'scripting',
     'object-oriented (class-based)',
     'structured',
     'imperative',
     'generic',
     'reflective',
     'concurrent'
  ],
  typingDiscipline: [
    'static',
    'strong',
    'safe',
    'nominative',
    'manifest'
  ]
};
db.my_database.insert(java);

//Haskell
var haskell = {
  language: 'Haskell',
  inventors: 'Simon Peyton Jones',
};
db.my_database.insert(haskell);

//Closure
var closure = {
  language: 'Closure',
  inventors: 'Rich Hickey',
  paradigms: [
     'functional'
  ],
  typingDiscipline: [
    'dynamic',
    'strong'
  ]
};
db.my_database.insert(closure);

//Euphoria
var euphoria = {
  language: 'Euphoria',
  inventors: 'Robert Craig',
  typingDiscipline: [
    'static',
    'dynamic'
  ]
};
db.my_database.insert(euphoria);

//1. Find a programming language by its object ID
db.my_database.find({_id: ObjectId("584ed11e4f3548cf68cbb390")}).pretty()

//2. Find all object-oriented programming languages.
db.my_database.find({paradigms: /object-oriented.*/i}).pretty()

//3. Find all functional programming languages.
db.my_database.find({paradigms: 'functional'}).pretty()

//4. Find all programming languages that have "duck-typing".
db.my_database.find({typingDiscipline: 'duck'}).pretty()
