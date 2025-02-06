# Instruções para Usar o Template de PWA

Para usar este template de PWA, siga os passos abaixo:

1. Entre no site: [https://luppi15.github.io/PWA-tutorial/](https://luppi15.github.io/PWA-tutorial/)
2. Adicione as informações do seu manifest no formulário.
3. Baixe as imagens e o arquivo `manifest.json` gerados.
4. Baixe os arquivos `app.js` e `sw.js`.
5. Coloque as imagens geradas, o `sw.js` e o `manifest.json` no mesmo diretório que o `index.html`.
6. Adicione o seguinte script ao final da página no `body`:
    ```html
    <script src="app.js"></script>
    ```
7. Adicione o seguinte link no `head`:
    ```html
    <link rel="manifest" href="manifest.json">
    ```

Certifique-se de que todos os arquivos estejam no mesmo diretório para que o PWA funcione corretamente.