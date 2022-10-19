// BORAAAA COMEÇAR !!!

class Torre{
    Nome: string = ""
    Ataque: number = 0
    Alcance:number = 0
    Nivel: number = 0
    Valor: number = 0
    

    constructor(nome: string, ataque: number, alcance: number, nivel: number, valor: number){
        this.Nome = nome
        this.Ataque = ataque
        this.Alcance = alcance
        this.Nivel = nivel
        this.Valor = valor

    }
}

class Inimigo{
    Nome: string = ""
    Vida: number = 0

    constructor(nome: string, vida: number){
        this.Nome = nome
        this.Vida = vida

    }

    public ReceberDano(ataque: number){
        return this.Vida = this.Vida - ataque
    }

}

let torres: Torre[] = []
let tabuleiro: (Inimigo | undefined)[] = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,]

torres.length = 10
tabuleiro.length = 10

AdicionarTorre(new Torre("Arco", 3, 2, 1, 10), 6)

IniciarPartida(2)

function AdicionarTorre(torre: Torre, posicao: number){
    torres[posicao] = torre
}

function IniciarPartida(inimigosTotais: number){
    let vidas: number = 10
    let numeroInimigos = inimigosTotais
    let inimigosDerrotados = 0
    let fimDeJogo: boolean = false

    do{

        



    }while(!fimDeJogo)
}




