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

//5. Find all programming languages that have static-typing.
db.my_database.find({typingDiscipline: 'static'}).pretty()

//6. Find all programming languages with strong-typing.
db.my_database.find({typingDiscipline: 'strong'}).pretty()

//7. Find programming languages that are more that are more than 10 years old.
db.my_database.find({firstAppeared: { $lt:'2006'} }).pretty()

//8. Find a programming language by name.
db.my_database.find({language: 'Euphoria'}).pretty()

//9. Find all programming languages invented by Simon Peyton Jones.
db.my_database.find({inventors: 'Simon Peyton Jones'}).pretty()

//10. Find all object-oriented programming languages created in the 90s.
db.my_database.find({
  paradigms: /object-oriented.*/i,
  $and: [
    {
      firstAppeared: { $gt: '1989'}
    },
    {
      firstAppeared: { $lt: '2000'}
    }
  ]
}).pretty()

//11. Find all object-oriented programming languages that use duck-typing.
db.my_database.find({paradigms: /object-oriented.*/i, typingDiscipline: 'duck'}).pretty()

//12. Find all functional programming languages that are also object-oriented.
db.my_database.find({
  $and: [
    {
      paradigms: 'functional',
    },
    {
      paradigms: /object-oriented.*/i
    }
  ]
}).pretty()

//Update Haskell
var haskell = {
  language: 'Haskell',
  inventors: [
    'Simon Peyton Jones',
    'Lennart Augustsson',
    'Dave Barton',
    'Brian Boutel',
    'Warren Burton',
    'Joseph Fasel',
    'Kevin Hammond',
    'Ralf Hinze',
    'Paul Hudak',
    'John Hughes',
    'Thomas Johnsson',
    'Mark Jones',
    'Simon Peyton Jones',
    'John Launchbury',
    'Erik Meijer',
    'John Peterson',
    'Alastair Reid',
    'Colin Runciman',
    'Philip Wadler'
  ],
  firstAppeared: '1990',
  paradigms: [
    'functional',
    'imperative',
    'lazy/non-strict',
    'modular'
  ],
  typingDiscipline: [
    'static',
    'strong',
    'inferred'
  ]
};
db.my_database.update({
  _id: ObjectId("584ece644f3548cf68cbb38e")
}, haskell);

//Patching javascript
var javascript = {
  inventors: 'Brendan Eich'
};
db.my_database.update({
  _id: ObjectId("584ecc484f3548cf68cbb38c")
}, {
  $set: javascript
});

//Patching clojure (variable name not changed)
var closure = {
  language: 'Clojure'
};
db.my_database.update({
  _id: ObjectId("584eceb54f3548cf68cbb38f")
}, {
  $set: closure
});

//Upsert
var elm = {
  inventors: 'Evan Czaplicki',
  firstAppeared: '2012',
  typingDiscipline: [
    'static',
    'strong',
    'inferred'
  ]
};
db.my_database.update({
  language: 'Elm'
}, {
  $set: elm
}, {
  upsert: true
});
