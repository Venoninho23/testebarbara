// src/agenda.ts

interface Compromisso {
    data: string;
    hora: string;
    descricao: string;
}

class Agenda {
    private compromissos: Compromisso[] = [];

    adicionarCompromisso(data: string, hora: string, descricao: string): void {
        if (this.compromissos.some(c => c.data === data && c.hora === hora)) {
            throw new Error('Compromisso já existe para essa data e hora.');
        }

        const compromisso: Compromisso = { data, hora, descricao };
        this.compromissos.push(compromisso);
    }

    removerCompromisso(data: string, hora: string): void {
        const index = this.compromissos.findIndex(c => c.data === data && c.hora === hora);
        if (index === -1) {
            throw new Error('Compromisso não encontrado.');
        }
        this.compromissos.splice(index, 1);
    }

    listarCompromissos(): Compromisso[] {
        return this.compromissos;
    }
}

export { Agenda, Compromisso };
