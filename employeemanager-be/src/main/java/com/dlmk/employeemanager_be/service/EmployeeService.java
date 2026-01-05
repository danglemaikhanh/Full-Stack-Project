package com.dlmk.employeemanager_be.service;

import com.dlmk.employeemanager_be.exception.EmployeeNotFoundException;
import com.dlmk.employeemanager_be.model.Employee;
import com.dlmk.employeemanager_be.repository.EmployeeRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.*;

@Service
@RequiredArgsConstructor
public class EmployeeService {
    private final EmployeeRepo employeeRepo;

    public Employee addEmployee(Employee employee) {
        employee.setEmployeeCode(UUID.randomUUID().toString());
        return employeeRepo.save(employee);
    }

    public List<Employee> findAllEmployees() {
        return employeeRepo.findAll();
    }

    public Employee findEmployeeById(Long id) {
        return employeeRepo.findById(id)
                .orElseThrow(() -> new EmployeeNotFoundException("Employee by this " + id + " was not found"));
    }

    public Employee updateEmployee(Long id, Employee employee) {
        Employee updatedEmployee = employeeRepo.findById(id)
                .orElseThrow(() -> new EmployeeNotFoundException("No Employee by this " + id));
        updatedEmployee.setName(employee.getName());
        updatedEmployee.setEmail(employee.getEmail());
        updatedEmployee.setPhone(employee.getPhone());
        updatedEmployee.setImageUrl(employee.getImageUrl());
        return employeeRepo.save(updatedEmployee);
    }

    public void deleteEmployee(Long id) {
        if(employeeRepo.findById(id).isEmpty()) {
            throw new EmployeeNotFoundException("Employee by this " + id + " was not found");
        }
        employeeRepo.deleteById(id);
    }
}
