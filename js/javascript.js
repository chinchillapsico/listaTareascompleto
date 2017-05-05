var arreglo = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  }];


var resultado = [];
var contTarea = document.getElementsByClassName("listaTareas")[0]; /* agrega al div vacío "listaTareas" las nuevas tareas.*/

 for (i=0; i < arreglo.length;i++) /*recorre el arreglo principal que contiene json, agrega a la variable resultado (los guarda)*/
{
 resultado.push(arreglo[i])
}

resultado.forEach(function(el){ /*imprime el contenido de la variable arreglo y lo del contador de tareas (nuevas tareas añadidas)*/
  contTarea.innerHTML += "<li>" + el.title + "</li>";
  });
  

  function agregarTarea(){ /*botón: función encargada ade añadir las nuevas tareas en forma de lista.*/
  	var input = document.getElementById("add-tarea");
  	contTarea.innerHTML += "<li>" + input.value + "</li>";

  	function nuevaTarea(userId, id, title, completed){ /*constructor: transforma las nuevas tareas en objetos(como el json que nos entregaron)*/
    this.userId = userId,
    this.id = id,
    this.title = title,
    this.completed = completed;
  };

 var addTarea = new nuevaTarea(1, arreglo.length, input.value, false); /*está relacionado con la función nuevaTarea, añade la nueva tarea como objeto en la variable arreglo, lo podemos ver en consola.*/
  arreglo.push(addTarea);
  }
