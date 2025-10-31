document.addEventListener("DOMContentLoaded", (): void => {
const titleTag = document.querySelector("title");
if (titleTag && titleTag.textContent) {
titleTag.textContent = titleTag.textContent.trim();
}
}); 