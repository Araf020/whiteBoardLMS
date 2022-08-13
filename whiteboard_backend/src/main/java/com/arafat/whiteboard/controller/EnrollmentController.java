package com.arafat.whiteboard.controller;

import com.arafat.whiteboard.model.Instructor;
import com.arafat.whiteboard.model.SchoolStudents;
import com.arafat.whiteboard.model.Course;
import com.arafat.whiteboard.model.Enrollment;
import com.arafat.whiteboard.repository.CourseRepo;
import com.arafat.whiteboard.repository.EnrollmentRepo;
import com.arafat.whiteboard.repository.StudentRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class EnrollmentController {

    @Autowired
    private EnrollmentRepo enrollmentRepo;

    @Autowired
    private StudentRepo studentRepo;

    @Autowired
    private CourseRepo courseRepo;

    @GetMapping("/enrollments")
    public ResponseEntity<List<Enrollment>> getAllEnrollments() {

        List<Enrollment> enrolls = new ArrayList<>(enrollmentRepo.findAll());


        if (enrolls.isEmpty())
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        return new ResponseEntity<>(enrolls, HttpStatus.OK);

    }

//    insert a new instructor
    @PostMapping("/create_enrollment")
    public ResponseEntity<Enrollment> createEnrollment(@RequestBody Enrollment enrollment) {
        try
        {
            enrollmentRepo.save(enrollment);
        }
        catch (Exception e)
        {
            System.out.println(e);
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(enrollment, HttpStatus.OK);
    }


    
    @PutMapping("/enroll/approve/{studentId}/{courseId}")
    public ResponseEntity<Enrollment> assignCourse(@PathVariable("studentId") long studentId, @PathVariable("courseId") long courseId) {
        try
        {   
            System.out.println("instructorId: " + studentId);
            System.out.println("courseId: " + courseId);

            Enrollment enrolls = enrollmentRepo.findByCourseCourseIdAndStudentStudentId( courseId,studentId);

            enrolls.setActive(false);
            enrolls.setEnrollStatus("approved");
            enrollmentRepo.save(enrolls);
            return new ResponseEntity<>(enrolls,HttpStatus.OK);
        }

        catch (Exception e)
        {
            System.out.println(e);
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
       
    }

    

    @GetMapping("/enrolls/students/{courseId}")
    public ResponseEntity<List<SchoolStudents>> getInstructorCourse(@PathVariable("courseId") long courseId) {
        

        List<Enrollment> enrolls = enrollmentRepo.findByCourseCourseId(courseId);
        
        if (enrolls.isEmpty())
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        
        List<SchoolStudents> students = new ArrayList<>();

        // get all students enrolled in the course
        for (Enrollment enroll : enrolls)
        {
            students.add(enroll.getStudent());
        }

       

        return new ResponseEntity<>(students, HttpStatus.OK);


    }


}
