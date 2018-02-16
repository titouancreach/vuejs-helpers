
function functionalComponent(renderFn, props, components = {}) {
  const {name} = renderFn;
  return {
    functional: true,
    props,
    name,
    components,
    render(h, ctx) {
      return renderFn(h)(
        ctx.props,
        ctx.children,
        ctx.data.scopedSlots);
    }
  };
};

export {functionalComponent};

