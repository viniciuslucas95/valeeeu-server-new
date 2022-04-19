import { Injectable, PipeTransform } from "@nestjs/common"
import { EmptyBodyException } from "src/general/errors/empty-body.error"

@Injectable()
export class EmptyBodyValidationPipe implements PipeTransform<any> {
    async transform(dto: any) {
        if (Object.keys(dto).length === 0) {
            throw new EmptyBodyException()
        }

        return dto
    }
}