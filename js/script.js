/*
Consegna:
Data una lista della spesa (memorizzata in un array),
 stampare sulla pagina (anche brutalmente, basta che si vedano) 
 gli elementi della lista individualmente con un ciclo while.
*/


/*
-creo array
-ciclo while per stampare 
*/

const shoppingList =['carote','patate','pomodori','cipolle','finocchi','zucchine'];

let index=0;

while(shoppingList.length != index){
    document.writeln(shoppingList[index] + '<br>')
    console.log(shoppingList[index])
    index++
}