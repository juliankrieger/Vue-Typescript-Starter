<template>
    <p>This is a Vue Component</p>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import {CreateElement} from "vue";

@Component
export default class HelloWorld extends Vue {
}
</script>
