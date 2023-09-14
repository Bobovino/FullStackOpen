import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course=({course})=>{
    return (
        <>
          <Header course={course} />
          <Content parts={course.parts}/>
          </>
  ) 
}
export default Course;