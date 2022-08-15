package com.arafat.whiteboard.controller;

import com.arafat.whiteboard.model.Assignments;
import com.arafat.whiteboard.model.SchoolStudents;
import com.arafat.whiteboard.model.Submission;
import com.arafat.whiteboard.repository.AssignmentRepo;
import com.arafat.whiteboard.repository.StudentRepo;
import com.arafat.whiteboard.repository.SubmissionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class SubmissionController {
    @Autowired
    private SubmissionRepo submissionRepo;
    @Autowired
    private AssignmentRepo assignmentRepo;
    @Autowired
    private StudentRepo studentRepo;

    private List<Submission> getSubmissions(Long assignment_id, Long student_id){
        Optional<Assignments> assignmentData = assignmentRepo.findById(assignment_id);
        Optional<SchoolStudents> studentData = studentRepo.findById(student_id);
        SchoolStudents student;
        Assignments assignment;
        if(studentData.isPresent() && assignmentData.isPresent()){
             student= studentData.get();
             assignment = assignmentData.get();
        }
        else {
            return null;
        }

        return submissionRepo.findByAssignmentAndStudent(assignment, student);

    }

    @GetMapping("/submissions")
    public ResponseEntity<List<Submission>> getAlSubmissions(){

        List<Submission> submissions = new ArrayList<>(submissionRepo.findAll());

        if (submissions.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(submissions, HttpStatus.OK);
    }

    @GetMapping("/submissions_by_assignment/{assignment_id}")
    public ResponseEntity<List<Submission>> getSubmissionsByAssignment(@PathVariable("assignment_id") Long assignment_id){
       
        Optional<Assignments> assignmentData = assignmentRepo.findById(assignment_id);
        Assignments assignment;
        if(assignmentData.isPresent()){
            assignment = assignmentData.get();
        }
        else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        List<Submission> submissions = new ArrayList<>(submissionRepo.findByAssignment(assignment));

        if (submissions.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(submissions, HttpStatus.OK);
    }

    @GetMapping("/submissions_by_student/{student_id}")
    public ResponseEntity<List<Submission>> getSubmissionsByStudent(@PathVariable("student_id") Long student_id){
        Optional<SchoolStudents> studentData = studentRepo.findById(student_id);
        SchoolStudents student;
        if(studentData.isPresent()){
            student = studentData.get();
        }
        else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        List<Submission> submissions = new ArrayList<>(submissionRepo.findByStudent(student));

        return new ResponseEntity<>(submissions, HttpStatus.OK);
    }

    @GetMapping("/submissions_by_assignment_and_student/{assignmentId}/{studentId}")
    public ResponseEntity<List<Submission>> getSubmissionsByAssignmentAndStudent(@PathVariable("assignmentId") Long assignment_id, @PathVariable("studentId") Long student_id){


        List<Submission> submissions = getSubmissions(assignment_id, student_id);

        if (submissions == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(submissions, HttpStatus.OK);
    }

    //insert a submission
    //to insert a submission, you need to pass the assignment_id and student_id
    @PostMapping("/create_submission")
    public ResponseEntity<Submission> insertSubmission( @RequestBody Submission submission){
       

        try {
            Long stdId = submission.getStudent().get_id();
            SchoolStudents std = studentRepo.findById(stdId).get();
            std.addSubmission(submission);
            // update the students submission list
            studentRepo.save(std);
            System.out.println("student submission list updated");

            submissionRepo.save(submission);
            
            return new ResponseEntity<>(submission, HttpStatus.OK);
        }
        catch (Exception e){
            
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    //update a submission deadline
    @PutMapping("/updatesubmission_deadline/{submission_id}")
    public ResponseEntity<Submission> updateSubmission(@PathVariable("submission_id") Long submission_id, @RequestBody Submission submission){
        Optional<Submission> submissionData = submissionRepo.findById(submission_id);
        if(submissionData.isPresent()){
            Submission submission1 = submissionData.get();
            submission1.setDeadline(submission.getDeadline());
            submissionRepo.save(submission1);
            return new ResponseEntity<>(submission1, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    //delete a submission
    @DeleteMapping("/submissions/{submission_id}")
    public ResponseEntity<Submission> deleteSubmission(@PathVariable("submission_id") Long submission_id){
        Optional<Submission> submissionData = submissionRepo.findById(submission_id);
        if(submissionData.isPresent()){
            Submission submission1 = submissionData.get();
            submissionRepo.delete(submission1);
            return new ResponseEntity<>(submission1, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }





}
