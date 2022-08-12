package com.arafat.whiteboard.controller;


import com.arafat.whiteboard.model.Post;
import com.arafat.whiteboard.repository.CourseRepo;
import com.arafat.whiteboard.repository.InstructorRepo;
import com.arafat.whiteboard.repository.PostRepo;
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


public class PostController {
    @Autowired
    private PostRepo postRepo;

    // tested: works
    @GetMapping("/posts")
    public ResponseEntity<List<Post>> getAllPosts() {

        List<Post> posts = new ArrayList<>(postRepo.findAll());


        if (posts.isEmpty())
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        return new ResponseEntity<>(posts, HttpStatus.OK);

    }

    @GetMapping("/posts/{course_id}")
    public ResponseEntity<List<Post>> getPostsByCourseId(@PathVariable("course_id") Long course_id) {
        List<Post> posts = new ArrayList<>(postRepo.findByCourseCourseId(course_id));


        if (posts.isEmpty())
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        return new ResponseEntity<>(posts, HttpStatus.OK);

    }

    @GetMapping("/posts/{post_id}")
    public ResponseEntity<Post> getPostByPostId(@PathVariable("post_id") Long post_id) {
        Optional<Post> post = postRepo.findById(post_id);
        return post.map(value -> new ResponseEntity<>(value, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));

    }

//    insert a post
// tested: working
    @PostMapping("/create_post")
    public ResponseEntity<Post> createPost(@RequestBody Post post) {

//       handle error
        try {
            postRepo.save(post);

        } catch (Exception e) {
            System.out.println("Error creating post: " + e.toString());
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(post, HttpStatus.CREATED);
    }

//    update a post
    @PutMapping("/update_post/{post_id}")
    public ResponseEntity<Post> updatePostText(@PathVariable("post_id") Long post_id, @RequestBody Post post) {
        Optional<Post> postData = postRepo.findById(post_id);
        if (postData.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Post post_2 = postData.get();

        post_2.setPostText(post.getPostText());

//        put to db
        try {
            postRepo.save(post_2);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(post_2, HttpStatus.OK);
        }

//    delete a post 
// tested: works
    @DeleteMapping("/delete_post/{post_id}")
    public ResponseEntity<Post> deletePost(@PathVariable("post_id") Long post_id) {
        Optional<Post> postData = postRepo.findById(post_id);
        if (postData.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Post post_2 = postData.get();

        try {
            postRepo.delete(post_2);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(HttpStatus.OK);
    }

}
