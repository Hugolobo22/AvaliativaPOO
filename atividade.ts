class ItemMenu { // CLasse Item menu, tendo os atributos: Opção e Texto da opção.
    opcao: string; // Atributo Opção (Item) do Menu.
    textoDaOpcao: string; // Atributo Texto da opção (Descrição do item) do Menu.

    constructor(opcao: string, textoDaOpcao: string) { // Constructor do objeto.
        this.opcao = opcao;
        this.textoDaOpcao = textoDaOpcao;
    }
}

class Menu { // Classe Menu, onde teremos o menu dos itens selecionados
    itens: ItemMenu[]; // Itens da classe Menu vem da Classe ItemMenu, sendo do tipo Array.

    constructor() { // Constructor da Classe Menu.
        this.itens = [];
    }

    adicionarItem(opcao: string, textoDaOpcao: string): void { // Função adicionarItem, consite em adicionar qualquer item que quiser quando a função é chamada.
        const item = new ItemMenu(opcao, textoDaOpcao); // O item adicionado precisa ser inserido com sua Opção (Resumidamente, o nome) e Texto da Opção (Descrição)
        this.itens.push(item); // .push utilizado para adicionar o item criado para o array de itens (Item[])
    }

    imprimirMenu(){ // Método de imprimir Menu.
        console.log("Opções do menu:"); // No console, aparecerá primeiramente, as opções do Menu.
        for (const item of this.itens) { // Utilizando for, para cada item, o item aparecerá no console, juntamente de sua descrição.
            console.log(`${item.opcao} - ${item.textoDaOpcao}`);
        }

        const opcaoSelecionada = prompt("Insira seu valor desejado") // Uma nova variável é criada, para receber por meio de um prompt, o valor da ação desejada.
        return opcaoSelecionada
    }
}

const menu = new Menu(); // Um novo menu com 5 itens/opções (Atacar, Ataque especial, Tomar poção de cura, Tomar poção que restaura MP e Defender.)
menu.adicionarItem("1", "Atacar");
menu.adicionarItem("2", "Ataque especial");
menu.adicionarItem("3", "Tomar poção de Cura de HP");
menu.adicionarItem("4", "Tomar poção que restaura MP");
menu.adicionarItem("5", "Defender");

const opcaoSelecionada = menu.imprimirMenu(); // a const Opção Selecionada se torna o valor escolhido pelo prompt em relação ao Menu exibido acima.
console.log("Opção selecionada:", opcaoSelecionada); // No console, mostra o valor digitado na Const Opção Selecionada.

class Monstro { // Criação da classe Monstro
    hp: number;
    forcaAtaque: number;
    forcaDefesa: number;

    constructor(hp: number, forcaAtaque: number, forcaDefesa: number) { // Constructor da classe monstro
        this.hp = hp;
        this.forcaAtaque = forcaAtaque;
        this.forcaDefesa = forcaDefesa;
    }

    verificarEstado() { // Método de verificação do estado do monstro antes de sofrer o dano.
        const hpPercent = this.hp / 1000; // Atribui o valor da vida para a const hpPercent
        if (hpPercent < 0.25) { // Caso o hpPercent (Hp do monstro) for menor que 25%, executa os códigos abaixo.
            this.forcaAtaque += this.forcaAtaque * 0.1; // Ataque aumenta em 10%
            this.forcaDefesa += this.forcaDefesa * 0.3; // Defesa aumenta em 30%
        }
    }

    receberDano(danoSofrido: number): number { // Método de receber dano
        const danoReduzido = danoSofrido - this.forcaDefesa; // O dano recebido do monstro será reduzido de sua defesa (ex: 50 de defesa, só receberá dano se o dano for maior ou igual à 51)
        if (danoReduzido > 0) { // Se o dano for maior que a defesa (Se for maior que 0 após a operação acima) o código segue.
            this.hp -= danoReduzido;
            if (this.hp <= 0) { // Se o hp for menor ou igual à zero, o monstro é derrotado.
                console.log("Monstro derrotado");
            }
        }
        return this.hp;
    }

    ataqueM(): number { // Método utilizado para exibir a força de ataque do monstro.
        return this.forcaAtaque;
    }
}

class Coliseu { // Classe Coliseu, onde teremos um chefe
    monstro: Monstro; // Válido lembrar que o Atributo Monstro é do TIPO Monstro, logo, é necessário a criação de sua classe anteriormente.

    constructor(monstro: Monstro) { // Constructor da classe Coliseu.
        this.monstro = monstro;
    }
}


const boss = new Monstro(1000, 50, 30); // Criação do monstro do coliseu, um monstro com 1000 HP, força de ataque 50 e força de defesa 30, é um boss.
const coliseu = new Coliseu(boss);

console.log("Ataque do monstro:", boss.ataqueM()); // Exibe no console o Ataque do Monstro.

