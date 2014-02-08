# Back-End con JavaScript – Instalando Dependencias

Bueno, como vimos en las dos entradas anteriores, ya tenemos nuestro servidor funcionando y a demás, nuestras páginas empiezan a tener mejor aspecto gracias a Jade. Pero resulta bastante incómodo tener que instalar los paquetes “Express” y “Jade” por separado cada vez que queramos crear un nuevo proyecto, y además si tenemos más dependencias o tenemos que especificar versiones concretas al instalar puede llegar a ser bastante engorroso hacerlo cada vez, y además podemos dejarnos cosas sin querer y empezar a tener errores desde el principio.Por eso, para automatizar la instalación de dependencias, crearemos un archivo JSON donde iremos definiendo todo lo que usemos. El archivo se llamará package.json y su estructura básica será la siguiente:

{
    "name": "Hello_Node",
    "description": "This is our project for the tutorials",
    "version": "0.0.1",
    "private": true,
    "repository":
    {
        "type": "git",
        "url": "https://timbergus@bitbucket.org/timbergus/hello_node.git"
    },
    "dependencies":
    {
        "express": "latest",
        "jade": "latest"
    },
    "engines":
    {
        "node": "0.10.x",
        "npm": "1.3.x"
    }
}

Los nombres de los campos definen bastante bien sus contenidos, pero por si acaso esta es la lista de los campos mínimos que debería tener nuestro archivo.

name: el nombre que tendrá nuestro proyecto, en este caso “Hello_Node”.
description: una breve descripción de lo que hace nuestro proyecto.
version: la versión de nuestro proyecto.
private: nos indica si nuestro proyecto es privado o no. Esto es muy importante ya que si es “true”, el gestor de paquetes de node “npm” se negará a publicarlo. Esto evita que colguemos proyectos privados por accidente.
repository: en él indicamos que tipo de repositorio alberga nuestro proyecto (type) y donde está (url). Si cuando instalamos paquetes oficiales salen warnings, suele ser por que falta esta entrada.
dependencies: aquí indicamos que dependencias tiene nuestro proyecto. Yo por defecto pongo “latest” para que “npm” coja las últimas versiones que hay, pero también se pueden especificar versiones concretas por ejemplo así: “1.3.*”.
engines: sirve para especificar, por ejemplo, las versiones de “node” y “npm” que van a ser usadas en el servidor, ya que no todos los servidores tienen por que tener las últimas versiones instaladas.
Una vez creado el archivo, lo pondremos en nuestra carpeta de proyecto, y con esto, tendremos configurado nuestro proyecto como debe ser. Ahora sólo tendremos que instalar las dependencias. Para ver que funciona nuestro package.json , primero borraremos la carpeta “node_modules” de nuestro proyecto para ver que se vuelve a crear con todas las dependencias, y que todo sigue funcionando igual.

Ahora, para instalar las dependencias sólo tendremos que ir a nuestra carpeta de proyecto desde un terminal, y escribir lo siguiente:

npm install

O si tienes problemas de permisos.

sudo npm install

Y si no nos da ningún error raro, que no lo dará, ya tendremos todos nuestras dependencias instaladas y el proyecto preparado para trabajar!