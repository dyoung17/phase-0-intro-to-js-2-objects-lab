const employee = {name: "Daven", streetAddress: "1234 Daven St"}
function updateEmployeeWithKeyAndValue(employee, key, value){
   const newEmployee = {...employee}
    return {
       ...newEmployee,
       [key]: value
   }
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee}

    employee.name = "Sam"

    employee.streetAddress = "12 Broadway"

    return{
        ...newEmployee,
        [key]: value
    }
}
function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee}    
    
    delete newEmployee.name

    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee}   

    delete employee.name
    
    return employee
}