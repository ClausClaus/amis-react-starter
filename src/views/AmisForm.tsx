import Schema2component from '@/utils/Schema2component';
import { Schema } from 'amis/lib/types';

const schema: Schema = {
  type: 'page',
  body: [
    {
      type: 'form',
      initApi: '/api/users',
      api: '/api/form',
      body: [
        {
          type: 'input-text',
          name: 'name',
          label: '姓名：',
        },
        {
          type: 'input-email',
          name: 'word',
          label: '邮箱：',
        },
        {
          type: 'wrapper',
          label: '参数',
          body: 'word ${word}',
        },
      ],
    },
  ],
};
export default Schema2component(schema);
