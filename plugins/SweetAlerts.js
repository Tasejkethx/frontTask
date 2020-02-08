const Swal = require('sweetalert2');
const commonStyle = {
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3500,
};
const errorStyle =  {
    icon: 'error',
    background: '#e8aeb6',
    ...commonStyle,
  };
const successStyle = {
  icon: 'success',
  background: '#e4ede6',
  ...commonStyle,
};

export default class SwalAlerts {
  static employeeSuccessAdded() {
    Swal.fire({
      text: 'Сотрудник успешно добавлен',
      ...successStyle,
    });
  }

  static employeeFailAdded() {
    Swal.fire({
      text: 'Не удалось создать сотрудника. Возможно был удален отдел',
      ...errorStyle,
    });
  }

  static departmentNotFound() {
    Swal.fire({
      text: 'Не удалось найти отдел.',
      ...errorStyle,
    });
  }

  static employeeNotFound() {
    Swal.fire({
      text: 'Не удалось найти сотрудника. Возможно он был удален',
      ...errorStyle,
    });
  }

  static employeeSuccessUpdated() {
    Swal.fire({
      text: 'Сотрудник успешно отредактирован',
      ...successStyle,
    });
  }

  static errorMessage(errorText) {
    Swal.fire({
      text: errorText,
      ...errorStyle,
    });
  }

  static departmentSuccessAdded() {
    Swal.fire({
      text: 'Отдел успешно добавлен',
      ...successStyle,
    });
  }

  static departmentSuccessUpdated() {
    Swal.fire({
      text: 'Отдел успешно отредактирован',
      ...successStyle,
    });
  }
}
