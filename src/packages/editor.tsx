import { computed, defineComponent } from 'vue';
import EditorBlock from './editor-block'
import './editor.css';

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true,
    },
  },
  setup({modelValue: {container, blocks}}) {
    const containerStyle = computed(() => ({
      width: `${container.width}px`,
      height: `${container.height}px`,
    }));

    return () => <div class='editor'>
      <div class='editor-top'>菜单栏</div>
      <div class='editor-left'>左侧物料区</div>
      <div class='editor-right'></div>
      <div class='editor-container'>
        {/* 负责滚动条 */}
        <div class="canvas" >
          <div class="content" style={containerStyle.value}  >
            {blocks.map((block: {
              key: string;
              type: string;
            }) => (
              <EditorBlock key={block.key} block={block} />
            ))}
          </div>
        </div>
      </div>
    </div>;
  },
});
