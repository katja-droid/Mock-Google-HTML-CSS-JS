function lucky() {
    const query = document.querySelector('input[name="q"]').value;
    window.location.href = `https://www.google.com/search?q=${query}&btnI`;
}

function searchGoogle() {
    const query = document.getElementById('searchInput').value;
    window.location.href = `https://www.google.com/search?q=${query}`;
}
