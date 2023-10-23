const lucas = ['LUCAS']

 /* 
   function getTodosOsCursos() {
    return lucas
   } 
   
   export default getTodosOsCursos
   */

  export default function getTodosOsCursos() {
    return lucas
   }

   function getCursos(i_curso) {
    return cursos[i_curso]
   }

   export {lucas, getCursos}