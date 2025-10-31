document.addEventListener("DOMContentLoaded", function() {
const metaDescription = document.querySelector("meta[name='description']");
if (metaDescription && metaDescription.content.length > 150) {
metaDescription.content = metaDescription.content.slice(0, 150);
}
}); 