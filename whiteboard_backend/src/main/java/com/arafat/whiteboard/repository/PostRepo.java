package com.arafat.whiteboard.repository;


import com.arafat.whiteboard.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PostRepo extends JpaRepository<Post, Long> {

//    find the posts of a course
    List<Post> findByCourseCourseId(Long course_id);

    // insert to post table
    // @Query(value = "INSERT INTO post (course_id, user_id, post_title, post_text, timestamp) VALUES (?1, ?2, ?3, ?4)", nativeQuery = true)
    // void insertPost(Long course_id, Long user_id, String post_content, String post_date);



}
