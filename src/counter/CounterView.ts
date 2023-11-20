import { defineComponent, ref } from "vue";

export default defineComponent({
    setup() {
        const counter = ref(20);
        
        const increase = () => {
            counter.value++;
        }

        return {
            counter,
            increase
        }
    }
});