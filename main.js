function showPage(pageId) {
    
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));


    document.getElementById(pageId).classList.add('active');
}

function showForm(type) {
    const formFields = document.getElementById('form-fields');
    const formTitle = document.getElementById('form-title');
    
    formFields.innerHTML = ''; 

    if (type === 'login') {
        formTitle.innerText = 'Login';
        formFields.innerHTML = `
            <input type="email" placeholder="Email" required>
            <input type="password" placeholder="Password" required>
        `;
    } else if (type === 'register') {
        formTitle.innerText = 'Register';
        formFields.innerHTML = `
            <input type="text" placeholder="First Name" required>
            <input type="text" placeholder="Last Name" required>
            <input type="tel" placeholder="Phone Number" required>
            <input type="email" placeholder="Email" required>
            <input type="password" placeholder="Password" required>
        `;
    }

    showPage('login-register');
}

function showResults(event) {
    event.preventDefault(); 
    showPage('results'); 
}

showPage('welcome');
