<h1>Pruebas-Ghost-E2E-Cypress</h1>
<p>En este repositorio están los 20 escenarios y pruebas creadas con la herramienta cypress para la aplicación bajo pruebas ghost.</p>

<h2>Requisitos:</h2>
<ul>
<li>Cypress</li>
<li>Node</li>
<li>Ghost 3.41.1</li>
<li>Tener un usuario registrado en el aplicativo ghost</li>
</ul>
<h2>Pasos para correr los escenarios de pruebas:</h2>
<ul>
<li>Clonar el repositorio en su equipo local, git clone https://github.com/juanjice29/Pruebas-Ghost-E2E-Cypress.git</li>
<li>Ejecutar <b>npm install</b>, esto instalara dos librerias necesarias para correr los escenarios ,que son faker y mochawesome.</li>
<li>Se deben cambiar las variables globales para que funcionen correctamente las pruebas, en la ruta <b>/cypress/environment/credentials.js</b> existen 3 variables, <b>email : </b> remplazela por el email que tiene registrado localmente en ghost,<b>password : </b> remplazela por la contraseña de su cuenta local en ghost y finalmente 
<b>baseUrl : </b> es necesario remplazar el puerto por el cual esta escuchando la aplicacion.</li>
<li>Adicionalmente existen estas mismas tres variables para correr los escenarios de la Version 4 de ghost.</li>
Aqui hay dos opciones para abrir cypress y ejecturar las pruebas:
<li>Ejecutar cada funcionalidad una a una con <b>cypress open</b>, en la interfaz de cypress se debe seleccionar la carpeta de Cypress y luego la opcion E2E TEsting,allie staran todos los archivos <b>.spec </b> de las pruebas</li>
<li>Para gener un reporte y correr todas las funcionalidad se debe ejecutar <b>cypress run --headless --reporter mochawesome </b></li>
<li>Ejecutar este comando, generara varios archivos :<ul>
    <li>primero si existio algun test donde los asserts no fueron existosos, en la carpeta de <b>screenshots/**funcionalidad del fallo**</b>, se guardaran los screenshots.</li>
    <li>En la carpeta de <b>/videos</b>, quedan los videos de cada funcionalidad.</li>    
</ul> </li>
</ul>
<h2>Pasos para correr las pruebas de regresión visual:</h2>

<h2>Funciones y escenarios</h2>
<ul>
    <li>Hacer Login
        <ul>
            <li>Con mi usuario y contraseña de ghost quiero hacer login en la pagina.</li>
            <li>Con mi usuario y contraseña de ghost quiero hacer login en la pagina utilizando una contraseña incorrecta.</li>
            <li>Con mi usuario y contraseña de ghost quiero hacer login en la pagina haciendo inyeccion de codigo</li>
        </ul>
    <li>
     <li>Crear un Tag
        <ul>
            <li>Con mi usuario de ghost creo un Tag</li>
            <li>Con mi usuario de ghost creo un Tag sin titulo y luego lo corrijo</li>
            <li>Con mi usuario de ghost creo un Tag con un nombre que ya exista</li>
         </ul>
    <li>
     <li>Enviar e-mail de invitacion al staff 
        <ul>
            <li>Con mi usuario de ghost quiero enviar una invitacion a un email</li>
            <li>Con mi usuario de ghost quiero enviar una invitacion a un email con email invalido</li>
            <li>Con mi usuario de ghost quiero enviar una invitacion a un email ya existente en las invitaciones</li>
            <li>Con mi usuario de ghost quiero enviar una invitacion a un email con un rol dirente</li>
         </ul>
    <li>
     <li>Crear una página
        <ul>
            <li>Con mi usuario de ghost quiero crear una página</li>
            <li>Con mi usuario de ghost quiero crear una página sin descripción</li>
            <li>Con mi usuario de ghost quiero crear una página sin título</li>
            <li>Con mi usuario de ghost quiero crear un post y asignarla a un tag</li>
            <li>Con mi usuario de ghost quiero crear una página y asignarla a un tag, usuario y extracto</li>
            <li>Con mi usuario de ghost quiero crear una página y programarla para que se publique en una fecha específica</li>
         </ul>
    <li>
     <li>Crear un Post
        <ul>
            <li>Con mi usuario de ghost quiero crear un post</li>
            <li>Con mi usuario de ghost quiero crear un post sin descripción</li>
            <li>Con mi usuario de ghost quiero crear un post sin título</li>
            <li>Con mi usuario de ghost quiero crear un post y asignarlo a un tag</li>
         </ul>
    <li>
</ul>

