import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksSsylka extends Struct.ComponentSchema {
  collectionName: 'components_blocks_ssylka';
  info: {
    description: '';
    displayName: '\u0421\u0441\u044B\u043B\u043A\u0430';
    icon: 'cursor';
  };
  attributes: {
    link: Schema.Attribute.Text;
    main: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.ssylka': BlocksSsylka;
    }
  }
}
