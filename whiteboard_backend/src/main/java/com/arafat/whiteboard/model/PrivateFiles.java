package com.arafat.whiteboard.model;


import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "private_files")
public class PrivateFiles {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long fileId;

    @Column(name = "file_type")
    private String fileType;

    @Column(name = "file_url")
    private String file_url;

    @Column(name = "upload_time")
    private Date uploadTime;

    public PrivateFiles(String fileType, String file_url, Date uploadTime) {
        this.fileType = fileType;
        this.file_url = file_url;
        this.uploadTime = uploadTime;
    }
    public  PrivateFiles(){}

    public long getfileId() {
        return fileId;
    }

    public PrivateFiles setfileId(long fileId) {
        this.fileId = fileId;
        return this;
    }

    public String getFileType() {
        return fileType;
    }

    public PrivateFiles setFileType(String fileType) {
        this.fileType = fileType;
        return this;
    }

    public String getFile_url() {
        return file_url;
    }

    public PrivateFiles setFile_url(String file_url) {
        this.file_url = file_url;
        return this;
    }

    public Date getUploadTime() {
        return uploadTime;
    }

    public PrivateFiles setUploadTime(Date uploadTime) {
        this.uploadTime = uploadTime;
        return this;
    }
}
