// src/question/question.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Response } from '../response/response.entity';

export enum DifficultyLevel {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard',
}

@Entity()
export class Question {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    question: string;

    @Column({ type: 'enum', enum: DifficultyLevel })
    difficultyLevel: DifficultyLevel;

    @OneToMany(() => Response, (response) => response.question)
    responses: Response[];
}
