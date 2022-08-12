package com.arafat.whiteboard.controller;

import com.arafat.whiteboard.model.Instructor;
import com.arafat.whiteboard.model.Course;
import com.arafat.whiteboard.repository.InstructorRepo;
import com.arafat.whiteboard.repository.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class InstructorController {

    @Autowired
    private InstructorRepo instructorRepo;
    @Autowired
    private CourseRepo courseRepo;

    @GetMapping("/instructors")
    public ResponseEntity<List<Instructor>> getAllInstructors() {

        List<Instructor> instructors = new ArrayList<>(instructorRepo.findAll());


        if (instructors.isEmpty())
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        return new ResponseEntity<>(instructors, HttpStatus.OK);

    }

//    insert a new instructor
    @PostMapping("/create_instructor")
    public ResponseEntity<Instructor> createInstructor(@RequestBody Instructor instructor) {
        try
        {
            instructorRepo.save(instructor);
        }
        catch (Exception e)
        {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(instructor, HttpStatus.OK);
    }

//    update an instructor
    @PutMapping("/update_instructor")
    public ResponseEntity<Instructor> updateInstructor(@RequestBody Instructor instructor) {
        try
        {
            instructorRepo.save(instructor);
        }
        catch (Exception e)
        {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(instructor, HttpStatus.OK);
    }

    @PutMapping("/assign_course/{instructorId}/{courseId}")
    public ResponseEntity<Instructor> assignCourse(@PathVariable("instructorId") long instructorId, @PathVariable("courseId") long courseId) {
        try
        {
            Instructor instructor = instructorRepo.findById(instructorId).get();
            Course course = courseRepo.findById(courseId).get();
           
            instructor.addCourse(course);
            instructorRepo.save(instructor);
        }
        catch (Exception e)
        {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
