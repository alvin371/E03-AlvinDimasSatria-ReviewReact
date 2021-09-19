const validate = (values) => {
    let errors = {};
    console.log(values)
    if (!values.name) {
        errors.name = "Nama required"
    }

    if (!values.email) {
        errors.email = "Email Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "email address is invalid"
    }

    if (!values.phone) {
        errors.phone = "No Hp is Required"
    } else if (values.phone.length <= 9 || values.phone.length >= 14) {
        errors.phone = "No Hp panjang karakter 9 - 14"
    }
    if (!values.message) {
        errors.message = "Text Message harus di isi"
    }
    if (!values.nationality) {
        errors.nationality = "Harus memilih kewarganegaraan"
    }
    return errors
}

export default validate;