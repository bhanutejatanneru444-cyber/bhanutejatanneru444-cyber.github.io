// Portfolio JavaScript

console.log("Portfolio website loaded successfully!");

// Simple scroll effect
document.querySelectorAll('a[href^="#"]').forEach(link => {

```
link.addEventListener("click", function (event) {

    event.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
        target.scrollIntoView({
            behavior: "smooth"
        });
    }

});
```

});
