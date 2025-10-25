import { defineField, defineType } from 'sanity'

export const testenivelamentoType = defineType({
    name: 'teste_nivelamento',
    title: 'Teste de Nivelamento',
    type: 'document',

    fields: [
        defineField({
            name: 'perguntas',
            title: 'Pergunta',
            type: 'text',
            description: 'Perguntas para responder no teste.',
        }),

        defineField({
            name: 'alternativas',
            title: 'Alternativas',
            type: 'array', of: [{ type: 'string' }],
            description: 'Alternativas a serem inseridas no teste.',
        }),

        defineField({
            name: 'resposta_correta',
            title: 'Resposta Correta',
            type: 'string',
            description: 'Resposta correta da pergunta.',
        }),

    ]
})