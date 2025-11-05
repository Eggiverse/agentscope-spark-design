import {
  Decoration,
  DecorationSet,
  EditorView,
  MatchDecorator,
  ViewPlugin,
  ViewUpdate,
  WidgetType,
} from '@codemirror/view';

// Placeholder Widget 类
class PlaceholderWidget extends WidgetType {
  constructor(readonly name: string) {
    super();
  }

  eq(other: PlaceholderWidget) {
    return other.name == this.name;
  }

  toDOM() {
    let wrap = document.createElement('span');
    wrap.setAttribute('aria-hidden', 'true');
    wrap.className = 'cm-prompt-var';
    wrap.textContent = `\${${this.name}}`;
    return wrap;
  }

  ignoreEvent() {
    return false;
  }
}

// Placeholder 匹配器
const placeholderMatcher = new MatchDecorator({
  regexp: /\$\{(\w+)\}/g,
  decoration: (match) =>
    Decoration.replace({
      widget: new PlaceholderWidget(match[1]),
    }),
});

// Placeholder 插件
const placeholders = ViewPlugin.fromClass(
  class {
    placeholders: DecorationSet;

    constructor(view: EditorView) {
      this.placeholders = placeholderMatcher.createDeco(view);
    }

    update(update: ViewUpdate) {
      this.placeholders = placeholderMatcher.updateDeco(
        update,
        this.placeholders,
      );
    }
  },
  {
    decorations: (instance) => instance.placeholders,
    provide: (plugin) =>
      EditorView.atomicRanges.of((view) => {
        return view.plugin(plugin)?.placeholders || Decoration.none;
      }),
  },
);

export default [placeholders];
