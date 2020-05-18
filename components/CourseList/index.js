import styled from "styled-components";
import CourseListContainer from './CourseListContainer';
import CourseCard from './CourseCard';


const SkillsList = ({ courses }) => {
  // const skills = courses.map((course) => {
  //   const { overview } = course.data;
  //   const title = course.data.title && course.data.title[0].text;
  //   return (
  //     <button>
  //       <Link href="/courses/[id]" as={`/courses/${course.id}`}>
  //         <div>
  //           <BlowfishIcon />
  //           <h5>{title}</h5>
  //           <h6>{overview}</h6>
  //         </div>
  //       </Link>
  //     </button>
  //   );
  // });
  
  return (
    <CourseListContainer>
      { courses.map((course) => (
        <CourseCard course={course} />
        
      ))}
    </CourseListContainer>
  )
};

export default SkillsList;
