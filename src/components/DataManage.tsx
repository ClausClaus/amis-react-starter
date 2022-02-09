import React from 'react';
import { Renderer, ScopedContext } from 'amis';

interface Props {
  [propName: string]: any;
}

const DataManage: React.FC<Props> = props => {
  console.log('props', props);
  const { tip, body, render } = props;
  return (
    <div>
      <div>这里是tip：{tip}</div>
      {body ? (
        <div className="container">
          {render('body', body, {
            // 这里的信息会作为 props 传递给子组件，一般情况下都不需要这个
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Renderer({
  type: 'data-manage',
  storeType: 'onlyStore',
})(DataManage);
