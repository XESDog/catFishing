export function showLoading() {
    let loading = document.getElementsByClassName('page-loading')[0];
    loading.style.visibility = 'visible';


}

export function hideLoading() {
    let loading = document.getElementsByClassName('page-loading')[0];
    loading.style.visibility = 'hidden';

}