# DoceMannu

> Catálogo interativo de ovos de pascoa com compra via WhatsApp.

## 🧁 Visão geral

**DoceMannu** é um projeto frontend leve em HTML, CSS e JavaScript para apresentar produtos em cards e abrir conversa no WhatsApp ao clicar em Comprar.

## ⚙️ Tecnologias

- HTML5 (`index.html`)
- CSS3 (`style.css`)
- JavaScript (`script.js` ou inline em `index.html`)
- Imagens em `assets/`

## 🚀 Como executar

1. Clone o repositório:

```bash
git clone <URL-do-repositório>
cd "Projeto mannu"
```

2. Abra `index.html` no navegador.
3. No catálogo, clique em qualquer botão **Comprar** para abrir o chat do WhatsApp com texto pré-definido.

> Dica: use GitHub Pages para hospedar gratuitamente (Settings > Pages > branch main) e testá-lo online.

## 📁 Estrutura de arquivos

- `index.html` - markup do catálogo e cards.
- `style.css` - layout responsivo e design visual.
- `script.js` - efeitos e lógica de clique (se existir; atualmente inline no `index.html`).
- `assets/` - imagens dos produtos.
- `documetação-docemannu.md` - documentação técnica e melhorias.

## 🛠️ Personalizando cards

Cada card de produto fica em `index.html`:
- Atualize `data-link` para o número/telefone do WhatsApp e mensagem.
- Mantenha `encodeURIComponent` em textos com espaços/acentos.


## 📝 Licença

- MIT

-
Feito por Lennard Ribeiro