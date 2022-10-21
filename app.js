const app = Vue.createApp({
    data() {
        return {
            perspective: 500,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
        }
    },
    computed: {
        addedRotate() {
            return {
                transform: `perspective(${this.perspective}px)
                rotateX(${this.rotateX}deg)
                rotateY(${this.rotateY}deg)
                rotateZ(${this.rotateZ}deg)
                `
            }
        }
    },
    methods: {
        reset() {
            this.perspective = 500
            this.rotateX = 0
            this.rotateY = 0
            this.rotateZ = 0
        },
        async copy() {
            let text = `transform:${this.addedRotate.transform}`
            await navigator.clipboard.writeText(text)

            alert('CSS copied to Clipboard!')
        },
        randomColor() {
            newColor = Math.floor(Math.random() * 16777215).toString(16);

            document.documentElement.style.setProperty('--color', newColor);
        }
    },
    created() {
        this.randomColor()
    },
}).mount('#app')