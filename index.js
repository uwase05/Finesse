
// Variable to track the currently open dropdown
let currentDropdown = null;

function toggleDropdown(id) {
    // Close the previously open dropdown if it exists
    if (currentDropdown && currentDropdown !== id) {
        document.getElementById(currentDropdown).style.display = "none";
    }

    // Toggle the clicked dropdown
    const dropdown = document.getElementById(id);
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
        currentDropdown = null; // Reset if closed
    } else {
        dropdown.style.display = "block";
        currentDropdown = id; // Set the currently open dropdown
    }
}

// Hide dropdown when clicking outside
document.addEventListener("click", function(event) {
    const isClickInside = event.target.closest(".dropdown");
    if (!isClickInside && currentDropdown) {
        document.getElementById(currentDropdown).style.display = "none";
        currentDropdown = null;
    }
});


