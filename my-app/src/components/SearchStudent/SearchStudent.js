import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './SearchStudent.module.css';
import StudentDetails from "../StudentDetails/StudentDetails";

let students = [
    {
      
        name: "Karthik",
        age: 19,
        course: "maths, science, english",
        id: 1
        },
        {
        name: "Suman",
        age: 16,
        course: "maths, science, english, sanskrit",
        id: 2
        },
        {
        name: "Janhavi",
        age: 20,
        course: "maths, science, kannada",
        id: 3
        },
        {
        name: "Raghu",
        age: 22,
        course: "maths, english, hindi",
        id: 4
        },
        {
          name: "Grishma",
          age: 22,
          course: "Maths, Science, Social",
          id: 5
        },
        {
          name: "Shreya",
          age: 22,
          course: "Maths, Science, Social",
          id: 6
        },
        {
          name: "Pooja",
          age: 22,
          course: "Maths, Science, Social",
          id: 7
        }
        
  
    
  ]

const SearchStudent = props => {
    const [search, setSearch] = useState("");

  function SearchingStudents (students) {
    
    return students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );
  }

  let searchedstudent = SearchingStudents(students); 

  const handleChange = (event) => {
    const SearchedStudent = event.target.value;
    setSearch(SearchedStudent);
  }
    return (
        <div className = {styles.SearchStudent }>
        <section className = {styles.timeline}> 
    
         <input className ={styles.search} placeholder = "Search Student" onChange = {handleChange} />
    
        <ul>
       <li> 
       <div> 
        {
      searchedstudent.length > 0 ? (
         SearchingStudents(students).map((student) => (
           <div className = {styles.box} >
           <div> 
           <StudentDetails
         
           name ={student.name}
           age ={student.age}
           course ={student.course}
       
           />
           </div>
           </div>
         ))
       ) 
       : (
         <div className ={styles.Notfound}> Student Name Not found !</div>
       )
     }
     </div>
     </li>
     </ul>
 
     
 </section>
        </div>
    );
};

SearchStudent.propTypes = {

};

export default SearchStudent;