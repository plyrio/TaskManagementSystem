import {ObjectId} from "mongodb";

export class Task {
  id: string | ObjectId = "";
  title: string = "";
  description: string | null = "" ;
  completed: boolean = false;
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
}
