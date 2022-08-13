package com.arafat.whiteboard.model;

import javax.persistence.*;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.Date;

@Entity
@Table(name = "enrollment")
public class Enrollment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long enrollId;

    @Column(name = "enroll_date")
    private Date enrollDate;

    @Column(name = "enroll_status")
    private String enrollStatus;

    @Column(name = "active")
    private boolean active;

    // establish relationship with student
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "studentID", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private SchoolStudents student;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "courseId", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Course course;

    public Enrollment() {
    }

    public long getEnrollId() {
        return enrollId;
    }
    // getters and setters
    public Enrollment setEnrollId(long enrollId) {
        this.enrollId = enrollId;
        return this;
    }
    public Date getEnrollDate() {
        return enrollDate;
    }

    public Enrollment setEnrollDate(Date enrollDate) {
        this.enrollDate = enrollDate;
        return this;
    }

    public boolean isActive() {
        return active;
    }
    public Enrollment setActive(boolean active) {
        this.active = active;
        return this;
    }

    public SchoolStudents getStudent() {
        return student;
    }
    public Enrollment setStudent(SchoolStudents student) {
        this.student = student;
        return this;
    }

    public Course getCourse() {
        return course;
    }
    public Enrollment setCourse(Course course) {
        this.course = course;
        return this;
    }

    public String getEnrollStatus() {
        return enrollStatus;
    }

    public Enrollment setEnrollStatus(String enrollStatus) {
        this.enrollStatus = enrollStatus;
        return this;
    }



    





    


}
