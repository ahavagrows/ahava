window.onload = function() {
    document.getElementById('ageModal').style.display = 'block';
}

function verifyAge(isOfAge) {
    if (isOfAge) {
        // User is of age
        document.getElementById('ageModal').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        // User is underage
        alert("You must be at least 21 years old to view this content.");
        window.location.href = 'https://www.google.com';
    }
}