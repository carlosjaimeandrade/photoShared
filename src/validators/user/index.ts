import { body } from 'express-validator';

const CreateUserValidate = [
    body('name')
        .notEmpty(),

    body('email')
        .isEmail()
        .normalizeEmail()
        .notEmpty(),

    body('telephone')
        .notEmpty(),

    body('cpf')
        .notEmpty(),

    body('password')
        .notEmpty(),

    body('type')
        .notEmpty(),
]

export default CreateUserValidate;