package com.example.backend.Payload;

public class ProductDTO {
    private int product_id;
    private String product_name;
    private double product_price;
    private String product_description;

    private boolean status; //Stores whether product is in stock or not
    private int product_quantity;
    private boolean live;

    private String product_imageName;

    public int getProduct_id() {
        return product_id;
    }

    public void setProduct_id(int product_id) {
        this.product_id = product_id;
    }

    public String getProduct_name() {
        return product_name;
    }

    public void setProduct_name(String product_name) {
        this.product_name = product_name;
    }

    public double getProduct_price() {
        return product_price;
    }

    public void setProduct_price(double product_price) {
        this.product_price = product_price;
    }

    public String getProduct_description() {
        return product_description;
    }

    public void setProduct_description(String product_description) {
        this.product_description = product_description;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public int getProduct_quantity() {
        return product_quantity;
    }

    public void setProduct_quantity(int product_quantity) {
        this.product_quantity = product_quantity;
    }

    public boolean isLive() {
        return live;
    }

    public void setLive(boolean live) {
        this.live = live;
    }

    public String getProduct_imageName() {
        return product_imageName;
    }

    public void setProduct_imageName(String product_imageName) {
        this.product_imageName = product_imageName;
    }

    public ProductDTO() {
        super();
    }

    public ProductDTO(int product_id, String product_name, double product_price, String product_description, boolean status, int product_quantity, boolean live, String product_imageName) {
        this.product_id = product_id;
        this.product_name = product_name;
        this.product_price = product_price;
        this.product_description = product_description;
        this.status = status;
        this.product_quantity = product_quantity;
        this.live = live;
        this.product_imageName = product_imageName;
    }
}
