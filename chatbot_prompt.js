function chatbot(input) {
    let output = "";
    input = input.toLowerCase();
    if (input.includes("hello") || input.includes("hi")) {
      output = "Hello👋, nice to meet you!";
    } else if (input.includes("how are you")) {
      output = "I'm doing fine, thank you for asking.😊";
    } 
    else if (input.includes("what projects have you worked on")) {
      output='🤖 <h2>Here are some of my key projects</h2><br>1️⃣ Portfolio Resume – A responsive website showcasing my skills and experience.<br>2️⃣ Chatbot Integration – An interactive chatbot built using JavaScript.'
    }
    else if (input.includes("what is your name")) {
      output = "My name is SAEE, I'm a chatbot.🤖";
    } else if (input.includes("what can you do")) {
      output = "I can chat with you and answer some simple questions.";
    } else if (input.includes("tell me a joke")) {
      output = "Why did the chicken go to the seance? To get to the other side.";
    }
    else if (input.includes("what technologies did you use in your projects")){
      output="✅ HTML - For structuring the website.<br>✅ CSS - For styling and layout design.<br>✅ JavaScript - To add interactivity and dynamic elements.<br>✅ Bootstrap - For responsive design and UI components."
    }
    else if (input.includes("tell me about yourself")) {
        output = "Hi there! I'm sai, a passionate Computer Science student with expertise in HTML, CSS, JavaScript, and Bootstrap 📝. I have developed a portfolio resume that showcases my skills, projects, and experience. Feel free to ask me about my work!";
      }
      else if (input.includes("what are your career goals")){
        output='I am a Computer Science (CSM) with a focus on AI and Machine Learning 🤖. My goal is to become an <b> AI Engineer</b> specializing in<b> Generative AI and NLP applications</b>.'
      }
      else if (input.includes("can you guide me through your portfolio")) {
        output ="A basic portfolio using HTML, CSS, and JavaScript would typically include a header with navigation, a hero section showcasing your introduction and key skills, a portfolio grid to display your projects, an about me section, a contact form, and potentially a smooth scrolling feature using JavaScript."
    
    }
    else if (input.includes("who is prabhas")) {
      output = "Uppalapati Venkata Suryanarayana Prabhas Raju, known mononymously as Prabhas, is an Indian actor who predominantly works in Telugu cinema. He is one of the highest-paid actors in Indian cinema and has been featured in Forbes India's Celebrity 100 list since 2015."}
     else if (input.includes("who is mahesh babu")) {
   output = "Ghattamaneni Mahesh Babu is an Indian actor and film producer who works in Telugu cinema. He is one of the highest-paid actors in Indian cinema and has featured in Forbes India's Celebrity 100 list since 2012. Referred to in the media as <b>Superstar</b>, he has appeared in more than 25 films.";
   }
   else if (input.includes("please give me a roadmap for a full-stack  developer")) {
    output="<p>Since you're already familiar with HTML, CSS, JavaScript, and you're interested in front-end development, a Full-Stack Developer roadmap is a great next step.<br>Here’s a structured 6-month roadmap for becoming a Full-Stack Web Developer covering both front-end and back-end with React.js, Node.js, Express.js, and SQL/NoSQL databases.<br><br><hr><br></p><h3>🛠 Full-Stack Developer Roadmap (3 Months Plan)</h3><br><address>(Assumes 15-20 hours per week of learning & practice)</address><br><br><hr><br><h4>📌 Phase 1: Fundamentals (1 Month)</h4><br><b>1. Front-End Basics </b><h6>(If not already covered)</h6><br>✅ HTML (Forms, Semantic Tags, Accessibility)<br>✅ CSS (Flexbox, Grid, Responsive Design)<br>✅ JavaScript (DOM Manipulation, ES6+, Async/Await, Fetch API)<br>✅ Git & GitHub (Version Control)<br><b>2. UI Frameworks & Libraries</b><br>✅ CSS Frameworks: Tailwind CSS / Bootstrap<br>✅ CSS Preprocessors: SASS / SCSS (Optional)<br><br><hr><br><h4>📌 Phase 2: Front-End Development (2 Month)</h4><br><b>3. React.js (Modern Frontend Framework)</b><br>✅  JSX & Components<br>✅ Props, State, Lifecycle Methods<br>✅ React Hooks (useState, useEffect, useContext)<br>✅API Integration (RESTful APIs & Axios)<br><br><b>4. UI Enhancements</b><br>✅ Material UI / Shadcn / Tailwind Components<br>✅ Animations (Framer Motion, GSAP)<br><b>5. Deployment of Frontend</b><br>✅ Vercel, Netlify (Hosting React Apps)<br><br><hr><h4>📌 Phase 2: Front-End Development (3 Month)</h4><b><br>3. Node.js & Express.js Basics<br></b><br>✅ Node.js (npm, Modules, Event Loop)<br>✅ Express.js (Middleware, Routing)<br>✅ ORM (Prisma for SQL / Mongoose for MongoDB)<br><br><hr><br><h3>Full-Stack Development & Projects</h3><br><h6>Full-Stack Integration</h6><br>✅ Connecting Frontend (React) with Backend (Express.js, MongoDB/PostgreSQL)<br>✅ Connecting Frontend (React) with Backend (Express.js, MongoDB/PostgreSQL)<br><br><hr><br><h2>🎯 Key Tools & Technologies</h2><br>🔹<b>Frontend:</b>React.js, Tailwind CSS, Redux Toolkit<br><b>🔹Backend:</b> Node.js, Express.js<br>🔹<b>Database:</b>MongoDB (NoSQL) OR PostgreSQL (SQL)<br>🔹<b>DevOps & Deployment:</b> GitHub, Vercel, Render, Railway<br>"

   }
    else {
      output = "Sorry, I don't understand that. Please try something else.<br>This model is trained for only limited prompts only!";
    }
    return output;
  }

