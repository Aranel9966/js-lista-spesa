/*
Consegna:
Data una lista della spesa (memorizzata in un array),
 stampare sulla pagina (anche brutalmente, basta che si vedano) 
 gli elementi della lista individualmente con un ciclo while.
*/


/*
-creo array
-ciclo while per stampare 
-creo un evento per aggiungere elementi nella lista
*/

const shoppingList =['carote','patate','pomodori','cipolle','finocchi','zucchine'];
let addEl =document.getElementById('add');
let listEl=document.getElementById('list');
let containerEl=document.getElementById('container');
let index=0;

containerEl.style.fontSize='30px'
containerEl.style.backgroundColor='#00ff00'

while(shoppingList.length != index){
    
    let stampa = document.createElement('li');

    stampa.innerHTML=(shoppingList[index])

    listEl.append(stampa);


    console.log(shoppingList[index])
    index++
}

addEl.addEventListener('click',function(){
    let newAdd = prompt('cosa vuoi aggiungere?')


    if (newAdd){

        let stampa = document.createElement('li');
        
        stampa.innerHTML=(newAdd)
        
        listEl.append(stampa);
    }
    
})