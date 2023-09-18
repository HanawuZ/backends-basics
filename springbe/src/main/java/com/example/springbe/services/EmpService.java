package com.example.springbe.services;
import java.util.ArrayList;
import com.example.springbe.models.Employee;

public interface EmpService {
    ArrayList<Employee> findAllEmployee();
    Employee findAllEmployeeByID(long id);
    void addEmployee();
    void deleteAllData();
}