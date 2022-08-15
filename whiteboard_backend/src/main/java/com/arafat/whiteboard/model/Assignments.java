package com.arafat.whiteboard.model;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "assignments")
public class Assignments {


//    generate a sequence for the primary key
//    allocation size of 1
//    increment by 1
//    initial value of 100000
    @Id
    @SequenceGenerator(name = "assignmentId_seq", sequenceName = "assignmentId_seq", allocationSize = 1, initialValue = 100000)
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "assignmentId_seq")

    private long assignmentId;

    @Column(name = "ass_title")
    private String assTitle;

    @Column(name = "spec_file_link")
    private String specFileLink;
    @Column(name = "ass_due_date")
    private Date assignmentDueDate;

    @Column(name = "description")
    private String description;

    @Column(name="points")
    private Double points;

    @Column(name = "session")
    private String session;

    @Column(name="graded")
    private boolean graded;

//    establish a many to one relationship with the course  class
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "courseId", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Course course;


    public Assignments() {
        graded = false;
    }

    public Assignments(String assTitle, String spec, String description) {
        this.assTitle = assTitle;
        this.specFileLink = spec;
        this.description = description;
    }

    public long getassignmentId() {
        return assignmentId;
    }

    public Assignments setassignmentId(long assignmentId) {
        this.assignmentId = assignmentId;
        return this;
    }

    public String getAssTitle() {
        return assTitle;
    }

    public Assignments setAssTitle(String assTitle) {
        this.assTitle = assTitle;
        return this;
    }

    

    public String getSpec() {
        return specFileLink;
    }

    public Assignments setSpec(String spec) {
        this.specFileLink = spec;
        return this;
    }

    public String getDescription() {
        return description;
    }

    public Assignments setDescription(String description) {
        this.description = description;
        return this;
    }

    // get due date
    public Date getAssignmentDueDate() {
        return assignmentDueDate;
    }

    // set due date
    public Assignments setAssignmentDueDate(Date assignmentDueDate) {
        this.assignmentDueDate = assignmentDueDate;
        return this;
    }

    // set course
    public Assignments setCourse(Course course) {
        this.course = course;
        return this;
    }

    public Course getCourse() {
        return course;
    }

    public Double getPoints() {
        return points;
    }
    public Assignments setPoints(Double points) {
        this.points = points;
        return this;
    }
    
    public String getSession() {
        return session;
    }
    public Assignments setSession(String session) {
        this.session = session;
        return this;
    }
    public boolean isGraded() {
        return graded;
    }
    public Assignments setGraded(boolean graded) {
        this.graded = graded;
        return this;
    }
    


}
