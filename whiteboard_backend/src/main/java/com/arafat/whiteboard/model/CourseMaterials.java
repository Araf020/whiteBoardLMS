package com.arafat.whiteboard.model;

import javax.persistence.*;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.Date;

@Entity
@Table(name = "course_materials")
public class CourseMaterials {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long materialId;

    @Column(name = "material_title", nullable = true)
    private String materialTitle;

    @Column(name = "file_type")
    private String fileType;

    @Column(name = "file_location")
    private String fileLocation;

    @Column(name = "create_time")
    private Date createTime;

    // establish many to one relation with course
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "courseId", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Course course;



    public CourseMaterials(){

    }

    public CourseMaterials(String fileType, String file_location, Date createTime) {
        this.fileType = fileType;
        this.fileLocation = file_location;
        this.createTime = createTime;
    }

    public long getmaterialId() {
        return materialId;
    }

    public CourseMaterials setmaterialId(long materialId) {
        this.materialId = materialId;
        return this;
    }

    public String getFileType() {
        return fileType;
    }

    public CourseMaterials setFileType(String fileType) {
        this.fileType = fileType;
        return this;
    }

    public String getFileLocation() {
        return fileLocation;
    }

    public CourseMaterials setFileLocation(String fileLocation) {
        this.fileLocation = fileLocation;
        return this;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public CourseMaterials setCreateTime(Date createTime) {
        this.createTime = createTime;
        return this;
    }

    public CourseMaterials setCourse(Course course){
            this.course = course;
            return this;
    }
    public Course getCourse(){
        return this.course;
    }

    

    public String getMaterialTitle(){
        return this.materialTitle;
    }
    public CourseMaterials setMaterialTitle(String materialTitle){
        this.materialTitle = materialTitle;
        return this;
    }


}
