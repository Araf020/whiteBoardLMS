package com.arafat.whiteboard.repository;

import com.arafat.whiteboard.model.Assignments;
import com.arafat.whiteboard.model.Submission;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AssignmentRepo extends JpaRepository<Assignments, Long> {

    //find the submissions of a assignment

    Assignments findByAssTitle(String title);
    List<Assignments> findByCourseCourseId(Long course_id);



}
