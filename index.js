// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    // Select the paragraph element with id="text"
    const paragraph = document.getElementById("text");
  
    // Replace the text content of the paragraph
    paragraph.textContent = "This is really cool!";
  });
  
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );
  