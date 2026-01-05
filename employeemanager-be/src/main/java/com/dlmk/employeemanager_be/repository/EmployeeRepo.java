package com.dlmk.employeemanager_be.repository;

import com.dlmk.employeemanager_be.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepo extends JpaRepository<Employee, Long> {
}
