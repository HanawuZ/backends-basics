package com.example.springbe.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.springbe.models.Employee;
import java.util.ArrayList;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{
    ArrayList<Employee> findAllEmployee();
}