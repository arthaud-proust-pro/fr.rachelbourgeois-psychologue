document.addEventListener('alpine:init', () => {
    Alpine.data('menu', () => ({
        isOpen: false,

        toggleMenu() {
            this.isOpen = ! this.isOpen
        },

        closeMenu() {
            this.isOpen = false
        },
    }))
})