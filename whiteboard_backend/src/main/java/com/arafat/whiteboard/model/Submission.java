package com.arafat.whiteboard.model;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "submission")
public class Submission {
    @Id
    @SequenceGenerator(name = "submissionId_seq", sequenceName = "submissionId_seq", allocationSize = 1, initialValue = 100000)
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "submissionId_seq")
    private long submissionId;

    //establishing the relationship between submission and student
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "studentId", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    // @JsonIgnore
    private SchoolStudents student;

    //establishing the relationship between submission and student
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "assignmentId", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    // @JsonIgnore
    private Assignments assignment;



    @Column(name = "deadline")
    private Date deadline;

    @Column(name = "submission_time")
    private Date submissionTime;
    @Column(name = "total_attempts")
    private int total_attempts;

    @Column(name = "grading_status")
    private String grading_status;

    @Column(name = "sub_file_link")
    private String sub_file_link;

    public Submission() {
    }

    public long getsubmissionId() {
        return submissionId;
    }

    public Submission setsubmissionId(long submissionId) {
        this.submissionId = submissionId;
        return this;
    }

    public SchoolStudents getStudents() {
        return student;
    }

    public Submission setStudents(SchoolStudents students) {
        this.student = students;
        return this;
    }

    public Assignments getAssignments() {
        return assignment;
    }

    public Submission setAssignments(Assignments assignments) {
        this.assignment = assignments;
        return this;
    }

    public Date getDeadline() {
        return deadline;
    }

    public Submission setDeadline(Date deadline) {
        this.deadline = deadline;
        return this;
    }

    public int getTotal_attempts() {
        return total_attempts;
    }

    public Submission setTotal_attempts(int total_attempts) {
        this.total_attempts = total_attempts;
        return this;
    }

    public String getGrading_status() {
        return grading_status;
    }

    public Submission setGrading_status(String grading_status) {
        this.grading_status = grading_status;
        return this;
    }

    public String getSub_file_link() {
        return sub_file_link;
    }

    public Submission setSub_file_link(String sub_file_link) {
        this.sub_file_link = sub_file_link;
        return this;
    }

    public SchoolStudents getStudent() {
        return student;
    }

    public Submission setStudent(SchoolStudents student) {
        this.student = student;
        return this;
    }

    public Assignments getAssignment() {
        return assignment;
    }

    public Submission setAssignment(Assignments assignment) {
        this.assignment = assignment;
        return this;
    }

    public Date getSubmissionTime() {
        return submissionTime;
    }

    public Submission setSubmissionTime(Date submissionTime) {
        this.submissionTime = submissionTime;
        return this;
    }
}
