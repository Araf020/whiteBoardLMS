package com.arafat.whiteboard.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.arafat.whiteboard.model.Enrollment;
import com.arafat.whiteboard.model.Course;

import java.util.List;


public interface EnrollmentRepo extends JpaRepository<Enrollment, Long> {


    List<Enrollment>  findByCourseCourseId(Long course_id);

    List<Enrollment> findByStudentStudentId(Long student_id);

    Enrollment findByCourseCourseIdAndStudentStudentId(Long course_id, Long student_id);
    
}
