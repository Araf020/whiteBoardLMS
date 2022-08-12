package com.arafat.whiteboard.repository;

import com.arafat.whiteboard.model.Instructor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InstructorRepo extends JpaRepository<Instructor, Long> {

    List<Instructor> findByDesignation(String designation);


}
