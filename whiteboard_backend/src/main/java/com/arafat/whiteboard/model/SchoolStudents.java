package com.arafat.whiteboard.model;

import javax.persistence.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "school_students")
public class SchoolStudents {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long studentId;

    @Column(name = "roll", unique = true)
    private int roll;

    @Column(name = "name")
    private String name;

    @Column(name = "f_name")
    private String father_name;

    @Column(name = "m_name")
    private String mother_name;

    @Column(name = "email", unique = true)
    private String email;
    @Column(name = "password")
    private String password;

    @Column(name = "phone")
    private String phone;

    //format of date is dd-mm-yyyy
    @Column(name = "dob", columnDefinition = "DATE")
    //format of date is dd-mm-yyyy
    private Date dateOfBirth;



    @Column(name = "address")
    private String address;

    @Column(name = "photo_url")
    private String photo_url;

    @Column(name = "grade_no")
    private String grade;

    @Column(name = "shift")
    private String shift;

    @Column(name = "section")
    private String section;



    @Column(name = "session")
    private String session;

    @Column(name = "cgpa")
    private double cgpa;



    @Column(name = "is_regular")
    private boolean is_regular;

    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL)
    private List<Submission> submissionList;

//    establish A many to many relationship with the course class
    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name = "course_student",
            joinColumns = @JoinColumn(name = "studentId"),
            inverseJoinColumns = @JoinColumn(name = "courseId")
    )
    private List<Course> courseList;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name = "notice_student",
            joinColumns = @JoinColumn(name = "studentId"),
            inverseJoinColumns = @JoinColumn(name = "noticeId")
    )
    private List<CourseNotice> noticeList;
    

    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            })
    @JoinTable(name = "std_course",
            joinColumns = { @JoinColumn(name = "studentId") },
            inverseJoinColumns = { @JoinColumn(name = "courseId") })
    private Set<Course> courses = new HashSet<>();



    public SchoolStudents(){

    }



    public SchoolStudents(int roll , String name, Date dateOfBirth, String grade, String shift,boolean is_regular) {

        this.roll = roll;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.grade = grade;
        this.shift = shift;
        this.is_regular = is_regular;
    }



    public long get_id() {
        return studentId;
    }

    public int getRoll() {
        return roll;
    }

    public SchoolStudents setRoll(int roll) {
        this.roll = roll;
        return this;
    }

    public String getName() {
        return name;
    }

    public SchoolStudents setName(String name) {
        this.name = name;
        return this;
    }

    public String getEmail() {
        return email;
    }

    public SchoolStudents setEmail(String email) {
        this.email = email;
        return this;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public SchoolStudents setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }

    public String getAddress() {
        return address;
    }

    public SchoolStudents setAddress(String address) {
        this.address = address;
        return this;
    }

    public String getPhoto_url() {
        return photo_url;
    }

    public SchoolStudents setPhoto_url(String photo_url) {
        this.photo_url = photo_url;
        return this;
    }




    public double getCgpa() {
        return cgpa;
    }

    public SchoolStudents setCgpa(double cgpa) {
        this.cgpa = cgpa;
        return this;
    }

    public String getSession() {
        return session;
    }

    public SchoolStudents setSession(String session) {
        this.session = session;
        return this;
    }

    public boolean is_regular() {
        return is_regular;
    }

    public SchoolStudents setIs_regular(boolean is_regular) {
        this.is_regular = is_regular;
        return this;
    }

    public String getFather_name() {
        return father_name;
    }

    public SchoolStudents setFather_name(String father_name) {
        this.father_name = father_name;
        return  this;
    }

    public String getMother_name() {
        return mother_name;
    }

    public SchoolStudents setMother_name(String mother_name) {
        this.mother_name = mother_name;
        return this;
    }

    public String getGrade() {
        return grade;
    }

    public SchoolStudents setGrade(String grade) {
        this.grade = grade;
        return this;
    }

    public String getShift() {
        return shift;
    }

    public SchoolStudents setShift(String shift) {
        this.shift = shift;
        return this;
    }

    public String getPhone() {
        return phone;
    }

    public SchoolStudents setPhone(String phone) {
        this.phone = phone;
        return this;
    }

    public String getSection() {
        return section;
    }

    public SchoolStudents setSection(String section) {
        this.section = section;
        return this;
    }

    public String getPassword() {
        return password;
    }
    public SchoolStudents setPassword(String password){
        this.password = password;
        return this;
    }

    public List<CourseNotice> getNoticeList() {
        return noticeList;
    }
    public CourseNotice addNotice(CourseNotice notice){
        if(noticeList == null){
            noticeList = new ArrayList<>();
        }
        noticeList.add(notice);
        return notice;
    }



}
