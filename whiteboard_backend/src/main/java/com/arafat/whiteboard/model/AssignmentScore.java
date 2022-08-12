package com.arafat.whiteboard.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
@Table(name = "assignment_score")

public class AssignmentScore {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long assignmentScoreId;

    @Column(name = "marks")
    private Double marks;

    @Column(name="remarks")
    private String remarks;

//    establish one-to-many relationship with Assignment
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "assignmentId", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Assignments assignment;

//    establish one to many relation ship with student

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "studentId", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private SchoolStudents schoolStudent;





}
