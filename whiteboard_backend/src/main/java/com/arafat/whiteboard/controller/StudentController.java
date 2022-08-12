package com.arafat.whiteboard.controller;

import com.arafat.whiteboard.model.SchoolStudents;
import com.arafat.whiteboard.repository.StudentRepo;
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

public class StudentController {

    @Autowired
    private StudentRepo studentRepo;

    @GetMapping("/students")
    public ResponseEntity<List<SchoolStudents>> getAllStudents() {

        List<SchoolStudents> students = new ArrayList<>(studentRepo.findAll());


        if (students.isEmpty())
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        return new ResponseEntity<>(students, HttpStatus.OK);

    }


    //get students by grade
    @GetMapping("/students_by_grade/{grade}")
    public ResponseEntity<List<SchoolStudents>> getStudentsByGrade(@PathVariable("grade") String grade) {
        List<SchoolStudents> students = new ArrayList<>();

        studentRepo.findByGrade(grade).forEach(students::add);

        if (students.isEmpty())
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        return new ResponseEntity<>(students, HttpStatus.OK);
    }

    //Get students by grade and shift

    @GetMapping("/students_by_grade_shift/{grade}/{shift}")
    public ResponseEntity<List<SchoolStudents>> getStudentsByGradeAndShift(@PathVariable("grade") String grade, @PathVariable("shift") String shift) {
        List<SchoolStudents> students = new ArrayList<>();
        if (grade == null || shift == null)
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);

        studentRepo.findByGradeAndShift(grade, shift).forEach(students::add);

        if (students.isEmpty())
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        return new ResponseEntity<>(students, HttpStatus.OK);

    }
    //get by id
    @GetMapping("/students_byId/{id}")
    public ResponseEntity<SchoolStudents> getStudentById(@PathVariable("id") long id) {

        Optional<SchoolStudents> studentdata = studentRepo.findById(id);

        return studentdata.map(student -> new ResponseEntity<>(student, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    //get by grade,roll
    @GetMapping("/students_by_grade_roll/{grade}/{roll}")
    public ResponseEntity<SchoolStudents> getStudentByRollAndGrade(@PathVariable("grade") String grade, @PathVariable("roll") int roll){
        SchoolStudents studentdata = studentRepo.findByRollAndGrade(roll,grade);

        return studentdata != null ? new ResponseEntity<>(studentdata, HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }






    //Insert a new student to db
    @PostMapping("/students")
    public ResponseEntity<SchoolStudents> createStudent(@RequestBody SchoolStudents student) {
        try {
            SchoolStudents _student = studentRepo.save(new SchoolStudents().setRoll(student.getRoll()).setName(student.getName()).
                    setFather_name(student.getFather_name()).setMother_name(student.getMother_name()).
                    setGrade(student.getGrade())
                    .setShift(student.getShift())
                    .setDateOfBirth(student.getDateOfBirth())
                    .setIs_regular(true)
                    .setSection(student.getSection())

            );
            return new ResponseEntity<>(_student, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



    //update a students email, address, phone, photo_url by roll and grade
    @PutMapping("/students/{grade}/{roll}")
    public ResponseEntity<SchoolStudents> updateStudentInfo(@PathVariable("grade") String grade, @PathVariable("roll") String roll, @RequestBody SchoolStudents student) {
        int _roll = Integer.parseInt(roll);
        SchoolStudents _student = studentRepo.findByRollAndGrade(_roll, grade);
        if (_student != null) {
            String address = student.getAddress();
            String phone = student.getPhone();
            String photo_url = student.getPhoto_url();
            String email = student.getEmail();

            if (address != null)
                _student.setAddress(address);
            if (phone != null)
                _student.setPhone(phone);
            if (photo_url != null)
                _student.setPhoto_url(photo_url);
            if (email != null)
                _student.setEmail(email);
            _student = studentRepo.save(_student);


            return new ResponseEntity<>(_student, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    //delete a student by roll and grade
    @DeleteMapping("/students/{grade}/{roll}")
    public ResponseEntity<SchoolStudents> deleteStudent(@PathVariable("grade") String grade, @PathVariable("roll") String roll) {
        int _roll = Integer.parseInt(roll);
        SchoolStudents _student = studentRepo.findByRollAndGrade(_roll, grade);
        if (_student != null) {
            studentRepo.delete(_student);
            return new ResponseEntity<>(_student, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}