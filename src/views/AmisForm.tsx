import Schema2component from '@/utils/Schema2component';
import { Schema } from 'amis/lib/types';
// https://github.com/baidu/amis/issues/170
import '@/components/DataManage';

const schema: Schema = {
  type: 'data-manage',
  tip: 'xxxxx',
  body: [
    {
      type: 'page',
      body: [
        {
          type: 'form',
          debug: true,
          initApi: '/api/users',
          api: '/api/form',
          body: [
            {
              type: 'input-text',
              name: 'name',
              label: '姓名：',
              value: 'SmileXin',
            },
            {
              type: 'input-email',
              name: 'word',
              label: '邮箱：',
              value: 'weixinla@gmail.com',
            },
            {
              type: 'wrapper',
              label: '参数',
              body: 'word ${word}',
            },
          ],
        },
      ],
    },
  ],
};
export default Schema2component(schema);
