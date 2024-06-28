// src/response/response.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';
import { Question } from '../question/question.entity';

@Entity()
export class Response {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rating: number;

    @ManyToOne(() => User, (user) => user.responses)
    user: User;

    @ManyToOne(() => Question, (question) => question.responses)
    question: Question;

    @Column()
    difficulty_level: string;

    @Column()
    response: string;
}
