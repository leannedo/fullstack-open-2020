// paths
import { COURSE_INFO_PATH, HOME_PATH } from "./paths";

// views
import Home from "../Home";
import CourseInfo from "../Courseinfo/CourseInfo";

export const routes = [
  {
    path: HOME_PATH,
    component: Home,
  },
  {
    path: COURSE_INFO_PATH,
    component: CourseInfo,
  },
];
