async function formHandler (event) {
    event.preventDefault();

    const symptom = document.querySelector('#symptom').value;
    const details = document.querySelector('#details').value;

    const response = await fetch(`/api/notes/`, {
        method: 'POST',
        body: JSON.stringify({
            symptom, 
            details
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    if (response.ok) {
        alert('Note saved')
        document.location.replace('/note');
    } else {
        alert('Failed to save note.')
    }
}

document.querySelector('#submit').addEventListener('click', formHandler);


//need to put link to this file in main.handlebars, just didnt want to make merging complicated
