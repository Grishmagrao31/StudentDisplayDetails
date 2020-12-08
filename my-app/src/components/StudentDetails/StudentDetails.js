import React from 'react';
import PropTypes from 'prop-types';
import styles from './StudentDetails.module.css';


const StudentDetails = ({name, age, course}) => {
    return (
        <div className = { styles.StudentDetails}>
        <div className = {styles.Name}> <span className = {styles.name}> Name : </span> {name}</div>
        <div className = {styles.Age}> <span className = {styles.age} > Age:</span> {age}</div>
        <div className = {styles.course}> <span className = {styles.Course}>   Course : </span> {course}</div>
   
   
    </div>
    );
};

StudentDetails.propTypes = {

};

export default StudentDetails;