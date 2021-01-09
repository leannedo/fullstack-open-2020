import Header from "../Header/Header";
import Content from "../Content/Content";
import React from "react";

const calculateTotalExercisesByMap = (arr) => {
  let sum = 0;
  arr.map((el) => (sum += el.exercises));
  return sum;
};

const calculateTotalExercisesByReduce = (arr) => {
  return arr.reduce((acc, el) => acc + el.exercises, 0);
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <h4>
        Total of {calculateTotalExercisesByReduce(course.parts)} exercises
      </h4>
    </div>
  );
};

export default Course;
