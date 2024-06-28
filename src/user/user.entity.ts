import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, OneToMany } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Response } from '../response/response.entity';

export enum UserRole {
  CANDIDATE = 'candidate',
  REVIEWER = 'reviewer',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
  })
  role: UserRole;

  @OneToMany(() => Response, (response) => response.user)
  responses: Response[];
  // Add hooks for password hashing
  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (this.password) {
      const saltRounds = 14;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  }

  // Method to compare passwords
  async comparePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}
