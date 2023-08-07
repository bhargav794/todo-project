<ul id="todo-list">
  <li data-index="0">Task 1 <button class="edit">Edit</button></li>
  <li data-index="1">Task 2 <button class="edit">Edit</button></li>
  <li data-index="2">Task 3 <button class="edit">Edit</button></li>
</ul>

<script>
  const todoList = document.getElementById('todo-list');

  todoList.addEventListener('click', function(event) {
    const target = event.target;

    if (target.classList.contains('edit')) {
      const li = target.parentNode;
      const index = li.dataset.index;//impotatant line
      const text = li.textContent.trim();

      // create an input element with the current text as its value
      const input = document.createElement('input');
      input.type = 'text';
      input.value = text;

      // create "yes" and "no" buttons
      const yesButton = document.createElement('button');
      yesButton.textContent = 'Yes';

      const noButton = document.createElement('button');
      noButton.textContent = 'No';

      // replace the li element with the input and buttons
      li.parentNode.replaceChild(input, li);
      input.insertAdjacentElement('afterend', yesButton);
      yesButton.insertAdjacentElement('afterend', noButton);

      // add event listeners to the buttons
      yesButton.addEventListener('click', function() {
        const newText = input.value;
        const newLi = document.createElement('li');
        newLi.textContent = newText;
        newLi.dataset.index = index; // set the index of the edited item
        todoList.replaceChild(newLi, input);
        newLi.insertAdjacentElement('beforebegin', yesButton);
        yesButton.insertAdjacentElement('afterend', noButton);
      });

      noButton.addEventListener('click', function() {
        todoList.replaceChild(li, input);
        li.insertAdjacentElement('beforeend', target);
      });
    }
  });
</script>
