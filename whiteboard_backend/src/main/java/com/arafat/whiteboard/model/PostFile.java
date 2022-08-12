package com.arafat.whiteboard.model;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
@Table(name = "post_file")
public class PostFile {
    @Id
    @SequenceGenerator(name = "fileId_seq", sequenceName = "fileId_seq", allocationSize = 1, initialValue = 500000)
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "fileId_seq")

    private long postFileId;

    @Column(name = "file_name")
    private String fileName;

    @Column(name = "file_path")
    private String filePath;

    @Column(name = "file_type")
    private String fileType;

//    establish  many to one with Post model
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "postId", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Post post;

    public PostFile() {
    }

    public PostFile(String fileName, String filePath, String fileType) {
        this.fileName = fileName;
        this.filePath = filePath;
        this.fileType = fileType;
    }

    public long getPostFileId() {
        return postFileId;
    }

    public String getFileName() {
        return fileName;
    }

    public PostFile setFileName(String fileName) {
        this.fileName = fileName;
        return this;
    }

    public String getFilePath() {
        return filePath;
    }

    public PostFile setFilePath(String filePath) {
        this.filePath = filePath;
        return this;
    }

    public String getFileType() {
        return fileType;
    }

    public PostFile setFileType(String fileType) {
        this.fileType = fileType;
        return this;
    }

    public Post getPost() {
        return post;
    }

    public PostFile setPost(Post post) {
        this.post = post;
        return this;
    }



}
