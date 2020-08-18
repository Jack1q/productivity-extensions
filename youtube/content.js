function removeDistractingElements() {
  var elementsToRemove = [
    document.getElementById('secondary'),
    document.getElementById('comments')
  ];
  elementsToRemove.forEach(element => {
    if (element != null) {
      element.parentNode.removeChild(element);
    }
  });
  setTimeout(removeDistractingElements, 300);
}
removeDistractingElements();