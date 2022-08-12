package com.arafat.whiteboard.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "course")
public class Course {


    //set auto-increment to true
    //set a initial value of 101
    //set allocation size to 1
    //set increment by 1
    //set initial value of 101
    @Id
    @SequenceGenerator(name = "courseId_seq", sequenceName = "courseId_seq", allocationSize = 1, initialValue = 300000)
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "courseId_seq")

    private long courseId;

    @Column(name = "course_code",unique = true)
    private String courseCode;

    @Column(name = "course_title", unique = true)
    private String courseTitle;

    @Column(name = "credit_hour")
    private double creditHour;

    @Column (name = "course_description")
    private String courseDescription;

    @Column (name = "course_marks")
    private Double courseMarks;

    @Column (name = "course_grade")
    private String courseGrade;
    @Column (name = "course_prerequisite")
    private String coursePrerequisite;

//    establish a many to many relationship with the student class
    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            },
            mappedBy = "courses")
    // @JsonIgnore
    private Set<SchoolStudents> students = new HashSet<>();

//    establish a many to many relationship with the instructor class
    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            },
            mappedBy = "courses")
    @JsonIgnore
    private Set<Instructor> instructors = new HashSet<>();


    public Course(){}

    public Course(String course_code, String courseTitle, double creditHour) {
        this.courseCode = course_code;
        this.courseTitle = courseTitle;
        this.creditHour = creditHour;
    }

    public long getcourseId() {
        return courseId;
    }



    public String getCourseCode() {
        return courseCode;
    }

    public Course setCourseCode(String courseCode) {
        this.courseCode = courseCode;
        return this;
    }
    public Course setCourseId(Long id) {
        this.courseId = id;
        return this;
    }

    public String getCourseTitle() {
        return courseTitle;
    }

    public Course setCourseTitle(String courseTitle) {
        this.courseTitle = courseTitle;
        return this;
    }

    public double getCreditHour() {
        return creditHour;
    }

    public Course setCreditHour(double creditHour) {
        this.creditHour = creditHour;
        return this;
    }



    public String getCourseDescription() {
        return courseDescription;
    }

    public Course setCourseDescription(String courseDescription) {
        this.courseDescription = courseDescription;
        return this;
    }

    public Double getCourseMarks() {
        return courseMarks;
    }

    public Course setCourseMarks(Double courseMarks) {
        this.courseMarks = courseMarks;
        return this;
    }

    public String getCourseGrade() {
        return courseGrade;
    }

    public Course setCourseGrade(String courseGrade) {
        this.courseGrade = courseGrade;
        return this;
    }

    public String getCoursePrerequisite() {
        return coursePrerequisite;
    }

    public Course setCoursePrerequisite(String coursePrerequisite) {
        this.coursePrerequisite = coursePrerequisite;
        return this;
    }



}

