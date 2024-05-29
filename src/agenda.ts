// src/agenda.ts

interface Compromisso {
    data: string;
    hora: string;
    descricao: string;
}

class Agenda {
    private compromissos: Compromisso[] = [];

    adicionarCompromisso(data: string, hora: string, descricao: string): void {
        const compromisso: Compromisso = { data, hora, descricao };
        this.compromissos.push(compromisso);
    }

    removerCompromisso(data: string, hora: string): void {
        this.compromissos = this.compromissos.filter(c => c.data !== data || c.hora !== hora);
    }

    listarCompromissos(): Compromisso[] {
        return this.compromissos;
    }
}

export { Agenda, Compromisso };
