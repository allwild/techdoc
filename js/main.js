function darkMode () {
    var brigthnessModeButton = document.getElementById("darkmode-btn");
    var docBody = document.body;
    var navBar = document.getElementById("navbar");
    var navLinks = document.getElementsByClassName("nav-link");
    var codes = document.getElementsByTagName("code");
    var warnings = document.getElementsByClassName("warning")
    var tables = document.getElementsByTagName("table");
    var tabledatas = document.getElementsByTagName("td");

    /* Sets docbody navbar, navLinks and code snippets to dark bg with white font color,and presets the button itself to lightmode */
    docBody.className = "dark-mode";
    navBar.className = "grey-mode";
    Array.from(navLinks).forEach(element => {element.className += " grey-mode";});
    Array.from(codes).forEach(element => element.className += " grey-mode");
    Array.from(warnings).forEach(element => element.className += " warning-dark");
    brigthnessModeButton.className = brigthnessModeButton.className.replace(/\s*fa-moon/, " fa-lightbulb")
    brigthnessModeButton.setAttribute("onclick", "lightMode()")
    Array.from(tables).forEach(element => element.className += " table-border-darkmode");
    Array.from(tabledatas).forEach(element => element.className += " border-darkmode");
}

function lightMode() {
    var brigthnessModeButton = document.getElementById("darkmode-btn");
    var docBody = document.body;
    var navBar = document.getElementById("navbar");
    var navLinks = document.getElementsByClassName("nav-link");
    var codes = document.getElementsByTagName("code");
    var warnings = document.getElementsByClassName("warning");
    var tables = document.getElementsByTagName("table");
    var tabledatas = document.getElementsByTagName("td");
    
    /* Sets docbody, navbar, navLinks and code snippets back to original CSS setting,and presets the button itself to dark mode */
    docBody.className = docBody.className.replace(/\s*dark-mode/, "");
    navBar.className = navBar.className.replace(/\s*grey-mode/, "");
    Array.from(navLinks).forEach(element => {element.className = element.className.replace(/\s*grey-mode/, "")});
    Array.from(codes).forEach(element => {element.className = element.className.replace(/\s*grey-mode/, "")});
    Array.from(warnings).forEach(element => {element.className = element.className.replace(/\s*warning-dark/, "")});
    brigthnessModeButton.className = brigthnessModeButton.className.replace(/\s*fa-lightbulb/, " fa-moon")
    brigthnessModeButton.setAttribute("onclick", "darkMode()")
    Array.from(tables).forEach(element => {element.className = element.className.replace(/\s*table-border-darkmode/, "")});
    Array.from(tabledatas).forEach(element => {element.className = element.className.replace(/\s*border-darkmode/, "")});
}

function addIconToWarning () {
    /* Adds a warning icon to all warning divs*/
    var warnings = document.getElementsByClassName("warning");
    
    Array.from(warnings).forEach(element => {
        var newElement = document.createElement("i");
        newElement.className = "fa-solid fa-triangle-exclamation fa-xl used-exclamation"
        element.insertBefore(newElement, element.firstChild)
    });
} 

addIconToWarning()