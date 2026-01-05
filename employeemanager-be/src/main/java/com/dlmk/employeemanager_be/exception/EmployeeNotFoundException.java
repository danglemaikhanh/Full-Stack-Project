package com.dlmk.employeemanager_be.exception;

public class EmployeeNotFoundException extends RuntimeException {
    public EmployeeNotFoundException(String massage) {
        super(massage);
    }
}
