import { randomUUID } from 'crypto';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Url } from './Url';


@Entity('user')
export class User {
    @PrimaryColumn({ type: 'uuid' })
    id: string;

    @Column({ type: 'text', unique: true })
    username: string;

    @Column({ type: 'text', select: false })
    password: string;

    @OneToMany(() => Url, url => url.user)
    urls: Url[];

    @CreateDateColumn()
    created_at: Date;

    constructor(props: Omit<User, 'id' | 'urls' | 'created_at'>, id?: string) {
        Object.assign(this, props)

        if (!id) {
            this.id = randomUUID()
        }
    }
}