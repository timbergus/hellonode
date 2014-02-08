# Back-End con JavaScript – Mi “index.html” con Jade

Hola de nuevo a todos. Como vimos en la primera entrada de “Back-End con JavaScript”, nuestra genial herramienta Node.js nos permitía construir servidores como el que planta champiñones; Ctrl-C, Ctrl-V de 10 líneas de código y ¡hala!, otro servidor. Pero como no sólo de champiñones vive el hombre, y a todos nos gustan los níscalos, vamos a ver como podemos hacer para que lo que nos devuelva el servidor sea un poco más colorido que un simple “Hello Node!”.

Para ello, y ya metidos en el ambiente de Node, vamos a usar Jade, una herramienta que nos permite escribir código que se convierte directamente en HTML cuando se lo pedimos al servidor. Así que vamos a crear una nueva carpeta dentro de nuestra carpeta del proyecto (Hello_Node), llamada “views”. Aquí dentro meteremos nuestros dos archivos principales para nuestra página:

layout.jade
index.jade
Layout: Este archivo contendrá la base de nuestra aplicación; lo que viene a ser la estructura HTML básica con el “head”, el “body”, los “includes”. Ya que la idea es dar una visión global, no me voy a meter en el detalle del código, porque lo vais a encontrar mejor explicado en la página del desarrollador, así que vamos a tratar de hacer un salto de fe. Lo que si tengo que mencionar es donde va a ir nuestro contenido de “index.jade”, que en este caso será dentro de la etiqueta “block”. Digamos que esto es como un hueco donde pondremos contenido, ¿y qué contenido?, pues el indicado por el nombre que viene al lado de la etiqueta, que en este caso es “myContent”. El código completo será el siguiente:

doctype html

html(lang=”en”)

head

title My Hello Node Site

body

block myContent

Index: Digamos que es propiamente un contenido. De hecho, nuestro primer contenido donde vamos a sacar la línea “Hello Node!”. Dentro del código, lo primero que haremos será decirle cual es su contenedor, que en este caso es “layout.jade”, así que nada más empezar incluiremos “extend layout”. Lo segundo que haremos será definir el contenido y para ello utilizaremos la etiqueta “block” seguida del nombre de nuestro bloque, en este caso “myContent”. Como veis, esta estructura se corresponde con la que tenemos en “layout.jade”, así se sustituirá la etiqueta por el contenido, en este caso “h1 Hello Node!”. El código completo quedará así:

extend layout

block myContent

h1 Hello Node!

Y por último, después de crear estos dos archivos y para que funcione todo, tendremos que instalar Jade en nuestro proyecto, y eso lo haremos navegando al directorio donde tenemos el proyector (Hello_Node) e instalando como el otro día los paquetes con el npm a través de la línea de comandos (npm install jade).

Y con esto amigos, hemos cubierto el tema de los nuevos archivos donde va a ir nuestro contenido. Ahora, tendremos que meter algo de código en el servidor para indicarle tres cosas:

Donde van a estar nuestras vistas (los archivos .jade)
Cual va a ser el motor de renderizado para estas vistas (en este caso Jade)
Que vista queremos devolver a cada petición del servidor.
Vamos por partes.

Para indicarle al servidor donde están nuestras vistas, definiremos una nueva etiqueta dentro de nuestra variable “app” llamada “views” que indicará por defecto el directorio donde se encuentran las vistas. Para ello utilizaremos el siguiente código:

app.set(‘views’, __dirname + ‘/views’);

Dentro del “set()” tenemos dos partes: la etiqueta y el path. La etiqueta (variable) es “views” como ya hemos dicho antes y es donde por defecto iremos a buscar las vistas. El contenido de esta variable, es el path donde están nuestras vistas. Este path lo indicaremos con dos partes: la parte “/views” es la carpeta donde tenemos nuestra vistas, y la parte “__dirname” es una variable que almacena la dirección de nuestro directorio de proyecto. Digamos que nos da la dirección de donde cuelgan todos nuestro archivos y carpetas y nos sirve como referencia absoluta para referirnos a los contenidos de nuestro proyecto. Con el signo + concatenamos los dos strings y el resultado será algo así: /……./Hello_Node/views.

Para indicar al servidor que motor de renderizado queremos utilizar, modificamos el valor de la variable correspondiente como acabamos de hacer para el path, y le decimos al servidor que nuestro motor de renderizado es Jade de la siguiente manera:

app.set(‘view engine’, ‘jade’);

Lo mismo que antes, dentro del “set()” le decimos a la etiqueta “view engine” que su contenido va a ser “jade”.

Y por último, tenemos que devolver en la petición del cliente nuestra vista renderizada. Para ello, tendremos que ir a la función que usábamos en el post anterior para gestionar las llamadas al servidor y cambiar el “sender” para que lo que nos devuelva sea nuestro “index.jade”. Aquí como veis no hacemos referencia al “layout.jade” ya que al pedir el “index.jade” se incluye a través de la instrucción “extend layout”. El código tal cual estaba era:

app.get(‘/’, function(request, response) {
response.send(‘<h1>Hello Node!</h1>’);
});

Ahora, después de cambiarlo nos quedará así:

app.get(‘/’, function(request, response) {
response.render(‘index’);
});

Como podéis ver, debido a que hemos definido el motor de renderizado como “Jade”, no tenemos que poner la extensión “.jade” a los archivos que pasemos ya que se sobreentiende. Y si probáis esto igual que ayer, el resultado que obtendréis será el mismo, con la diferencia de que ahora es mucho más sencillo mejorar nuestras página e incluso incluir diferentes páginas para diferentes rutas. El código completo del servidor quedará de la siguiente manera:

var express = require(‘express’);
var app = express();

app.set(‘views’, __dirname + ‘/views’);
app.set(‘view engine’, ‘jade’);

app.get(‘/’, function(request, response) {
response.render(‘index’);
});

var port = 5000;

app.listen(port, function() {
console.log(‘Server listening: http://localhost:’ + port);
});

Y para aquellos que quieran tener el código del proyecto, he creado un repositorio en BitBucket para que lo podáis “clonar” y ver como va evolucionando a mediada que vayamos poniendo más entradas en el blog. Suerte y a las teclas!