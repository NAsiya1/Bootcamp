function handleFormSubmit(event) {
    event.preventDefault()

    const nameInput = document.getElementById("fullname")
    const emailInput = document.getElementById("email")
    const messageInput = document.getElementById("message")

    const isNameValid = nameInput.value.trim() !== '' && nameInput.validity.valid
        console.log(isNameValid)

    const isMessageValid = messageInput.value.trim() !== '' && messageInput.validity.valid
        console.log(isMessageValid)

    const isEmailValid = emailInput.value !== '' && emailInput.validity.valid
    console.log(isEmailValid);

    const isFormValid = isNameValid && isEmailValid && isMessageValid
    console.log(isFormValid)

    if(isFormValid) {
        const formData = new FormData(event.target)
        console.log(formData)
        fetch('https://formspree.io/f/mvoeddqp',
            {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }
        )
        .then( response => response.json())
        .then( data => {
            console.log(data);
            if(data.ok) {
                alert('Email Successfully Sent')
                location.reload();
            }

        })
    } else {
        console.log('form invalid')

        if(isNameValid !==true) {

            const nameLabel = document.getElementById('name-label')
            console.log(nameLabel);
            const nameSpan = document.createElement('span')
            nameSpan.innerText = 'Name Is Not Valid'
            nameLabel.appendChild(nameSpan)
            console.log(nameSpan);


        }
    if(isEmailValid !== true) {

        const emailLabel = document.getElementById('email-label')
        console.log(emailLabel);
        const emailSpan = document.createElement('span')
        emailSpan.innerText = 'Email Is Not Valid'
        emailLabel.appendChild(emailSpan)


        }
    if(isMessageValid !== true) {

        const messageLabel = document.getElementById('message-label')
        console.log(messageLabel);
        const messageSpan = document.createElement('span')
        messageSpan.innerText = 'Message Is Not Valid!'
        messageLabel.appendChild(messageSpan)
    

        }
    }
}