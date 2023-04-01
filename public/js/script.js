// Get the checkbox element
const myCheckbox = document.getElementById('myCheckbox');

// Check if there's a saved value for the checkbox
if (localStorage.getItem('myCheckbox') === 'true') {
  // If there is, set the checkbox as checked
  myCheckbox.checked = true;
}

// Add an event listener to the checkbox
myCheckbox.addEventListener('change', function() {
  // Save the state of the checkbox to localStorage
  localStorage.setItem('myCheckbox', this.checked);
});
