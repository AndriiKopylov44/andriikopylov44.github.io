function toggleFold() {
      const content = document.getElementById("foldableText");
      content.style.display = content.style.display === "none" || content.style.display === "" ? "block" : "none";
    }