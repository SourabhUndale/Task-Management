package net.javaguides.emsbackend.service.impl;

import lombok.AllArgsConstructor;
import net.javaguides.emsbackend.dto.EmployeeDto;
import net.javaguides.emsbackend.entity.Employee;
import net.javaguides.emsbackend.mapper.Employeemapper;
import net.javaguides.emsbackend.service.EmployeeService;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeServiceImpl employeeRepository;
    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = Employeemapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.sa
        return Employeemapper.mapToemployeeDto(savedEmployee);
    };




}
