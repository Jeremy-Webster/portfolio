export default {
    data() {
        return {
            isVisible: false,
            intersect: { observerOptions: { threshold: 0.5 }, onChange: (isIn) => { if (isIn) { this.isVisible = true; } }, disposeWhen: true }
        }
    }
}