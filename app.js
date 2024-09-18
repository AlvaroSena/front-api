const form = document.getElementById('useForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const jsonData = JSON.stringify(Object.fromEntries(formData.entries()));

    try {
        const response = await fetch('http://localhost:8080/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: jsonData,
        });
    
        if (!response.ok) {
            throw new Error("Sem internet ou problema na rede");
        }
    
        if (response.status === 201) {
            const result = await response.json();
            console.log(result);
        }

    } catch (e) {
        console.error(e);
    }

});
