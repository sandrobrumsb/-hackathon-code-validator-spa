# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Criando chatboot no GoogleColab:


**1. Instalar o Pacote Necessário
!pip install google-generativeai

	2. Configurar a Chave de API
from google.colab import userdata
import google.generativeai as genai

# Pegando a chave do segredo configurado no Colab
GOOGLE_GEMINI_API_KEY = userdata.get('GOOGLE_GEMINI_API_KEY')

# Configurando a API
genai.configure(api_key=GOOGLE_GEMINI_API_KEY)

	3. Listar Modelos Disponíveis
# Listar modelos suportados
for m in genai.list_models():
    if 'generateContent' in m.supported_generation_methods:
        print(m.name)

	4. Escolhendo o modelo
model = genai.GenerativeModel("gemini-1.5-pro-latest")


	5. Criar o Chatbot com Correção de Código**

# Iniciar o chatbot
chat = model.start_chat(history=[])

def corrigir_codigo(prompt):
    """
    Função que envia o código ao chatbot e retorna a resposta corrigida.
    """
    correction_prompt = f"""
    Você é um assistente especializado em correção de código. Realize as seguintes melhorias:
    1. **Legibilidade**: Melhore nomes de variáveis, clareza e adicione comentários úteis.
    2. **Vulnerabilidade**: Identifique e corrija potenciais falhas de segurança.
    3. **Formatação**: Aplique consistência ao estilo de código (espaçamento, indentação, etc.).
    4. **Reutilização**: Sugira modularidade e eliminação de redundâncias.

    Aqui está o código para corrigir:
    {prompt}

    Responda com o código corrigido e inclua comentários explicativos quando necessário.
    """
    # Enviar o prompt para o modelo
    response = chat.send_message(correction_prompt)
    
    # Retornar o texto da resposta
    return response.text

# Exemplo de uso da função
codigo = input("Insira o código para correção:\n")
resultado = corrigir_codigo(codigo)
print("\nCódigo corrigido:\n")
print(resultado)
