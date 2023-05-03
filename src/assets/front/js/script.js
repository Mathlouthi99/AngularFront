
/////// execute code when page loads
document.addEventListener("DOMContentLoaded", function(){
    // ... then some code



    /// for demo purpose download link
// Create a chatbox container element
var chatbox_el = document.createElement("div");
chatbox_el.setAttribute("id", "chatbox-container");
chatbox_el.style.position = "fixed";
chatbox_el.style.bottom = "10px";
chatbox_el.style.right = "10px";
chatbox_el.style.zIndex = "100";

// Create a button element for the chatbox
var chatbox_button = document.createElement("button");
chatbox_button.setAttribute("id", "chatbox-button");
chatbox_button.style.fontSize = "13px";
chatbox_button.style.width = "50px";
chatbox_button.style.height = "50px";
chatbox_button.style.borderRadius = "50%";
chatbox_button.style.backgroundColor = "#66615b";
chatbox_button.style.color = "#fff";
chatbox_button.style.border = "none";
chatbox_button.innerHTML = "Chat";

// Create a popup element for the chatbox
var chatbox_popup = document.createElement("div");
chatbox_popup.setAttribute("id", "chatbox-popup");
chatbox_popup.style.display = "none";
chatbox_popup.style.position = "absolute";
chatbox_popup.style.bottom = "60px";
chatbox_popup.style.right = "0";
chatbox_popup.style.zIndex = "101";
chatbox_popup.style.width = "300px";
chatbox_popup.style.height = "400px";
chatbox_popup.style.border = "1px solid #ccc";

// Append the button and popup elements to the container element
chatbox_el.appendChild(chatbox_button);
chatbox_el.appendChild(chatbox_popup);

// Append the container element to the body element
var body_el = document.querySelector("body");
body_el.appendChild(chatbox_el);

// Add a click event listener to the button element to toggle the display of the popup element
chatbox_button.addEventListener("click", function() {
  if (chatbox_popup.style.display === "none") {
    chatbox_popup.style.display = "block";
  } else {
    chatbox_popup.style.display = "none";
  }
});

    // end for demo 

}); 
// end DOMContentLoaded 

  
/////// Enable tooltip of Bootstrap5
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

/////// Prevent closing from click inside dropdown
document.querySelectorAll('.dropdown-menu').forEach(function(element){
    element.addEventListener('click', function (e) {
      e.stopPropagation();
    });
});
// end querySelectorAll


