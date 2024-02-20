import courses from "./courses.json";
import modules from "./modules.json";
import assignments from "./assignments.json";

const db = {
  courses: courses as Course[],
  modules: modules as Module[],
  assignments: assignments as Assignment[],
};
export default db;

export interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  image: string;
}

export interface Module {
  _id: string;
  name: string;
  description: string;
  course: string;
  lessons: Lesson[];
}

export interface Lesson {
  _id: string;
  name: string;
  description: string;
  module: string;
}

export interface Assignment {
  _id: string;
  title: string;
  course: string;
  available: string;
  due: string;
  points: number;
}
