import {defineField, defineType} from 'sanity'

export const dadosempresaType = defineType({
  name: 'dados_empresa',
  title: 'Informações da Empresa',
  type: 'document',
  fields: [
    defineField({
      name: 'rua',
      type: 'string',
    }),
    defineField({
      name: 'numero',
      type: 'number',
    }),
    defineField({
      name: 'bairro',
      type: 'string',
    }),
    defineField({
      name: 'cidade',
      type: 'string',
    }),
    defineField({
      name: 'estado',
      type: 'string',
    }),
    defineField({
      name: 'cep',
      type: 'string',
    }),
    defineField({
      name: 'telefone',
      type: 'string',
    }),
    defineField({
      name: 'email',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      type: 'string',
    }),
    defineField({
      name: 'youtube',
      type: 'string',
    }),
    defineField({
      name: 'whatsapp',
      type: 'string',
    }),
    defineField({
      name: 'facebook',
      type: 'string',
    }),
    defineField({
      name: 'tiktok',
      type: 'string',
    }),

  ],
})
