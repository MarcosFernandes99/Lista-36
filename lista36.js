// BORAAAA COMEÇAR !!!
var Torre = /** @class */ (function () {
    function Torre(nome, ataque, alcance, nivel, valor) {
        this.Nome = "";
        this.Ataque = 0;
        this.Alcance = 0;
        this.Nivel = 0;
        this.Valor = 0;
        this.Nome = nome;
        this.Ataque = ataque;
        this.Alcance = alcance;
        this.Nivel = nivel;
        this.Valor = valor;
    }
    return Torre;
}());
var Inimigo = /** @class */ (function () {
    function Inimigo(nome, vida) {
        this.Nome = "";
        this.Vida = 0;
        this.Nome = nome;
        this.Vida = vida;
    }
    Inimigo.prototype.ReceberDano = function (ataque) {
        return this.Vida = this.Vida - ataque;
    };
    return Inimigo;
}());
var torres = [];
var tabuleiro = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,];
torres.length = 10;
tabuleiro.length = 10;
AdicionarTorre(new Torre("Arco", 3, 2, 1, 10), 6);
IniciarPartida(2);
function AdicionarTorre(torre, posicao) {
    torres[posicao] = torre;
}
function IniciarPartida(inimigosTotais) {
    var vidas = 10;
    var numeroInimigos = inimigosTotais;
    var inimigosDerrotados = 0;
    var fimDeJogo = false;
    do {
    } while (!fimDeJogo);
}
