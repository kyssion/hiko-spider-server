package org.hiko.spider.model;

public class SpiderModel {
    private String url;
    private String httpMethod;

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getHttpMethod() {
        return httpMethod;
    }

    public void setHttpMethod(String httpMethod) {
        this.httpMethod = httpMethod;
    }
}

class Phone {
    // 拨通电话
    public void call(){}

    // 通话中
    public void talk(){}
    // 结束对话
    public void end(){}
}

interface PhoneAgreement{
    // 开启通信管道
    public void open();

    // 关闭通信管道
    public void close();
}

interface PhoneMessage{
    void tale();
}

class PhoneV2 implements PhoneAgreement, PhoneMessage{

    @Override
    public void open() {

    }

    @Override
    public void close() {

    }

    @Override
    public void tale() {

    }
}


interface ICar{}

class CarFengtian implements ICar{}
class CarBenchi implements  ICar{}

class Driver{
    public void Drive(ICar car){}
}

class Run{
    public static void main(String[] args) {
        Driver driver = new Driver();
        ICar car1 = new CarBenchi();
        ICar car2 = new CarFengtian();
        driver.Drive(car1);
        driver.Drive(car2);
    }
}


interface IBookStatus{
    // 便宜
    void cheap();
    // 昂贵
    void expensive();
    // 价格适中
    void moderatePrice();
}

class Book implements IBookStatus{

    @Override
    public void cheap() {

    }

    @Override
    public void expensive() {

    }

    @Override
    public void moderatePrice() {

    }
}
