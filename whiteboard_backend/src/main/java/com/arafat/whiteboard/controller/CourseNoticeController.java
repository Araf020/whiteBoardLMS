package com.arafat.whiteboard.controller;

import com.arafat.whiteboard.model.CourseNotice;
import com.arafat.whiteboard.repository.CourseNoticeRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class CourseNoticeController {

    @Autowired
    private CourseNoticeRepo noticeRepo;


    // tested: works
    @GetMapping("/notices/{course_id}")

    public ResponseEntity<List<CourseNotice>> getAllCourseNoticeByCourseId(@PathVariable("course_id") Long course_id) {

        List<CourseNotice> notices = new ArrayList<>(noticeRepo.findByCourseCourseId(course_id));

        if (notices.isEmpty())
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        return new ResponseEntity<>(notices, HttpStatus.OK);

    }

// tested: works
    @PostMapping("/create_notice")
    public ResponseEntity<CourseNotice> createNotice(@RequestBody CourseNotice notice) {

        System.out.println(notice.getTitle());
        System.out.println(notice.getDate());
        System.out.println(notice.getDescription());
        try{
            noticeRepo.save(notice);
        }
        catch (Exception e){
            System.out.println(e);
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(notice, HttpStatus.CREATED);
    }

  

}
