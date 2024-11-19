import { computed, defineComponent } from 'vue';

export default defineComponent({
  props: ['block'],
  setup({ block }) {
    console.log('🦊 ~ file: editor-block.tsx:11', block);
    const blockStyle = computed(() => ({
      top: `${block.top}px`,
      left: `${block.left}px`,
      zIndex: block.zIndex,
    }));
    return () => (
      <div class="editor-block" style={blockStyle.value}>
        saber
      </div>
    );
  },
});
