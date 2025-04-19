// script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const task = input.value.trim();
      if (task === '') return;
  
      const li = document.createElement('li');
      li.textContent = task;
  
    /*   li.addEventListener('click', function() {
        li.classList.toggle('completed');
      });
  
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'X';
      removeBtn.className = 'remove';
      removeBtn.addEventListener('click', function(e) {
        e.stopPropagation(); // evita che si attivi anche il click sul li
        li.remove();
      });
   */
      //li.appendChild(removeBtn);
      list.appendChild(li);
      input.value = '';
    });
  });
  