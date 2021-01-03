// paths
import {
  COURSE_INFO_PATH,
  UNICAFE_PATH,
  ANECDOTES_PATH,
  HOME_PATH,
} from "./paths";

// views
import Home from "../Home";
import CourseInfo from "../Courseinfo/CourseInfo";
import Unicafe from "../Unicafe/Unicafe";
import Anecdotes from '../Anecdotes/Anecdotes';

export const routes = [
  {
    path: HOME_PATH,
    component: Home,
  },
  {
    path: COURSE_INFO_PATH,
    component: CourseInfo,
  },
  {
    path: UNICAFE_PATH,
    component: Unicafe,
  },
  {
    path: ANECDOTES_PATH,
    component: Anecdotes,
  },
];
