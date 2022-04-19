import { IsUUID } from 'class-validator'
import { UserIdParams } from '../../users/params/user-id.param'

export class WorkerProfileIdParam extends UserIdParams {
    @IsUUID()
    workerProfileId: string
}