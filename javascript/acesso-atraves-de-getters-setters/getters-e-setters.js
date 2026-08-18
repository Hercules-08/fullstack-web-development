class ContaBancaria {
    #saldo; // atributo privado
    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }
    // Getter para o saldo
    get saldo() {
        return this.#saldo;
    }
    // Setters para o saldo
    set saldo(novoSaldo) {
        if (novoSaldo >= 0) {
            this.#saldo = novoSaldo;
        } else {
            console.log('O saldo não pode ser negativo.');
        }
    }
    // Método para depositar dinheiro
    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
            console.log(`Depósito de ${valor} realizado. Novo saldo: ${this.#saldo}`);
        } else {
            console.log('O valor do depósito deve ser positivo');
        }
    }
    // Método para levantar dinheiro
    levantar(valor) {
        if (valor > 0 && valor <= this.#saldo) {
            this.#saldo -= valor;
            console.log(`Levantamento de ${valor} realizando. Novo saldo ${this.#saldo}`);
        } else {
            console.log('Saldo insuficiente ou valor inválido.');
        }
    }
}

// Exemplo de uso
const conta = new ContaBancaria(1000);
console.log(conta.saldo); // Acessa ao saldo via getter
conta.depositar(500); // Depósito válido
conta.levantar(200); // Levantamento válido
console.log(conta.saldo); // Acesso ao saldo via getter
conta.saldo = -100; // Tentativa de definir saldo negativo
console.log(conta.saldo); // Verifica o saldo após tentativa inválida