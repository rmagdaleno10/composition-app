<script lang="ts" src="./CounterView.ts">
// import { ref } from 'vue';

// const counter = ref(10);

// const increase = () => {
//     counter.value++;
// }

// export default defineComponent({

    
//     setup() {
//         const counter = ref(20);
        
//         const increase = () => {
//             counter.value++;
//         }

//         return {
//             counter,
//             increase
//         }
//     }
// });

</script>

<template>
    <div>
        <h1>Counter View: {{ counter }}</h1>
        <button  @click="increase">+1</button>
    </div>
</template>