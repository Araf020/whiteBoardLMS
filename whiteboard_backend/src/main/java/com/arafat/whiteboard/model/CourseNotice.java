package com.arafat.whiteboard.model;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.Date;

import javax.persistence.*;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Table(name = "course_notice")
public class CourseNotice {
    @Id
    @SequenceGenerator(name = "notice_seq", sequenceName = "notice_seq", allocationSize = 1, initialValue = 300000)
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "notice_seq")

    private long noticeId;

    @Column(name = "notice_title")
    private String title;

    @Column(name = "notice_description")
    private String description;

    @Column(name = "notice_date")
    private Date date;

    @Column(name = "notice_file_link")
    private String fileLink;

    // estabsh many to one relationship with the course class
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "courseId", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Course course;

    

    public CourseNotice() {
    }

    // setters and getters
    public long getNoticeId() {
        return noticeId;
    }
    public void setNoticeId(long noticeId) {
        this.noticeId = noticeId;
    }
    public String getTitle() {
        return title;
    }
    public CourseNotice setTitle(String title) {
        this.title = title;
        return this;
    }
    public String getDescription() {
        return description;
    }
    public CourseNotice setDescription(String description) {
        this.description = description;
        return this;
    }
    public Date getDate() {
        return date;
    }
    public CourseNotice setDate(Date date) {
        this.date = date;
        return this;
    }

    public Course getCourse() {
        return course;
    }
    public CourseNotice setCourse(Course course) {
        this.course = course;
        return this;
    }

    public String getFileLink() {
        return fileLink;
    }
    public CourseNotice setFileLink(String fileLink) {
        this.fileLink = fileLink;
        return this;
    }





    
}
