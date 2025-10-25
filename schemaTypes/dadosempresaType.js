import {defineField, defineType} from 'sanity'

export const dadosempresaType = defineType({
  name: 'dados_empresa',
  title: 'Informações da Empresa',
  type: 'document',
  fields: [
    defineField({
      name: 'rua',
      title: 'Rua',
      type: 'string',
      description: 'Digite o nome da rua.',
    }),
    defineField({
      name: 'numero',
      title: 'Número',
      type: 'number',
      description: 'Digite o número da instituição.',
    }),
    defineField({
      name: 'bairro',
      title: 'Bairro',
      type: 'string',
      description: 'Digite o bairro onde está localizado.',
    }),
    defineField({
      name: 'cidade',
      title: 'Cidade',
      type: 'string',
      description: 'Digite a cidade onde está localizada.',
    }),
    defineField({
      name: 'estado',
      title: 'Estado',
      type: 'string',
      description: 'Digite o estado onde está localizado.',
    }),
    defineField({
      name: 'cep',
      title: 'CEP',
      type: 'string',
      description: 'Digite o CEP.',
    }),
    defineField({
      name: 'telefone',
      title: 'Telefone',
      type: 'string',
      description: 'Insira o telefone da instituição.',
    }),
    defineField({
      name: 'email',
      title: 'E-mail',
      type: 'string',
      description: 'Insira o e-mail da instituição.',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'string',
      description: 'Insira o link para o instagram da instituição.',
    }),
    defineField({
      name: 'youtube',
      title: 'Youtube',
      type: 'string',
      description: 'Insira o link para o youtube da instituição.',
    }),
    defineField({
      name: 'whatsapp',
      title: 'Whatsapp',
      type: 'string',
      description: 'Insira o link para o whatsapp da insituição.',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'string',
      description: 'Insira o link para o facebook da instituição.',
    }),
    defineField({
      name: 'tiktok',
      title: 'TikTok',
      type: 'string',
      description: 'Insira o link para o tiktok da instituição.',
    }),

  ],
})
