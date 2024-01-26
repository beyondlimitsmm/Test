export function handleScrollDownClick(sectionId) {
  document.getElementById(sectionId ? sectionId : "")?.scrollIntoView({
    behavior: "smooth",
  });
}
