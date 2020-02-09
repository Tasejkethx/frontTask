import SweetAlerts from '../plugins/SweetAlerts';

export default function({store,redirect}){
  if(store.getters['departments/departments'].length === 0){
    redirect('/departments');
    SweetAlerts.accessMessage();
  }
}
