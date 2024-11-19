import { Button, Input } from 'ant-design-vue';

function createEditorConfig() {
  const componentList: unknown[] = [];
  const componentMap: Record<string, unknown> = {};

  return {
    componentList,
    componentMap,
    register: (val: unknown) => {
      console.log('🦊 ~ file: editor-config.tsx:9', val);
    },
  };
}

const registerConfig = createEditorConfig();

registerConfig.register({
  label: '文本',
  preview: () => '预览按钮',
  render: () => '渲染按钮',
  key: 'text',
});

registerConfig.register({
  label: '按钮',
  preview: () => <Button>预览按钮</Button>,
  render: () => <Button>渲染按钮</Button>,
  key: 'button',
});

registerConfig.register({
  label: '输入框',
  preview: () => <Input placeholder="预览输入框" />,
  render: () => <Input placeholder="渲染输入框" />,
  key: 'input',
});
