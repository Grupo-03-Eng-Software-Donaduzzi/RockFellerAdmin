import {defineField, defineType} from 'sanity'

export const planosTypes = defineType({ 
  name: 'planos', 
  title: 'Planos', 
  type: 'document',
  fields: [
    defineField({
      name: 'nome',
      title: 'Nome',
      type: 'string',
      description: 'Digite o nome do plano.',
    }),
    defineField({
      name: 'valor',
      title: 'Valor',
      type: 'number',
      description: 'Digite o valor do plano.',
    }),
    defineField({
      name: 'descricao',
      title: 'Descrição',
      type: 'string',
      description: 'Crie uma descrição para o plano.',
    }),
    defineField({
        name: 'imagem',
      title: 'Imagem',
        type: 'image',
      description: 'Envie a imagem que será demonstrada pelo plano.',
    }),
    defineField({
      name: 'etapas',
      title: 'Etapas',
      type: 'array',
      of: [{type: 'object',
          fields: [
            {
              name: 'etapaNome',
              title: 'Nome da Etapa',
              type: 'string',
            },
            {
              name: 'etapaDescricao',
              title: 'Descrição da Etapa',
              type: 'string',
            },
            {
              name: 'etapaIcone',
              title: 'Ícone da Etapa',
              type: 'image',
            }
          ],
            }],
      description: 'Adicione as etapas/livros que o plano oferece.',
    }),
  ],
})