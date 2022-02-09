import React from 'react';
import { Schema } from 'amis/lib/types';
import AmisComponent from '@/components/AmisComponent';

export default function (schema: Schema) {
  return (props: any) => {
    return <AmisComponent schema={schema} {...props}></AmisComponent>;
  };
}
