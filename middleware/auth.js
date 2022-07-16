export default function ({ store, redirect }) {
    if (!store.getters.hasCredentials) {
        redirect('/?message=login')
    }
}