document.getElementById("magicButton").addEventListener("click", function() {
    this.textContent = "Nature is Amazing!";
    this.style.backgroundColor = "#28a745";
});

document.getElementById("magicButton").addEventListener("dblclick", function() {
    alert("Double Click: You've unlocked a wildlife secret!");
});

document.getElementById("gallery").addEventListener("mouseover", function() {
    this.style.border = "2px solid green";
});

document.getElementById("gallery").addEventListener("mouseout", function() {
    this.style.border = "none";
});

document.getElementById("email").addEventListener("input", function() {
    let feedback = document.getElementById("feedback");
    if (this.value.includes("@")) {
        feedback.textContent = "✔ Valid Email";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "❌ Invalid Email";
        feedback.style.color = "red";
    }
});

document.getElementById("password").addEventListener("keypress", function() {
    if (this.value.length >= 8) {
        this.style.border = "2px solid green";
    } else {
        this.style.border = "2px solid red";
    }
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thanks for reaching out! We'll get back to you soon.");
});