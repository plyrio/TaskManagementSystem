import {
  Entity,
  Column,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";

@Entity()
export class Task {
  @ObjectIdColumn()
  id: string;

  @Column()
  title: string;

  @Column({ default: ""})
  description: string;

  @Column({default: false})
  completed: boolean;

  @CreateDateColumn({ default: new Date()})
  createdAt: Date;

  @UpdateDateColumn({ default: new Date()})
  updatedAt: Date;
}
