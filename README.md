# To-Do-LIST
Basic To-Do List  website using HTML, CSS, and JavaScript:

The HTML code sets up the basic structure of the website, including a header, a form for adding tasks, and an unordered list to display the tasks.

The CSS code styles the website, including the font, colors, and layout. It is used to give a good presentation and user interface to the website.

The JavaScript code is used to add functionality to the website. It uses the Document Object Model (DOM) API to access and manipulate the elements on the webpage.

When the "Add Task" button is clicked, the JavaScript code first checks if the task input is empty. If it is, an alert is displayed asking the user to enter a task. If there is a task, the code creates a new list item element and sets its inner HTML to the value of the task input. This creates a new task element with the task description on the task list.

The **taskInput** variable is used to access the task input element, the **addTaskBtn** variable is used to access the "Add Task" button element, and the **taskList** variable is used to access the task list element.

The **addEventListener** method is used to attach an event listener to the "Add Task" button. The event listener is a function that is called when the button is clicked.

When the button is clicked, the function gets the value of the task input and assigns it to the **taskValue** variable. If the value is empty, an alert is displayed. If there is a value, the function creates a new list item element and assigns it to the **task** variable. The function then sets the class of the task element to "task" and its inner HTML to the value of the task input. Finally, the function appends the task element to the task list.

Please note that this is a basic example, you can add many functionalities, and make it more interactive with other libraries and frameworks like Angular, React, Vue, etc.
