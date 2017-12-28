var ToDoList = function(container){
  this.container = container;
  this.init();
  this.addBtn.addEventListener('click', this.addToList.bind(this));
  this.ulEl.addEventListener('click', this.toggleCheckbox.bind(this));
};



ToDoList.prototype.init = function() {
  this.inputTxt = document.createElement('input');
  this.inputTxt.type = 'text';
  this.inputTxt.setAttribute('name','doText');

  this.addBtn = document.createElement('a');
  this.addBtn.href = '#';
  this.addBtn.innerText = 'Add'; 

  this.ulEl = document.getElementById('list');

  this.container.insertBefore(this.inputTxt,this.ulEl);
  this.container.insertBefore(this.addBtn,this.ulEl); 
};


ToDoList.prototype.addToList = function(){
  if(!this.inputTxt.value){
    alert('Поле не заполнено!');
    return;
  }

  this.ulEl.appendChild(this.getNewNode(this.inputTxt.value));
  this.inputTxt.value = '';
} 

ToDoList.prototype.getNewNode = function(text){
    var liEl = document.createElement('li');
    liEl.innerText = text;
    var input = document.createElement('input');
    input.type = 'checkbox';
    liEl.insertBefore(input, liEl.firstChild);
    
    return liEl;
}


ToDoList.prototype.toggleCheckbox = function(e){
  var target = e.target;
  if (target.type = 'checkbox'){
    target.parentElement.classList.toggle('chkelem');
  }
}