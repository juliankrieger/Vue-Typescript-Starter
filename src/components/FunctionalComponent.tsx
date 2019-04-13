import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import {CreateElement} from "vue";

@Component
export default class extends Vue {
	render (h: CreateElement) {
		return (
			<div>
				<p>This is a functional component.</p>
			</div>
		);
	}
}