package com.example.backend.Model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int user_id;

    @Column(nullable = false)
    private String user_name;

    @Column(unique = true, nullable = false)
    private String user_email;

    @Column(nullable = false)
    private String user_password;

    @Column(nullable = false)
    private String user_address;

    @Column(nullable = false)
    private String user_gender;

    @Column(nullable = false, length = 10)
    private String user_contact;

    @Column(name="AccountCreatedDate")
    private Date date;

    private boolean active;

    public User() {
        super();
    }

    public User(int user_id, String user_name, String user_email, String user_password, String user_address, String user_gender, String user_contact, Date date, boolean active) {
        this.user_id = user_id;
        this.user_name = user_name;
        this.user_email = user_email;
        this.user_password = user_password;
        this.user_address = user_address;
        this.user_gender = user_gender;
        this.user_contact = user_contact;
        this.date = date;
        this.active = active;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getUser_email() {
        return user_email;
    }

    public void setUser_email(String user_email) {
        this.user_email = user_email;
    }

    public String getUser_password() {
        return user_password;
    }

    public void setUser_password(String user_password) {
        this.user_password = user_password;
    }

    public String getUser_address() {
        return user_address;
    }

    public void setUser_address(String user_address) {
        this.user_address = user_address;
    }

    public String getUser_gender() {
        return user_gender;
    }

    public void setUser_gender(String user_gender) {
        this.user_gender = user_gender;
    }

    public String getUser_contact() {
        return user_contact;
    }

    public void setUser_contact(String user_contact) {
        this.user_contact = user_contact;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }
}
