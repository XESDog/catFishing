export function showLoading() {
    let loading = document.getElementsByClassName('page-loading')[0];
    loading.style.display = 'block';
}

export function hideLoading() {
    let loading = document.getElementsByClassName('page-loading')[0];
    loading.style.display = 'none';
}