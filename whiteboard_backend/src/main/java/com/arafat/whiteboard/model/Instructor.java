package com.arafat.whiteboard.model;

import javax.persistence.*;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "instructor")

public class Instructor {
    @Id
    @SequenceGenerator(name = "instructorId_seq", sequenceName = "instructorId_seq", allocationSize = 1, initialValue = 600000)
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "instructorId_seq")

    private long instructorId;

    @Column(name = "name")
    private String name;

    @Column(name = "email", unique = true)
    private String email;


    @Column (name = "password")
    private String password;
    @Column (name = "phone")
    private String phone;

    @Column(name = "dob")
    private Date dateOfBirth;

    @Column(name = "address")
    private String address;

    @Column(name = "photo_url")
    private String photo_url;

    @Column(name = "designation")
    private String designation;

//    speciality
    @Column(name = "speciality")
    private String speciality;

    @Column(name = "ofice_number")
    private int office_number;

//    establish relationship with course  table
//    many to many
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "instructor_course",
            joinColumns = @JoinColumn(name = "instructorId"),
            inverseJoinColumns = @JoinColumn(name = "courseId"))
    private Set<Course> courses = new HashSet<>();




    public Instructor(){}

    public Instructor(long instructorId, String name, String email, String password, String phone, Date dateOfBirth, String address, String photo_url, String designation, String speciality, int office_number, Set<Course> courses) {
        this.instructorId = instructorId;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.photo_url = photo_url;
        this.designation = designation;
        this.speciality = speciality;
        this.office_number = office_number;
        this.courses = courses;
    }

    public String getName() {
        return name;
    }

    public Instructor setName(String name) {
        this.name = name;
        return this;
    }

    public String getEmail() {
        return email;
    }

    public Instructor setEmail(String email) {
        this.email = email;
        return this;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public Instructor setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }

    public String getAddress() {
        return address;
    }

    public Instructor setAddress(String address) {
        this.address = address;
        return this;
    }

    public String getPhoto_url() {
        return photo_url;
    }

    public Instructor setPhoto_url(String photo_url) {
        this.photo_url = photo_url;
        return this;
    }

    public String getDesignation() {
        return designation;
    }

    public Instructor setDesignation(String designation) {
        this.designation = designation;
        return this;
    }



    public int getOffice_number() {
        return office_number;
    }

    public Instructor setOffice_number(int office_number) {
        this.office_number = office_number;
        return this;
    }

    public long getInstructorId() {
        return instructorId;
    }

    public Instructor setInstructorId(long instructorId) {
        this.instructorId = instructorId;
        return this;
    }

    public String getPassword() {
        return password;
    }

    public Instructor setPassword(String password) {
        this.password = password;
        return this;
    }

    public String getPhone() {
        return phone;
    }

    public Instructor setPhone(String phone) {
        this.phone = phone;
        return this;
    }

    public String getSpeciality() {
        return speciality;
    }

    public Instructor setSpeciality(String speciality) {
        this.speciality = speciality;
        return this;
    }

    public Set<Course> getCourses() {
        return courses;
    }

    public Instructor setCourses(Set<Course> courses) {
        this.courses = courses;
        return this;
    }
    public Instructor addCourse(Course course){
        this.courses.add(course);
        return this;
    }
    
}

