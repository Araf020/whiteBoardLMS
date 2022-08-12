package com.arafat.whiteboard.controller;

import com.arafat.whiteboard.model.Course;
import com.arafat.whiteboard.repository.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class CourseController {

    @Autowired
    private CourseRepo courseRepo;

    @GetMapping("/courses")
    public ResponseEntity<List<Course>> getAllCourses() {
        List<Course> courses = new ArrayList<>();

        courseRepo.findAll().forEach(courses::add);


        if (courses.isEmpty())
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        return new ResponseEntity<>(courses, HttpStatus.OK);

    }
    //get by course title
    @GetMapping("/courses/{title}")
    public ResponseEntity<Course> getCourseByTitle(@PathVariable("title") String title) {
        Course course = courseRepo.findCourseByCourseTitleEquals(title);

        if (course == null)
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        return new ResponseEntity<>(course, HttpStatus.OK);

    }
    //get by grade
    @GetMapping("/courses_by_grade/{grade}")
    public ResponseEntity<List<Course>> getCoursesByGrade(@PathVariable("grade") String grade) {
        List<Course> courses = new ArrayList<>();

        courseRepo.findCourseByCourseGrade(grade).forEach(courses::add);

        if (courses.isEmpty())
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        return new ResponseEntity<>(courses, HttpStatus.OK);

    }
    //get course by course code
    @GetMapping("/courses_by_course_code/{course_code}")
    public ResponseEntity<Course> getCourseByCourseCode(@PathVariable("course_code") String course_code) {
        Course course = courseRepo.findCourseByCourseCode(course_code);

        if (course == null)
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        return new ResponseEntity<>(course, HttpStatus.OK);

    }

    //get by id
    @GetMapping("/courses_byId/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable("id") Long id) {
        Optional<Course> courseData = courseRepo.findById(id);

        return courseData.map(student -> new ResponseEntity<>(student, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));

    }

    //Insert course
    @PostMapping("/courses")
    public ResponseEntity<Course> addCourse(@RequestBody Course course) {
        course.setCoursePrerequisite("N/A");
        Course c = courseRepo.save(course);
        return new ResponseEntity<>(c, HttpStatus.OK);
    }
    //Update course info
    @PutMapping("/courses/{course_code}")
    public ResponseEntity<Course> updateCourseInfo(@PathVariable("course_code") String course_code, @RequestBody Course course) {
        Course c = courseRepo.findCourseByCourseCode(course_code);
        if (c == null)
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        String description = course.getCourseDescription();
        double credit_hour = course.getCreditHour();
        String title = course.getCourseTitle();
        Double marks = course.getCourseMarks();
        String prerequisite = course.getCoursePrerequisite();

        if (description != null)
            c.setCourseDescription(description);
        if (credit_hour != 0)
            c.setCreditHour(credit_hour);
        if (title != null)
            c.setCourseTitle(title);
        if (marks != null)
            c.setCourseMarks(marks);
        if (prerequisite != null)
            c.setCoursePrerequisite(prerequisite);

        Course updatedCourse = courseRepo.save(c);
        return new ResponseEntity<>(updatedCourse, HttpStatus.OK);
    }

    //Delete course
    @DeleteMapping("/courses/{course_code}")
    public ResponseEntity<HttpStatus> deleteCourse(@PathVariable("course_code") String course_code) {
        Course c = courseRepo.findCourseByCourseCode(course_code);
        if (c == null)
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        courseRepo.delete(c);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }






}
