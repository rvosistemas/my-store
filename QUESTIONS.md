# ¿Que se requiere para iniciar el proyecto? (indique lista de archivos mínimos y 
# dependencias)

En este caso se requiere tener instalado node.js y angular cli, para poder ejecutar el proyecto.
es opcional la parte de docker que esta configurada en el proyecto.
y para este proyecto en particular se requiere tener instalado fontawesome para poder visualizar los iconos
y sweetalert2 para poder visualizar los mensajes de alerta mas amigables.


# ¿Como sería la estructura del componente? Indique estructura general de métodos y partes 
# del componente en Angular

El componente esta dividido en 3 partes, el html, el css y el ts.
angular con el comando: `ng g c login` crea el componente con estas 3 partes.

en el html se crea un formulario con 2 campos, uno para el nombre de usuario y otro con una lista
aleatoria de iconos para que el usuario seleccione 3 de ellos y pueda ingresar a la aplicación.
tiene un apartado de mensajes que le indican si falta por seleccionar iconos o ya selecciono los 3, 
y un boton para enviar el formulario.

en ts se crean las variables que se usaran en el componente, se importan los modulos necesarios,

se cargan los iconos de fontawesome en el constructor, se crea un metodo para validar el formulario, 
se crea un metodo enviar el nombre de los iconos de manera aleatoria, se crea un metodo para validar tanto el 
nombre de usuario como los iconos seleccionados, y se crea un metodo para mostrar un mensaje de alerta.

tambien se agrega el mock para probar si el login funciona correctamente.

y la funcionalidad de los mensajes para guiar al usuario en el proceso de login.

# ¿Como diseñaría el template para lograr que los íconos se muestren siempre en un orden 
# aleatorio?

en el template se usa un ngFor para recorrer la lista de iconos y mostrarlos en pantalla

# ¿Qué usaría para realizar la validación del nombre de usuario? (Indique métodos y 
# componentes de mensajería)

en este caso se creo el metodo ok, pero en un ambito  real usaria el metodo onsubmit para verificar si es un string
y que no este vacio y ya que se cuenta con sweetalert2 se usaria para mostrar los mensajes de alerta.

# ¿Que requiere modificar si se desea que la lista de íconos aparezca en una ventana modal? 
# (indique componentes requeridos y métodos)

tendria que crear otro componente modal y luego llamarlo desde el componente login.
para crear el modal angular tiene muchas integraciones con librerias como bootstrap, material, etc.

mover la lista de iconos al modal y validarlos en el componente login, usando servicios o eventos
para poder comunicar los componentes.

# Realice un método Mock que valide al usuario "juan" y la contraseña sean los íconos "Gato, 
# Perro y Conejo"

esta en el archivo login.component.ts en el metodo validarUsuario, pero me todo modificar el icono del conejo
por uno de pescado ya que no se encuentra en la lista de iconos gratis de fontawesome.

# Realice el método de validación (que consuma el mock del punto anterior)
  validateUserMock(username: string, selectedIcons: string[]): boolean {
    return (
      username === 'juan' &&
      this.arraysAreEqual(selectedIcons, ['cat', 'dog', 'fish'])
    );
  }
# Realice la documentación del proyecto, la que considere necesaria.
agregue la mayor información en el readme

# ¿Como se realiza el bundle de la app? 
usando el cli de angular con el comando `ng build --prod` se crea el bundle de la app, esto
crea una carpeta dist con los archivos necesarios para subir a un servidor.
