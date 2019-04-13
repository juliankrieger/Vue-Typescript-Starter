import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import {CreateElement} from "vue";

@Component
export default class extends Vue {
    render (h: CreateElement) {
        return (
            <div>
                This is a class component.
            </div>
        );
    }
}