class Equipamento { // Criação da Classe equipamentos.
    nome: string;
    aumentoAtaque: number; // Aumenta o ataque caso o equipamento seja algo que aumente o ataque, coloque 0 se for algo que não aumenta o ataque.
    aumentoDefesa: number; // Aumenta a defesa caso o equipamento seja algo que aumente o defesa, coloque 0 se for algo que não aumenta o defesa.

    constructor(nome: string, aumentoAtaque: number, aumentoDefesa: number) { // Constructor da classe equipamentos.
        this.nome = nome;
        this.aumentoAtaque = aumentoAtaque;
        this.aumentoDefesa = aumentoDefesa;
    }
}

class Lutador { // Criação da classe Lutador.
    hp: number;
    mp: number;
    ataqueL: number;
    defesaL: number;
    equipamentos: Equipamento[]; // Array para armazenar os equipamentos

    constructor(hp: number, mp: number, ataque: number, defesa: number) { // Constructor da classe Lutador.
        this.hp = hp;
        this.mp = mp;
        this.ataqueL = ataque;
        this.defesaL = defesa;
        this.equipamentos = [];
    }

    equiparEquipamento(equipamento: Equipamento): void { // Método para equipar equipamentos. Verifica o tipo de equipamento e equipa no lutador
        if (this.equipamentos.length < 3) { // Se o nome do equipamento incluir cabeça, e tiver slots disponíveis, ele equipa.
            this.equipamentos.push(equipamento);
        } else if (this.equipamentos.length < 3) { // Se o nome do equipamento incluir Corpo, e tiver slots disponíveis, ele equipa.
            this.equipamentos.push(equipamento);
        } else if (this.equipamentos.length < 3) { // Se o nome do equipamento incluir Arma, e tiver slots disponíveis, ele equipa.
            this.equipamentos.push(equipamento);
        } else { // Se não tiver o nome do tipo do equipamento ou se já estiver com todos os slots ocupados, a mensagem do console aparece.
            console.log("Não é possível equipar mais equipamentos.");
        }
    }

    calcularDano(danoSofrido: number): number { // Método para calcular dano recebido pelo lutador.
        const danoReduzido = danoSofrido - this.defesaL; // Igualmente ao monstro, diminui o dano sofrido da defesa do lutador, o restante é o dano que ele levará.
        if (danoReduzido > 0) { // Se o dano que ele levará for maior que 0, o dano é prosseguido e o hp do lutador é diminuído.
            this.hp -= danoReduzido;
        }
        return this.hp;
    }

    ataque(): number { // Método para exibir o ataque total do lutador
        let ataqueTotal = this.ataqueL; // nova variável Ataque total recebe o valor do ataque do lutador.
        this.equipamentos.forEach(equipamento => { // Prossegue o for para cada equipamento do lutador.
            ataqueTotal += equipamento.aumentoAtaque; // Para cada equipamento que aumenta ataque, o ataque total do lutador aumenta.
        });
        console.log("Ataque do Lutador:", ataqueTotal); // Ao final, exibe no console o ataque total do lutador.
        return ataqueTotal;
    }

    defesa(): number { // Método para exibir a defesa total do lutador.
        let defesaTotal = this.defesaL; // Nova variável Defesa total recebe o valor de defesa do lutador.
        this.equipamentos.forEach(equipamento => { // Prossegue o for para cada equipamento do lutador.
            defesaTotal += equipamento.aumentoDefesa; // Para cada equipamento que aumenta defesa, a defesa total do lutador aumenta.
        });
        console.log("Defesa do Lutador:", defesaTotal); // Ao final, exibe no console o ataque total do lutador.
        return defesaTotal;
    }

    ataqueEspecial(): number { // Método do ataque especial do lutador
        if (this.mp >= 20) { // Caso a Mana do lutador seja maior ou igual a 20, o código ocorre.
            console.log("Ataque Especial do Lutador:", this.ataqueL * 1.5); // O ataque do lutador é aumentado em 50% exibido no console.
            this.mp -= 20; // Após isso, o lutador diminui 20 da sua Mana.
            return this.ataqueL * 1.5; // O ataque do lutador é aumentado em 50%.
        } else {
            console.log("MP Insuficiente"); // Caso contrário (MP < 20) a mensagem "MP insuficiente" é exibida no console e nada acontece.
            return 0;
        }
    }

    tomarPocaoHP(){ // Método de tomar poção de HP
        const aumentoHP = this.hp * 0.25; // Aumenta seu hp em 25% de sua vida
        this.hp += aumentoHP; // Operação de aumento de HP (hp + 25% do hp)
        console.log("HP recuperado:", aumentoHP); // Exibe a quantidade de HP recuperado.
    }

