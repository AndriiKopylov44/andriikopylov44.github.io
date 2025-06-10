function toggleFold() {
      const content = document.getElementById("foldableText");
      content.style.display = content.style.display === "block" || content.style.display === "" ? "none" : "block";
    }