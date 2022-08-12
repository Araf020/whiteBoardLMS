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
import java.util.Optional;
import java.util.Set;

@CrossOrigin(origins = "http://localhost:3000")
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
            System.out.println("instructorId: " + instructorId);
            System.out.println("courseId: " + courseId);
            Instructor instructor = null;
            Optional<Instructor> optionalInstructor = instructorRepo.findById(instructorId);
            if (optionalInstructor.isPresent())
            {
                instructor = optionalInstructor.get();
            }
            else
            {
                System.out.println("Instructor not found");
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }

            Course course = null;
            Optional<Course> optionalCourse = courseRepo.findById(courseId);
            if (optionalCourse.isPresent())
            {
                course = optionalCourse.get();
            }
            else
            {
                System.out.println("Course not found");
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
           
            instructor.addCourse(course);
            instructorRepo.save(instructor);
        }
        catch (Exception e)
        {
            System.out.println(e);
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/instructor/course/{instructorId}")
    public ResponseEntity<List<Course>> getInstructorCourse(@PathVariable("instructorId") long instructorId) {
        

        Set<Course> courses = instructorRepo.findById(instructorId).get().getCourses();
        
        if (courses.isEmpty())
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        // convert set to list
        List<Course> courseList = new ArrayList<>(courses);
       

        if (courses.isEmpty())
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        return new ResponseEntity<>(courseList, HttpStatus.OK);

    }


}
