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
