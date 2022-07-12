const todo =  document.getElementById('todo')
 const input = document.getElementById('input')
 const addEvent = document.getElementById('btn')
 const todoListContainer = document.getElementById('Todo-container')
 const title =  document.getElementById('title')
 const para =  document.getElementById('slogan')
 let todoList = document.createElement('div')
    todoList.setAttribute('id','todolist')   
 addEvent.addEventListener('click',addToList)
 
 // update the Todolist container with daily list 
 function addToList(){
  if(input.value != ''){
    let listEL = document.createElement('div')
   listEL.setAttribute('id','Event')
   let pEL = document.createElement('p')
   pEL.innerHTML = input.value
   let button = document.createElement('button')
   button.innerHTML = 'remove'
   button.setAttribute('id','btn2')
   listEL.append(pEL,button)
   todoList.append(listEL)
   todoListContainer.append(todoList)
    input.value=''
  }
  /*
  else{
    todoListContainer.innerHTML= ''
    todoListContainer.append(title)
    todoListContainer.append(para)
    todoListContainer.append(todo);
    todoListContainer.append(todoList)
  }
  */
  // to delete an Event from the todolist
  const deleteBtns = document.querySelectorAll('#btn2')
deleteBtns.forEach((deleteBtn)=>{
  deleteBtn.addEventListener('click', toDeleteEvent)
  function toDeleteEvent(){
    deleteBtn.parentNode.remove()
   if(todoList.childNodes.length===0){
      todoList.remove()      
    }
  }
})
}
