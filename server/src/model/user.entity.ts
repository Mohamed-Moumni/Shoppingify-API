import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn('uuid')
    id: string
    
    @Column({ type: "string" })
    username:string
    
    @Column({ type: "string" })
    firstname:string
    
    @Column({ type: "string" })
    lastname:string
    
    @Column({ type: "string" })
    email:string
    
    @Column({ type: "string" })
    password: string
    
    @CreateDateColumn({type: "timestamp"})
    created_at: Date
}