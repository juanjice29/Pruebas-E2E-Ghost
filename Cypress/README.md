<h1>Pruebas-Ghost-E2E-Cypress</h1>
<p>En este repositorio están los 20 escenarios y pruebas creadas con la herramienta cypress para la aplicación bajo pruebas ghost.</p>

<h2>Requisitos:</h2>
<ul>
<li>Cypress</li>
<li>Node</li>
<li>Ghost 3.41.1</li>
<li>Ghost 4.44.0 para ejecutar las pruebas de regresion</li>  
<li>Tener un usuario registrado en el aplicativo ghost</li>
</ul>
<h2>Pasos para correr los escenarios de pruebas:</h2>
<ul>
<li>Clonar el repositorio en su equipo local, git clone https://github.com/juanjice29/Pruebas-E2E-Ghost/tree/main</li>
<li>Ejecutar <b>npm install</b>, esto instalara dos librerias necesarias para correr los escenarios ,que son faker,mochawesome y cypress.En caso de no funcionar la instalacion de cypres ejecutar npm install -g cypress.</li>
<li>Se deben cambiar las variables globales para que funcionen correctamente las pruebas, en la ruta <b>/cypress/environment/credentials.js</b> existen 3 variables, <b>email : </b> remplazela por el email que tiene registrado localmente en ghost,<b>password : </b> remplazela por la contraseña de su cuenta local(Es decir, primero debe crearse una cuenta) en ghost y finalmente 
<b>baseUrl : </b> es necesario remplazar el puerto por el cual esta escuchando la aplicacion.</li>
<li>Adicionalmente existen estas mismas tres variables para correr los escenarios de la Version 4.44.0 de ghost.</li>
Aqui hay dos opciones para abrir cypress y ejecturar las pruebas:
<li>Ejecutar cada funcionalidad una a una con <b>cypress open</b>, en la interfaz de cypress se debe seleccionar la carpeta de Cypress y luego la opcion E2E TEsting,allie staran todos los archivos <b>.spec </b> de las pruebas</li>
<li>Para gener un reporte y correr todas las funcionalidad se debe ejecutar <b>cypress run --headless --reporter mochawesome </b></li>
<li>Ejecutar este comando, generara varios archivos :<ul>
    <li>primero si existio algun test donde los asserts no fueron existosos, en la carpeta de <b>screenshots/**funcionalidad del fallo**</b>, se guardaran los screenshots.</li>
    <li>En la carpeta de <b>/videos</b>, quedan los videos de cada funcionalidad.</li>    
</ul> </li>
</ul>
<h2>Pasos para correr las pruebas de regresión visual:</h2>
Para ejcutar las pruebas de resgresion con resemble.js es necesario ubicarse dentro de la carpeta <b>Cypress/cypress</b> y ejecutar el comando node <b>resemble_report.js</b> . Esto generara un reporte en la carpeta
<b>./results/Resemble_${fecha y hora de ejecuccion}</b> , dentro de estos archivos se encuentran varios archivos <b> .html</b> , puede abrir cualquiera de ellos para visualizar los reportes, ya que dentro de cada archivo existe una barra de navegacion en la cual ordenamos las regresiones visuales de cada funcionalidad/escenario.

![image](https://github.com/juanjice29/Pruebas-E2E-Ghost/assets/123905839/a76e7f66-92b6-48e8-b262-9a12ddbcff3f)

Cada archivo html contiene los diferentes screenshots que se tomaron en cada escenario.

<h2>Instrucciones para correr pruebas con pool de datos aleatorios, pseudo aleatorios y a priori</h2>
<p>En la carpeta e2e dentro de cypress, se distribuyen las pruebas de las 5 funcionalidades probadas</p>
<p>Cada funcionalidad está conformada por 4 archivos:</p>
<ul>
    <li>1. esc_aleatorios.spec.cy.js en donde se listan parte de los escenarios con datos aleatorios</li>
    <li>2. esc_apriori.spec.cy.js en donde se listan parte de los escenarios con datos a priori</li>
    <li>3. Esc_pseudo_aleatorios.spec.cy.js en donde se listan parte de los escenarios con datos pseudo aleatorios</li>
   
</ul>
<p>Dentro de cada archivo .spec.cy.js se encuentran todos los escenarios relacionados con la funcionalidad, la nomenclatura que se opto para nombrar estos escenarios fue la siguiente:</p>
<p>Nombramos la funcion seguido de un guion y ponemos el tipo de estrategia de generacion de datos, la nomenclatura es AP,D,A para las estrategias a priori,dinamico,aleatorio respectivamente, por ultimo seguido de otro guion ponemos el escenario <Funcion>-<Estrategia>-<Escenario>, por ejemplo si estamos probando los escenarios dinamicos de la funcionalidad 1, una nomenclatura del nombre del escenario seria <b>F1-AP-E5</b></p>
<p> Para correr las funcionalidades con los tres tipos de estrategias de generacion de datos, puede usar los comandos definidos para correr las pruebas f1 ejecutarán todos los escenarios de los 120 requeridos de la funcionalidad 1 y así sucesivamente</p>
<ul>
    <li>npm run solo:f1</li>
    <li>npm run solo:f2</li>
    <li>npm run solo:f3</li>
    <li>npm run solo:f4</li>
    <li>npm run solo:f5</li>
</ul>

<p>También está el comando para ejecutar las 5 funcionalidades</p>
<p>npm run all:data_strategy</p>

<p>Se utilizaron 120 escenarios, que están listados en la wiki de este proyecto, con la descripción de cómo se relacionaron los data pools.</p>
<p>Para mas informacion de los escenarios y estrategias, consultar la wiki.</p>
