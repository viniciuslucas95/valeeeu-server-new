import { Exclude } from "class-transformer";
import { WorkerProfile } from "src/worker_profiles/entities/worker_profile.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    username: string;

    @Column()
    @Exclude()
    password: string;

    @Column()
    name: string;

    @OneToOne(() => WorkerProfile, workerProfile => workerProfile.user, { cascade: true })
    @JoinColumn({ name: 'worker_profile_id' })
    workerProfile: WorkerProfile

    @CreateDateColumn({ name: 'created_at' })
    @Exclude()
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    @Exclude()
    updatedAt: Date;
}