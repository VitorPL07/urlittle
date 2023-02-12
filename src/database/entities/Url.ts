import { randomBytes, randomUUID } from "crypto";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./User";

@Entity('url')
export class Url {
    @PrimaryColumn({ type: 'uuid' })
    id: string;

    @Column({ type: 'text' })
    main: string;

    @Column({ type: 'text' })
    uri: string;

    @Column({ type: 'uuid' })
    user_id: string;

    @ManyToOne(() => User, user => user.id)
    @JoinColumn({ name: 'user_id' })
    user: User

    @CreateDateColumn()
    created_at: Date

    constructor(props: Omit<Url, 'id' | 'uri' | 'user_id' | 'created_at'>, uri?: string, id?: string) {
        Object.assign(this, props)

        this.id = id ?? randomUUID();

        randomBytes(3, (err, buffer) => {
            this.uri = uri ?? buffer.toString('hex');
        })

    }
}