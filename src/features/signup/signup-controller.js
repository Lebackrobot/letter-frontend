
const _unhiddenForm = (form) => {
    form.classList.remove('hidden')   
}

const _hiddenForm = (form) => {
    form.classList.add('hidden')
}

const _signupEmailSubmit = (event) => {
    debugger
    event.preventDefault()

    const signupEmailForm = document.querySelector('#signup-email-form')
    const signupEmailValidationForm = document.querySelector('#signup-email-validation-form')

    
    if (signupEmailForm.email.value != signupEmailForm.confirmEmail.value) {
        const toast = document.querySelector('#toast')
        toast.innerText = 'Emails are diferents.'

        toast.classList.remove('hidden')

        return setTimeout(() => {
            toast.classList.add('hidden')
        }, 3000)
    }
    
    _unhiddenForm(signupEmailValidationForm)
    _hiddenForm(signupEmailForm)

    document.querySelector('#token1').focus()
}

const _signupEmailValidationSubmit = (event) => {
    const token1 = document.querySelector('#token1').value
    const token2 = document.querySelector('#token2').value
    const token3 = document.querySelector('#token3').value
    const token4 = document.querySelector('#token4').value

    const token = `${token1}${token2}${token3}${token4}`
    
    if (token.length == 4) {
        const signupEmailValidationForm = document.querySelector('#signup-email-validation-form')
        const signupUserForm = document.querySelector('#signup-user-form')
        
        setTimeout(() => {
            signupUserForm.classList.remove('hidden')
            signupEmailValidationForm.classList.add('hidden')
        }, 100)
    }
}

const _signupUserFormSubmit  = (event) => {
    event.preventDefault()
    window.location.href = 'signin'
}

const tokenInput1 = document.querySelector('#token1')
const tokenInput2 = document.querySelector('#token2')
const tokenInput3 = document.querySelector('#token3')
const tokenInput4 = document.querySelector('#token4')

tokenInput1.addEventListener('keyup', () => tokenInput2.focus())
tokenInput2.addEventListener('keyup', () => tokenInput3.focus())
tokenInput3.addEventListener('keyup', () => tokenInput4.focus())
tokenInput4.addEventListener('keyup', _signupEmailValidationSubmit)

const signupEmailForm = document.querySelector('#signup-email-form').addEventListener('submit', _signupEmailSubmit)
const signupEmailValidationForm = document.querySelector('#signup-email-validation-form').addEventListener('keypress', _signupEmailValidationSubmit)
const signupUserForm = document.querySelector('#signup-user-form').addEventListener('submit', _signupUserFormSubmit)


