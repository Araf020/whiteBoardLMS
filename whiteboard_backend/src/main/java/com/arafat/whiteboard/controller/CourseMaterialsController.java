package com.arafat.whiteboard.controller;

import com.arafat.whiteboard.model.AssignmentScore;
import com.arafat.whiteboard.model.Course;
import com.arafat.whiteboard.model.CourseMaterials;
import com.arafat.whiteboard.repository.AssignmentScoreRepo;
import com.arafat.whiteboard.repository.CourseMaterialsRepo;

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
public class CourseMaterialsController {
    @Autowired
    private CourseMaterialsRepo courseMaterialsRepo;

    @GetMapping("/course_materials")
    public ResponseEntity<List<CourseMaterials>> getAllCourseMaterials() {
        List<CourseMaterials> courseMats = new ArrayList<>();

        courseMaterialsRepo.findAll().forEach(courseMats::add);

        if (courseMats.isEmpty())
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        return new ResponseEntity<>(courseMats, HttpStatus.OK);

    
    }

    @GetMapping("/course_materials/{course_id}")
    public ResponseEntity<List<CourseMaterials>> getCourseMaterialsByCourseId(@PathVariable("course_id") Long course_id) {
        List<CourseMaterials> courseMats = new ArrayList<>();

        courseMaterialsRepo.findByCourseCourseId(course_id).forEach(courseMats::add);

        if (courseMats.isEmpty())
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        return new ResponseEntity<>(courseMats, HttpStatus.OK);
    }

    // tested: pending...

    @PostMapping("/create_course_material")
    public ResponseEntity<CourseMaterials> createCourseMaterials(@RequestBody CourseMaterials courseMaterials) {
       
        try{
            courseMaterialsRepo.save(courseMaterials);
        }
        catch (Exception e){
            System.out.println("Error creating course materials: "+e);

            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(courseMaterials, HttpStatus.CREATED);
    }

    @PutMapping("/update_course_materials/{course_materials_id}")
    public ResponseEntity<CourseMaterials> updateCourseMaterials(@PathVariable("course_materials_id") Long course_materials_id, @RequestBody CourseMaterials courseMaterials) {

        Optional<CourseMaterials> courseMaterialsData = courseMaterialsRepo.findById(course_materials_id);

        if(!courseMaterialsData.isPresent())
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        
        CourseMaterials courseMaterials1 = courseMaterialsData.get();

        String title = courseMaterials.getMaterialTitle();
        Long course_id = courseMaterials.getCourse().getcourseId();
        String fileUrl = courseMaterials.getFileLocation();

        if(title != null)
            courseMaterials1.setMaterialTitle(title);
        if(course_id != null)
            courseMaterials1.setCourse(courseMaterials.getCourse());
        if(fileUrl != null)
            courseMaterials1.setFileLocation(fileUrl);
        

        try{
            courseMaterialsRepo.save(courseMaterials1);
        }
        catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(courseMaterials1, HttpStatus.OK);
    }

    @DeleteMapping("/delete_course_materials/{id}")
    public ResponseEntity<HttpStatus> deleteCourseMaterials(@PathVariable("id") Long id) {
        try{
            courseMaterialsRepo.deleteById(id);
        }
        catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
