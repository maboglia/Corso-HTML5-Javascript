## Strutture del linguaggio Variabili, 
dichiarazioni ed espressioni Funzioni Array, oggetti e classi 

Stringhe Risorse del browser Cattura eventi JSON AJAX 
Risorse disponibili
w3schools (JavaScript tutorial) 
Javascript reference (Mozilla Developer Network) 

## JavaScript è un linguaggio 
di programmazione utilizzato comunemente come parte dell'esperienza di navigazione, permette di creareinterazioni con l'utente, controllare la navigazione, gestire la comunicazione asincrona, e modificare il contenuto del documento . 
Fonte: https://en.wikipedia.org/wiki/JavaScript 

## design web

Html: contenuto
Css: presentazione
Js: comportamento

## Layout engines
Gecko
Trident
Blink

## JavaScript engines
SpiderMonkey
Jscript
V8

## Hello world
Hello world nel browser
alert('Hello world')

Hello world nel terminale
console.log('Hello world')

## Esecuzione del codice
Interpretazione in una pagina web Interpretazione con firebug Interpretazione in terminal (node.js) 

## Javascript incorporato in una pagina html (I)

```javascript
<!doctype html>
<html>
    <head></head>
    <body>
        <script>
            alert('Hello world')
        </script>
    </body>
</html>
```
## Javascript collegato ad una pagina html (II)
```html
<!doctype html>
<html>
    <head></head>
    <body>
        <script src="esempio.js"></script>
    </body>
</html>
```
```javascript
// file esempio.js
alert('Hello world')
```

## Commenti
Esistono due tipi di commenti:
```javascript
// commento semplice

/* commento
su diverse
righe */
```

## Literals
    Numeri interi:
    192
    Numeri float:
    1.4
    Stringhe di testo:
    "Hello World!", 'Hello World!'
    Valori logici:
    true, false
    espressioni regolari
    /[A-Za-z]/
    Valore nullo:
    null
    Valore undefined:
    undefined

## Identificatori
Gli identificatori in javascript cominciano con una lettera, una underline (_), o un carattere di dollaro ($); seguito da lettere, numeri, underline, e caratteri di dollaro
Esempi
```javascript
var contatore;
var _indice;
var $indice;
var $__$__$;
```

## parole chiave
```javascript
abstract else instanceof super boolean enum int switch break export interface synchronized byte extends let this case false long throw catch final native throws char finally new transient class float null true const for package try continue function private typeof debugger goto protected var default if public void delete implements return volatile do import short while double in static with
```

## Punto e virgola (;)
E' possibile l'uso del carattere (;) per la separazione di frasi,si può omettere se queste si trovano su linee differenti (non fatelo!)
Gli interpreti di JavaScript trattano i fine linea come fine frase, se e solo se, la frase successiva non può interpretarsi come continuazione della precedente.

## Tipi di dati
Esistono due categorie:
### Tipi primitivi:
Numeri 
Stringhe di testo 
Valori logici 
### Tipi oggetto:
Oggetti 
array 
Funzioni 
Numeri

## Esempi:
```javascript
  12 // numero intero in base decimale.
0345 // numero intero in base ottale.
0xFF // numero intero in base esadecimale.

3.141592654 // numero decimale.
.234955     // numero decimale.
6.023e23    // numero decimale in notazione esponenziale.
```                
## Number
Number è la rappresentazione di tipo oggetto di un tipo numerico.

## Math
Math è l'oggetto che concentra molte constanti e funzioni matematicas.

##  Date
Date è l'oggetto utilizzato per la rappresentazione di date.
Internamente, questa rappresentazione è un numero che rappresenta i millisecondi trascorsi dalla data: 1 di gennaio del 1970.

## Maggiori informazioni: 
http://en.wikipedia.org/wiki/System_time

## Stringhe di testo
Si possono usare gli apici semplici o gli apici doppi come delimitatori validi per la dichiarazione di una variabile tipo stringa di testo.
Esempi:

```javascript
var a='stringa di testo'
var b="stringa di testo"
var c='qui un "esempio"'
var d="un esempio 'Più'"
```

### Sequenze di Escape 
    \O          The NULL character
    \b          Backspace
    \t          Horizontal tab
    \n          Newline
    \v          Vertical tab
    \f          Form feed
    \r          Carriage return
    \"          Double quote
    \'          Apostrophe or single quote
    \\          Backslash
    \x[XX]      The Latin-1
    \u[XXXX]    The Unicode character

## Parsing di Stringhe (I)
Una stringa può vedersi come un array di caratteri immutabile.
Esempi:
var a='stringa di testo'
console.log(a[5]) // a
## Funzioni di stringa
```javascript
var s = "hello, world"
s.charAt(0)          // => "h"
s.charAt(s.length-1) // => "d"
s.substring(1,4)     // => "ell"
s.slice(1,4)         // => "ell"
s.slice(-3)          // => "rld"
s.indexOf("l")       // => 2
s.lastIndexOf("l")   // => 10
s.indexOf("l", 3)    // => 3
s.split(", ")        // => ["hello", "world"]
s.replace("h", "H")  // => "Hello, world"
s.toUpperCase()      // => "HELLO, WORLD"
```
### Valori logici
```javascript
var a=true
var b=false
```
Son valori falsi i seguenti:
```javascript
undefined
null
0
-0
NaN
''
```
## String
String è la rappresentazione di tipo oggetto di una stringa.
## Boolean
Boolean è la rappresentazione di tipo oggetto di una variabile logica.

## valore nullo e valore undefined

Rappresentano la assenza di un valore in una variabile o nel ritorno di una function.
```javascript
var a=null
var b=undefined
```




## Condizioni
Le condizioni sono definite come in Java.
```javascript
if else if switch 
if
if(expresion){
    frasi
}
if(expresion){
    frasi
}else{
    frasi
}
else if
if(expresion){
    frasi
}else if{
    frasi
}else{
    frasi
}
```
## switch

```javascript
switch(expresion){
    case 1:
        frasi
        break
    case n:
        frasi
        break
    default:
	  frasi
}
```

# Iteratori
while do/while for for/in 

## while
```javascript
while(expresion){
    frasi
}
```

## do/while
```javascript
do {
    frasi
while(expresion)
```
## for
```javascript
for(inizializzazione;valutatore;incrementatore){
    frasi
}
```
## for/in
```javascript
for(variabile in collezion){
    frasi
}
```
## Cattura di errori
```javascript
try{
    frasi
}catch(e){
    frasi
}finally{
    frasi
}
```
## instanceof
Verifica se un oggetto è instanza di qualche prototipo.
## typeof
Ritorna una stringa indicando il tipo di dato che ha una variabile.
## var
Parola chiave per la dichiarazione di una variabile.
## delete
Operatore che rimuove proprietà di un oggetto.
## use strict
Direttiva per l'interprete di JavaScript, che indica l'uso del modo strict.
## Funzioni
Le funzioni se dichiarano con la parola riservata funzione.
function f(x,y){
    return x+y
}