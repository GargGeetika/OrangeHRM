

export const adminFormSelectors = {
    userRole: () =>
      cy.contains('label', 'User Role').parent().parent().find('.oxd-select-text-input'),
    
    employeeName: () =>
      cy.contains('label', 'Employee Name').parent().parent().find('input[placeholder="Type for hints..."]'),
    
    status: () =>
      cy.contains('label', 'Status').parent().parent().find('.oxd-select-text-input'),
  
    username: () =>
      cy.contains('label', 'Username').parent().parent().find('input.oxd-input'),
  
    password: () =>
      cy.contains('label', 'Password').parent().parent().find('input[type="password"]'),
  
    confirmPassword: () =>
      cy.contains('label', 'Confirm Password').parent().parent().find('input[type="password"]'),
  
    cancelButton: () =>
      cy.get('button.oxd-button--ghost'),
  
    saveButton: () =>
      cy.get('button[type="submit"]'),
  };
  