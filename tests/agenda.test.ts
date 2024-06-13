// tests/agenda.test.ts

import { Agenda } from '../src/agenda';

describe('Teste da Agenda', () => {
    let agenda: Agenda;

    beforeEach(() => {
        agenda = new Agenda();
    });

    test('deve adicionar um compromisso corretamente', () => {
        agenda.adicionarCompromisso('2024-05-27', '14:00', 'Reunião de trabalho');
        expect(agenda.listarCompromissos()).toEqual([
            { data: '2024-05-27', hora: '14:00', descricao: 'Reunião de trabalho' }
        ]);
    });

    test('não deve adicionar compromissos duplicados', () => {
        agenda.adicionarCompromisso('2024-05-27', '14:00', 'Reunião de trabalho');
        expect(() => {
            agenda.adicionarCompromisso('2024-05-27', '14:00', 'Outra reunião');
        }).toThrow('Compromisso já existe para essa data e hora.');
    });

    test('deve remover um compromisso corretamente', () => {
        agenda.adicionarCompromisso('2024-05-27', '14:00', 'Reunião de trabalho');
        agenda.removerCompromisso('2024-05-27', '14:00');
        expect(agenda.listarCompromissos()).toEqual([]);
    });

    test('deve lançar erro ao tentar remover compromisso inexistente', () => {
        expect(() => {
            agenda.removerCompromisso('2024-05-27', '14:00');
        }).toThrow('Compromisso não encontrado.');
    });

    test('deve listar todos os compromissos corretamente', () => {
        agenda.adicionarCompromisso('2024-05-27', '14:00', 'Reunião de trabalho');
        agenda.adicionarCompromisso('2024-05-28', '10:00', 'Consulta médica');
        expect(agenda.listarCompromissos()).toEqual([
            { data: '2024-05-27', hora: '14:00', descricao: 'Reunião de trabalho' },
            { data: '2024-05-28', hora: '10:00', descricao: 'Consulta médica' }
        ]);
    });
});
