# 📦 Puzzle API

API simples e leve para manipulação de puzzles. Feita com TypeScript e Express.

---

## 🚀 Tecnologias utilizadas

- **TypeScript**
- **Node.js**
- **Express**
- **Cors**

---

## 📌 Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/emptyhax/puzzleApi.git
   cd puzzleApi
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Rode o projeto em modo desenvolvimento:
   ```bash
   npm run dev
   ```

4. A API estará disponível em:
   ```
   http://localhost:80
   ```

---

## 📖 Endpoints


### 📥 `GET /puzzle/randomPuzzle`

- **Descrição:** Retorna um puzzle aleatório.
- **Resposta:**
  ```json
  {
    "category": "mathematics",
    "questionObj": {
      "id": 11,
      "question": "Qual é o dobro de 23?",
      "answer": [
        "46",
        "46"
      ]
    }
  }
  ```

---

### 📥 `GET /puzzle/puzzleByCategory/:category`

- **Descrição:** Retorna um puzzle aleatório de uma categoria especifica.
- **Resposta:**
  ```json
  {
    "category": "technology",
    "questionObj": {
      "id": 15,
      "question": "Qual foi o primeiro videogame da Nintendo?",
      "answer": [
        "NES",
        "Nintendo Entertainment System",
        "nes"
      ]
    }
  }
  ```
  
---

### 📥 `GET /puzzle/listCategories`

- **Descrição:** Retorna todas as categorias.
- **Resposta:**
  ```json
  {"general, mathematics, technology, literature, geography, history, science, music, ..."}
  ```
---

## 🎨 Tema claro e escuro disponível na documentação web ✨

A documentação HTML personalizada acompanha tema light/dark inspirado no layout abaixo:

- 📃 Light Mode: suave e clean.
- 🌑 Dark Mode: ideal pra noite.

---

> Feito com 💙 por [hax](https://github.com/emptyhax).
