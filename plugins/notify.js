export default (context, inject) => {
  /* data = {text, link ....} */
  const notify = {
    error: (data) => context.store.dispatch('notificationStore/showErrorMessage', data),
    success: (data) => context.store.dispatch('notificationStore/showSuccessMessage', data),
    warning: (data) => context.store.dispatch('notificationStore/showWarningMessage', data),
    info: (data) => context.store.dispatch('notificationStore/showMessage', data)
  }
  // Inject $notify
  inject('notify', notify)
  context.$notify = notify
}
