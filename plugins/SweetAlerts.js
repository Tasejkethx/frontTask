const Swal = require('sweetalert2');
const commonStyle = {
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3500,
};
const errorStyle = {
  icon: 'error',
  background: '#e8aeb6',
  ...commonStyle,
};
const successStyle = {
  icon: 'success',
  background: '#e4ede6',
  ...commonStyle,
};
const warningStyle = {
  icon: 'warning',
  background: '#f5f4bf',
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

  static departmentDeleteMessage(status) {
    if (status === 1) {
      Swal.fire({
        text: 'Отдел успешно удален',
        ...successStyle,
      });
    } else if (status === 2) {
      Swal.fire({
        text: 'Невозможно удалить отдел в котором есть сотрудники',
        ...errorStyle,
      });
    } else {
      Swal.fire({
        text: 'Ошибка. Возможно отдел уже был удален',
        ...errorStyle,
      });
    }
  }

  static employeeDeleteMessage(status) {
    if (status === 1) {
      Swal.fire({
        text: 'Сотрудник успешно удален',
        ...successStyle,
      });
    } else if (status === 0) {
      Swal.fire({
        text: 'Ошибка. Возможно сотрудник уже был удален',
        ...errorStyle,
      });
    }
  }

  static accessMessage() {
    Swal.fire({
      text: 'Сперва добавьте отделы',
      ...warningStyle,
    });
  }
}
