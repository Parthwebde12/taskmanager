
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
</head>
<body>
  <h1>Task Manager App</h1>

  <h2>Overview</h2>
  <p>
    This is a <strong>multi-page Task Manager application</strong> built with <strong>ReactJS</strong>. 
    The project was created as a <strong>small project to revise and strengthen my React skills</strong>. 
    Users can <strong>add, edit, delete, and categorize tasks</strong>, and all data is stored in the browser using <strong>LocalStorage</strong>. 
    Currently, backend integration is in progress to make it fully dynamic.
  </p>

  <h2>Features</h2>
  <ul>
    <li>Add, edit, and delete tasks</li>
    <li>Categorize tasks (Work, Personal, etc.)</li>
    <li>Set due dates and track status</li>
    <li>Persistent storage with <strong>LocalStorage</strong></li>
    <li>Multi-page navigation using <strong>React Router</strong></li>
    <li>Responsive and clean UI using <strong>CSS</strong></li>
  </ul>

  <h2>Technologies Used</h2>
  <ul>
    <li><strong>ReactJS</strong> – Front-end framework</li>
    <li><strong>React Router</strong> – Multi-page navigation</li>
    <li><strong>LocalStorage</strong> – Browser-based data persistence</li>
    <li><strong>CSS</strong> – Styling and responsive UI</li>
  </ul>

  <h2>How It Was Built</h2>
  <ol>
    <li>
      <strong>Set up the React app</strong>
      <pre><code>npx create-react-app task-manager
cd task-manager
npm start</code></pre>
    </li>
    <li>
      <strong>Created components</strong>
      <ul>
        <li><code>TaskForm.js</code> – Add/Edit tasks</li>
        <li><code>TaskList.js</code> – Display tasks</li>
        <li><code>Navbar.js</code> – Navigation between pages</li>
        <li><code>Login.js</code> – User login simulation</li>
      </ul>
    </li>
    <li>
      <strong>Implemented LocalStorage</strong>
      <ul>
        <li>Save tasks using <code>localStorage.setItem()</code></li>
        <li>Load tasks on page load using <code>localStorage.getItem()</code></li>
      </ul>
    </li>
    <li>
      <strong>Routing</strong> – Used <strong>React Router</strong> for multi-page navigation
    </li>
    <li>
      <strong>UI</strong> – Built with <strong>CSS</strong> for a responsive design
    </li>
  </ol>

  <h2>How to Run</h2>
  <pre><code>git clone &lt;your-repo-url&gt;
cd task-manager
npm install
npm start</code></pre>

  <h2>Future Work</h2>
  <ul>
    <li>Integrate backend for data persistence</li>
    <li>Add user authentication</li>
    <li>Enhance UI with animations and better UX</li>
  </ul>

  <h2>Author</h2>
  <p>Built by <strong>Parth Wakodikar</strong> to practice and strengthen React skills.</p>
</body>
</html>
# taskmanager