    tomarPocaoMP(): void { // Método de tomar poção de MP
        const aumentoMP = this.mp * 0.25; // Aumenta seu mp em 25% de seu mp
        this.mp += aumentoMP; // Operação de aumento de MP (mp + 25% do mp)
        console.log("MP recuperado:", aumentoMP); // Exibe a quantidade de MP recuperado.
    }

    exibirInfoLutador(){ // Exibe informações úteis do Lutador.
        console.log("Informações do Lutador:");
        console.log("HP:", this.hp); // Vida do Lutador.
        console.log("MP:", this.mp); // Mana do Lutador.
        console.log("Ataque:", this.ataqueL); // Ataque do Lutador
        console.log("Defesa:", this.defesaL); // Defesa do Lutador.
        console.log("Equipamentos:"); // Equipamentos.
        this.equipamentos.forEach((equipamento, index) => { // Utilizando um for exibe cada equipamento encontrado e seu índice.
            console.log(`- Slot ${index + 1}: ${equipamento.nome}`); // Exibe o slot do equipamento e seu nome.
        });
    }
}

class Jogo { // Classe Jogo.
    menu: Menu; // Menu, vindo da classe Menu.
    lutador: Lutador; // Lutador, vindo da classe Lutador.
    coliseu: Coliseu; // Coliseu, vindo da classe Coliseu

    constructor(menu: Menu, lutador: Lutador, coliseu: Coliseu) { // Constructor da classe Jogo.
        this.menu = menu;
        this.lutador = lutador;
        this.coliseu = coliseu;
    }
    jogar(){ // Método Jogar
        while (true) { // Enquanto o valor for true, o código ocorre.
            const opcaoSelecionada = this.menu.imprimirMenu(); // Primeiro acontece aquele código do início, onde o usuário vai inserir uma das opções do Menu.
            
            if (opcaoSelecionada === "1") { // Caso a opção seja 1, o código abaixo acontece.
                const dano = this.lutador.ataque(); // O dano do lutador é igual ao ataque dele.
                this.coliseu.monstro.receberDano(dano); // O monstro recebe o dano do lutador.
                if (this.coliseu.monstro.hp <= 0) { // Se o monstro ficar com HP menor ou igual à 0, você derrota ele e o código encerra.
                    console.log("Parabéns! Você venceu a luta do Coliseu.");
                    break;
                }
                const danoMonstro = this.coliseu.monstro.ataqueM(); // Se não derrotar, o monstro revida o ataque.
                this.lutador.calcularDano(danoMonstro); // Calcula o dano do monstro em base de seu ataque.
                if (this.lutador.hp <= 0) { // Se sua vida ficar abaixo ou igual à 0, você é derrotado e o código encerra.
                    console.log("Você foi destroçado pelo monstro.");
                    break;
                }
            } else if (opcaoSelecionada === "2") { // Se a opção selecionada for 2:
                const danoEspecial = this.lutador.ataqueEspecial(); // Você usará o ataque especial
                if (danoEspecial !== 0) { // Seu dano será alterado para o dano especial.
                    this.coliseu.monstro.receberDano(danoEspecial); // O monstro recebe o dano em base do dano especial.
                    if (this.coliseu.monstro.hp <= 0) { // Se o monstro ficar com HP menor ou igual à 0, você derrota ele e o código encerra.
                        console.log("Parabéns! Você venceu a luta do Coliseu."); 
                        break;
                    }
                    const danoMonstro = this.coliseu.monstro.ataqueM(); // Se não derrotar, acontece o mesmo código do contra-ataque do monstro.
                    this.lutador.calcularDano(danoMonstro);
                    if (this.lutador.hp <= 0) {
                        console.log("Você foi destroçado pelo monstro.");
                        break;
                    }
                    else{
                        console.log("Você levou dano do monstro")
                    }
                }
            } else {
                console.log("Opção inválida. Por favor, selecione novamente.");
            }
    
            console.log("Informações do Monstro:");
            console.log("HP:", this.coliseu.monstro.hp);
            console.log("Ataque:", this.coliseu.monstro.ataqueM());
    
            console.log("Informações do Lutador:");
            this.lutador.exibirInfoLutador();
    
            if (this.coliseu.monstro.hp <= 0 || this.lutador.hp <= 0) { // Verifica se o combate deve continuar ou encerrar com base nos HPs restantes
                break;
            }
        }
    }
}

/*
    let CabeçatiaraElf = new Equipamento("Tiara de Elf", 5, 10);
    let vestidoFada = new Equipamento("Vestido de Fada", 10, 15);
    let arcoCaca = new Equipamento("Arco de Caça", 25, 5);

    this.equiparEquipamento(CabeçatiaraElf); // Equipar na cabeça
    this.equiparEquipamento(vestidoFada); // Equipar no corpo
    this.equiparEquipamento(arcoCaca); // Equipar na mão
*/