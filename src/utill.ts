import Swal, { SweetAlertIcon } from 'sweetalert2'

export const showAlert = (titleText = 'something happend', alertType?: SweetAlertIcon): void => {
  Swal.fire({
    titleText,
    position: 'top-end',
    timer: 3000,
    timerProgressBar: true,
    toast: true,
    showCancelButton: false,
    showConfirmButton: true,
    cancelButtonText: 'Dismiss',
    icon: alertType,
    showClass: {
      popup: 'swal2-noanimation',
      backdrop: 'swal2-noanimation'

    },
    hideClass: {
      popup: '',
      backdrop: '',
    }
  })


}