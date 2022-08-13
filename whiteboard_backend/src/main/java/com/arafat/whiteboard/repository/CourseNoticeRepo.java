package com.arafat.whiteboard.repository;
import com.arafat.whiteboard.model.CourseNotice;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


public interface CourseNoticeRepo extends JpaRepository<CourseNotice, Long>{

    CourseNotice findByTitle(String title);
    List<CourseNotice> findByCourseCourseId(Long course_id);
    


    
}
