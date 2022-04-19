import { buildMessage, registerDecorator, ValidationOptions } from "class-validator"

export function IsUsername(validationOptions?: ValidationOptions) {
    return function (target: Object, propertyKey: string) {
        registerDecorator({
            name: 'isUsername',
            target: target.constructor,
            propertyName: propertyKey,
            options: validationOptions,
            validator: {
                validate(value: string) {
                    const notAllowedCharacters = value.replace(/[a-zA-Z0-9-_.]/gm, "")
                    if (notAllowedCharacters.length > 0) return false
                    return true
                },
                defaultMessage: buildMessage(
                    () => "username must be only letters, numbers, -, _ or .", validationOptions
                )
            },
        })
    }
}