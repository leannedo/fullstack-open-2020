// paths
import { COURSE_INFO_PATH, HOME_PATH, PHONE_BOOK, COUNTRY } from "./paths";

// views
import Home from "../Home";
import CourseInfo from "../Courseinfo/CourseInfo";
import PhoneBook from "../PhoneBook/PhoneBook";
import Country from "../Country/Country";

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
  {
    path: COUNTRY,
    component: Country,
  },
];
