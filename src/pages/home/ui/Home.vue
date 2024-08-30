<template lang="pug">
div(class="flex flex-row place-content-center place-items-center") {{ counter }}
    Input(
       class="m-2 w-100"
       v-model.capitalize="counter"
       defaultValue="sueta"
    )
    Button(
        @click="count"
    ) Добавить
</template>

<script setup lang="ts">
import { Input } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'
import { ref,onMounted } from 'vue'
const counter = ref<string>('sueta')
const count = () => console.log(counter.value);

</script>
