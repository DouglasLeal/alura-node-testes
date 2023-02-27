import Carrinho from "../carrinho.js";
import Item from "../item.js";

describe("Testes do carrinho", () => {
    it("deve inicializar vazio", () => {
        const carrinho = new Carrinho();
        expect(carrinho.subtotal).toBeNull();
    });

    it("deve ter a propriedade 'total' na inicialização", () => {
        const carrinho = new Carrinho();
        expect(carrinho).toHaveProperty('total');
    });

    it("deve ter itens", () => {
        const item = new Item("Banana", 2, 5);
        const item2 = new Item("Laranja", 1, 3);

        const carrinho = new Carrinho();
        carrinho.adiciona(item);
        carrinho.adiciona(item2);

        expect(typeof carrinho).toBe("object");
        expect(carrinho.itens[0]).toBe(item);
        expect(carrinho.itens[1]).toBe(item2);

        expect(carrinho.itens).toContain(item);
        expect(carrinho.itens).toContain(item2);
    });

    it("deve lançar erro ao finalizar compra com carrinho vazio", () => {
        function englobaErroCarrinho() {
            const carrinho = new Carrinho();
            carrinho.finalizaCompra();
        }

        expect(englobaErroCarrinho).toThrowError("Carrinho de compras vazio");
    });
});