import { validate } from "./validate"

  const ERROR_TEXT_CLASS = 'error-text'
  const ERROR_INPUT_CLASS = 'error-input'
  const INPUT_TAGS = ['INPUT', 'TEXTAREA']

  const fieldErrorMesages = {
    name: 'Введите имя',
    phone: 'Неверный телефон',
    email: 'Некорректный email',
    comment: 'Минимальное количество символов - 20',
    password: 'Введите пароль',
    agree: 'Требуется согласие'
  }

  const validateField = (field) => {
    const isValid = validate(field.name,field.type === "checkbox" ? field.checked : field.value)
    if (!isValid) {
      if (!field.parentNode.querySelector(`.${ERROR_TEXT_CLASS}`)) {
        field.classList.add(ERROR_INPUT_CLASS)
        const errorBlock = document.createElement('div')
        errorBlock.classList.add(ERROR_TEXT_CLASS)
        errorBlock.textContent = fieldErrorMesages[field.name]
        field.parentNode.appendChild(errorBlock)
      }
    } else {
      field.classList.remove(ERROR_INPUT_CLASS)
      const errorBlock = field.parentNode.querySelector(`.${ERROR_TEXT_CLASS}`)
      if (errorBlock) {
        field.parentNode.removeChild(errorBlock)
      }
    }

    return isValid;
  }

  const handleChange = (event) => {
    const target = event.target;
    validateField(target);
  };

  export const createForm = (formElement, onSubmit) => {
    if (!formElement) {
      throw new Error('Форма не передана');
    }
    const inputs = formElement?.querySelectorAll('.js-field');
    const activateValidation = () => {
      if (inputs.length) {
        inputs.forEach(input => {
          if (INPUT_TAGS.includes(input.tagName)) {
            input.addEventListener('input', handleChange)
          } else {
            input.addEventListener('change', handleChange)
          }
        })
      }
    }
    formElement.addEventListener('submit', (event) => {

      event.preventDefault()
      activateValidation()
      if (inputs.length) {
        let isFormError = false;

        inputs.forEach((input) => {
          const isValid = validateField(input);

          if (!isFormError && !isValid) {
            isFormError = true;
          }
        })

        if (isFormError) {
          alert('Ошибка')
        } else {
          onSubmit && onSubmit()
        }
      }
    })
  }