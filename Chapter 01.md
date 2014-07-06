#Back-End con JavaScript – Un “Hello World” con Node.js

Hoy en día, se podría decir que el lenguaje de Internet para el lado del cliente es JavaScript. Un lenguaje de scripts que nada tiene que ver con Java, muy potente, y que nos permite dar funcionalidad a nuestras páginas estáticas. Hasta ahora el front-end contaba con un montón de herramientas para poder trabajar de forma cómoda con JavaScript, como por ejemplo Vanilla JS, jQuery, y más recientemente Knockout, Angular… pero siempre el back-end se había resistido siendo dominado por lenguajes como PHP en servidores Apache, o Ruby, Python… pero de un tiempo a esta parte, los que nos consideramos JavaScripters estamos de enhorabuena ya que ahora contamos con una tecnología que nos permite correr JavaScript en el lado del servidor, bueno, mejor dicho, nos permite que el servidor se construya en su totalidad con JavaScript. Esta es Node.js. No me voy a meter en temas de instalación, porque creo que en su página vienen muy bien explicadas las cosas, así que pasaré directamente a la chicha.

Node.js es sencillamente JavaScript sobre un intérprete que en este caso es el motor V8 de Google, de tal manera que una vez instalado en nuestro ordenador, podemos acceder a la consola de Node escribiendo “node” en el terminal, y podremos empezar a ejecutar código JavaScript sin más. Esto también nos permite ejecutar archivos JavaScript simplemente escribiendo “node miAplicacion.js” y por lo tanto, para poder crear un servidor con Node, tendremos que ejecutar un archivo con el código del servidor en su interior. Este código, hará X cosas de forma secuencial que serán:

Importará las librerías necesarias.
Definirá las rutas a las que accederá el cliente.
Se pondrá a la escucha en la IP local en un puerto definido por nosotros.
Y ya está. Lo demás será más o menos complicado de hacer hasta que todo funcione como queremos, pero lo básico es eso. Para el tema del enrutado, usaremos una librería que se llama Express, y que simplifica bastante la gestión del servidor, sobre todo cuando nos metemos en temas de renderizado de las vistas desde lenguajes como Jade o el CSS desde Stylus, SASS… pero eso ahora no nos tiene que preocupar, porque nos vamos a centrar en los tres pasos de arriba y nuestro “Hello Node!”.

El código completo de nuestra aplicación sería:

[code language="html", gutter="true", title="Pepe", highlight="0"]
var express = require('express');
var app = express();

app.get('/', function(request, response) {
    response.send('<h1>Hello Node!</h1>');
});

var port = 5000;

app.listen(port, function() {
    console.log('Server listening: http://localhost:' + port);
});
[/code]

Y ya! Sencillo eh!

Pues para hacerlo funcionar sólo hace falta meterlo en un archivo, por ejemplo, “server.js”, y este a su vez dentro de un directorio que va a contener nuestro proyecto, por ejemplo, “Hello_Node”. Una vez que tenemos esto, vamos a ver como funciona el código:

var express = require(‘express’); Esta línea de código es igual para cualquier librería que queramos importar. Lo único que hace es crear una variable donde vamos a meter las funciones de la librería importada.
var app = express(); Nos inicia Express y así podemos usar las funciones de la librería a través de la variable “app”.
app.get(route, callback(request, response){}); Esto nos hace un get normal y corriente al que llamamos a través de una ruta (route) y que ejecuta una función cuando es llamado (callback). Esta función recibe dos parámetros: “request”, que contendrá la petición del cliente, y “response”, que contendrá la respuesta del servidor; “response.send()” nos mandará lo que queramos de vuelta al cliente, en este caso, el contenido de lo que queramos mostrar en el explorador.
var port = 5000; Es el puerto que vamos a escuchar.
app.listen(port, callback(){}); Y esta es la función que se pone a la escucha. El callback, será la función que se lance cuando estemos a la escucha. En este caso, simplemente saca por consola la dirección a la que tenemos que conectarnos para ver al servidor. Para probar nuestro servidor hay que copiarla y pegarla en el explorador.
¿Y qué hacemos para lanzar el servidor?

Pues primero, abrir una consola y navegar hasta nuestro directorio del proyecto que contiene nuestro “server.js” (cd /……./Hello_Node). Una vez ahí, tendremos que instalar las librerías que hemos importado, y para ello contamos con el gestor de paquetes de Node llamado “npm”. Para instalar Express, sólo tendremos que escribir npm install express en el terminal. Las librerías se instalarán todas dentro de nuestra carpeta de proyecto en una carpeta llamada “node_modules”, lo cual nos permitirá tener un proyecto ordenado. Y para lanzar el servidor, sólo tendremos que escribir node server.js.

La salida en pantalla será “Server listening: http://localhost:5000″ y nuestro servidor estará funcionando. Para probarlo sólo tendremos que abrir un explorador y escribir en la barra de navegación http://localhost:5000. Y con esto tenemos nuestro primer servidor escrito en Node.js + Express funcionado. De aquí a crear el nuevo Facebook, ya es sólo cuestión de paciencia.