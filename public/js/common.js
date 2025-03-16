function borrowBook(id) {
  fetch('/books/borrow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  }).then(response => {
    if (response.ok) {
      alert('Book successfully borrowed!');
      location.reload();
    } else {
      alert('Failed to borrow the book.');
    }
  }).catch(error => {
    console.error('Error borrowing book:', error);
    alert('An error occurred.');
  });
}

function returnBook(id) {
  fetch('/books/return', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  }).then(response => {
    if (response.ok) {
      alert('Book successfully returned!');
      location.reload();
    } else {
      alert('Failed to return the book.');
    }
  }).catch(error => {
    console.error('Error returning book:', error);
    alert('An error occurred.');
  });
}

function updateAuthor(id) {
  const newName = prompt("Enter the new name for the author:");
  if (newName) {
    fetch('/authors/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, name: newName }),
    }).then(response => {
      if (response.ok) {
        alert('Author successfully updated!');
        location.reload();
      } else {
        alert('Failed to update the author.');
      }
    }).catch(error => {
      console.error('Error updating author:', error);
      alert('An error occurred.');
    });
  }
}

function deleteAuthor(id) {
  if (confirm("Are you sure you want to delete this author?")) {
    fetch('/authors/delete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    }).then(response => {
      if (response.ok) {
        alert('Author successfully deleted!');
        location.reload();
      } else {
        alert('Failed to delete the author.');
      }
    }).catch(error => {
      console.error('Error deleting author:', error);
      alert('An error occurred.');
    });
  }
}

function updateGenre(id) {
  const newName = prompt("Enter the new name for the genre:");
  if (newName) {
    fetch('/genres/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, name: newName }),
    }).then(response => {
      if (response.ok) {
        alert('Genre successfully updated!');
        location.reload();
      } else {
        alert('Failed to update the genre.');
      }
    }).catch(error => {
      console.error('Error updating genre:', error);
      alert('An error occurred.');
    });
  }
}

function deleteGenre(id) {
  if (confirm("Are you sure you want to delete this genre?")) {
    fetch('/genres/delete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    }).then(response => {
      if (response.ok) {
        alert('Genre successfully deleted!');
        location.reload();
      } else {
        alert('Failed to delete the genre.');
      }
    }).catch(error => {
      console.error('Error deleting genre:', error);
      alert('An error occurred.');
    });
  }
}
