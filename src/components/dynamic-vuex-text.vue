<script>
import store from "../store.js";
export default {
  functional: true,
  props: {
    binding: {
      type: String,
      required: true
    }
  },
  render(h, context) {
    return h("span", store.state[context.props.binding]);
  }
};
</script>
