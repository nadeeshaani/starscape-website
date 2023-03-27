package com.example.backend.Payload;

public class ApiResponse {
    private String message;
    private boolean flag;

    public ApiResponse() {
        super();
    }

    public ApiResponse(String message, boolean flag) {
        this.message = message;
        this.flag = flag;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public boolean isFlag() {
        return flag;
    }

    public void setFlag(boolean flag) {
        this.flag = flag;
    }
}
