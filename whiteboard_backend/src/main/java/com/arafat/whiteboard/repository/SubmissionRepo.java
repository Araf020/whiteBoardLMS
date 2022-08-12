package com.arafat.whiteboard.repository;

import com.arafat.whiteboard.model.Assignments;
import com.arafat.whiteboard.model.SchoolStudents;
import com.arafat.whiteboard.model.Submission;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SubmissionRepo extends JpaRepository<Submission, Long> {
    List<Submission> findByStudent(SchoolStudents student);
    List<Submission> findByAssignment(Assignments assignment);
    List<Submission> findByAssignmentAndStudent(Assignments assignment, SchoolStudents student);


}

