import { defineField, defineType } from 'sanity'

export const testenivelamentoType = defineType({
  name: 'teste_nivelamento',
  title: 'Teste de Nivelamento',
  type: 'document',

  fields: [
    defineField({
      name: 'titulo',
      title: 'Título do Teste',
      type: 'string',
      description: 'Título exibido no teste',
    }),

    defineField({
      name: 'perguntas',
      title: 'Perguntas',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'pergunta',
          title: 'Pergunta',
          fields: [
            defineField({
              name: 'enunciado',
              title: 'Enunciado',
              type: 'string',
              description: 'Texto da pergunta',
            }),
            defineField({
              name: 'alternativas',
              title: 'Alternativas',
              type: 'array',
              of: [{ type: 'string' }],
              description: 'Opções de resposta',
            }),
            defineField({
              name: 'resposta_correta',
              title: 'Resposta Correta',
              type: 'string',
              description: 'A alternativa correta',
            }),
          ],
        },
      ],
    }),
  ],
})
