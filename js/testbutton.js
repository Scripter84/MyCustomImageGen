// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Create a clickable button element in the game interface
  const button = document.createElement('div');
  button.className = 'button';
  button.textContent = 'TEST!';
  
  // Attach the click event handler
  button.addEventListener('click', function() {
    // Here, you can call any STScript by its name.
    // For example:
    //stCallSTScript('your_script_name');
    
    // You can also access game elements or perform actions here
    console.log('Button clicked and STScript called!');
  });

  const containerDiv = document.getElementById("send_form");
  
  // Add the button to the DOM
  document.body.appendChild(button);
});