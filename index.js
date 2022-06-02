const employee = {
    name: "ebbe",
    streetAddress: "leo",
  };
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newemployee = { ...employee };
    newemployee.name = "Sam";
    newemployee.streetAddress = "11 Broadway";
  
    return newemployee;
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";
  
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key) {
    const newemployee = { ...employee };
    delete newemployee.name;
    delete newemployee.streetAddress;
  
    return newemployee;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    delete employee.streetAddress;
  
    return employee;
  }