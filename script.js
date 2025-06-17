document.addEventListener("DOMContentLoaded", function () {
    // GSAP animation for scrolling code effect
    const codeSnippet = document.getElementById("code-snippet");
    const codeLines = [
        "def hello_world():",
        "    print('Hello, World!')",
        "hello_world()",
        "",
        "// Some JavaScript Code",
        "function greet() {",
        "    console.log('Hello Developer!');",
        "}",
        "greet();"
    ];

    let lineIndex = 0;
    function displayCode() {
        if (lineIndex < codeLines.length) {
            codeSnippet.textContent += codeLines[lineIndex] + "\n";
            lineIndex++;
            setTimeout(displayCode, 500);
        }
    }
    displayCode();

    // GSAP Scroll Animation
    gsap.from(".laptop", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out"
    });

    // Image Lock Effect (Inspired by D. E. Shaw)
    const projectImages = document.querySelectorAll(".project-image");
    let viewedImages = 0;

    projectImages.forEach((img) => {
        img.addEventListener("mouseenter", () => {
            if (!img.classList.contains("viewed")) {
                img.classList.add("viewed");
                img.style.opacity = "1";
                viewedImages++;
            }
        });
    });

    document.addEventListener("scroll", () => {
        if (viewedImages < projectImages.length) {
            window.scrollTo(0, 0);
        }
    });
});
