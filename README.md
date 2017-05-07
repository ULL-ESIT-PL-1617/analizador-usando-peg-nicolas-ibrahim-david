# Analizador Usando PEG.js

## Equipo nicolas-ibrahim-david
Néstor Ibrahim Hernández Jorge
David Pérez Rivero
Nicolás Hernández González

##Descripción
Diseñe un lenguaje de programación sencillo. Escriba un analizador sintáctico que genere un árbol de análisis abstracto para dicho lenguaje.

##Gramática del lenguaje
program = block "." .

 block =
     ["const" ident "=" number ("," ident "=" number)* ";"]
     ["var" ident ("," ident)* ";"]
     ("procedure" ident ";" block ";")* statement .

 statement =
     ident "=" expression
     | "call" ident
     | "begin" statement (";" statement )* "end"
     | "if" condition "then" statement
     | "while" condition "do" statement .

 condition =
     "odd" expression
     | expression ("=="|"#"|"<"|"<="|">"|">=") expression .

 expression = ["+"|"-"] term {("+"|"-") term} .

 term = factor (("*"|"/") factor)* .

 factor =
     ident
     | number
     | "(" expression ")" .
