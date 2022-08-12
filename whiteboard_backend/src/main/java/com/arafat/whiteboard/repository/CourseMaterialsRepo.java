package com.arafat.whiteboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.arafat.whiteboard.model.CourseMaterials;

import java.util.List;

public interface CourseMaterialsRepo extends JpaRepository<CourseMaterials, Long> {

    List<CourseMaterials> findByCourseCourseId(Long course_id);

}

