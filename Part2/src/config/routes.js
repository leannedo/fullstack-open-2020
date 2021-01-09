// paths
import { COURSE_INFO_PATH, HOME_PATH, PHONE_BOOK } from "./paths";

// views
import Home from "../Home";
import CourseInfo from "../Courseinfo/CourseInfo";
import PhoneBook from "../PhoneBook/PhoneBook";

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
    path: PHONE_BOOK,
    component: PhoneBook,
  },
];
