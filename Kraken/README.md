# Pruebas-Ghost-E2E-Kraken-
<p>En este repositorio están los 20 escenarios y pruebas creadas con la herramienta kraken para la aplicación bajo pruebas ghost</p>

<h2>Requisitos:</h2>
<ul>
<li>Cypress</li>
<li>Node</li>
<li>Ghost 3.41.1</li>
<li>Tener un usuario registrado en el aplicativo ghost</li>
</ul>
<h2>Pasos para correr los escenarios de pruebas:</h2>
<ul>
<li>Clonar el repositorio en su equipo local, git clone https://github.com/juanjice29/Pruebas-Ghost-E2E-Kraken-.git</li>
<li>Ejecutar <b>npm install kraken-node -g</b>, esto instalara dos librerias necesarias para correr los escenarios con kraken.</li>
<li>Ejecutar <b>npm install kraken-node</b> .</li>

<li>Ejecutar <b>npm install -g appium</b> .</li>

<li>Revisar la version de cucumber que utiliza kraken(7.2.1) 
 y ejecutar <b>npm install -g @cucumber/cucumber@7.2.1</b> y
 <b> npm install @cucumber/cucumber@7.2.1</b>
 </li>

 <li>Arrastrar una funcionalidad .feature de la carpeta <b>/all_features</b> a la carpeta <b>/features</b>
 </li>

  <li>Ejecutar el comando<b>npx kraken-node run</b> , esto ejecutar el escenario correspondiente.
 </li>
 </ul>
 
 <h2>Funciones y escenarios</h2>
<ul>
    <li>Hacer Login
        <ul>
            <li>Con mi usuario y contraseña de ghost quiero hacer login en la pagina.</li>
            <li>Con mi usuario y contraseña de ghost quiero hacer login en la pagina utilizando una contraseña incorrecta.</li>
            <li>Con mi usuario y contraseña de ghost quiero hacer login en la pagina haciendo inyeccion de codigo</li>
        </ul>
    </li>
     <li>Crear un Tag
        <ul>
            <li>Con mi usuario de ghost creo un Tag</li>
            <li>Con mi usuario de ghost creo un Tag sin titulo y luego lo corrijo</li>
            <li>Con mi usuario de ghost creo un Tag con un nombre que ya exista</li>
         </ul>
    </li>
     <li>Enviar e-mail de invitacion al staff 
        <ul>
            <li>Con mi usuario de ghost quiero enviar una invitacion a un email</li>
            <li>Con mi usuario de ghost quiero enviar una invitacion a un email con email invalido</li>
            <li>Con mi usuario de ghost quiero enviar una invitacion a un email ya existente en las invitaciones</li>
            <li>Con mi usuario de ghost quiero enviar una invitacion a un email con un rol dirente</li>
         </ul>
    </li>
     <li>Crear una página
        <ul>
            <li>Con mi usuario de ghost quiero crear una página</li>
            <li>Con mi usuario de ghost quiero crear una página sin descripción</li>
            <li>Con mi usuario de ghost quiero crear una página sin título</li>
            <li>Con mi usuario de ghost quiero crear un post y asignarla a un tag</li>
            <li>Con mi usuario de ghost quiero crear una página y asignarla a un tag, usuario y extracto</li>
            <li>Con mi usuario de ghost quiero crear una página y programarla para que se publique en una fecha específica</li>
         </ul>
    </li>
     <li>Crear un Post
        <ul>
            <li>Con mi usuario de ghost quiero crear un post</li>
            <li>Con mi usuario de ghost quiero crear un post sin descripción</li>
            <li>Con mi usuario de ghost quiero crear un post sin título</li>
            <li>Con mi usuario de ghost quiero crear un post y asignarlo a un tag</li>
         </ul>
    </li>
</ul>
