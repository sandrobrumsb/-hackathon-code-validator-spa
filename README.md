# Criando chatboot no GoogleColab:

links: https://colab.research.google.com/

# Instalando a biblioteca 
!pip install google-generativeai

from google.colab import userdata
import google.generativeai as genai

# Pegando a chave do segredo configurado no Colab:
GOOGLE_GEMINI_API_KEY = userdata.get('GEMINI_API_KEY')

# Configurando a API:
genai.configure(api_key=GOOGLE_GEMINI_API_KEY)

# Listar modelos suportados:
for m in genai.list_models():
    if 'generateContent' in m.supported_generation_methods:
        print(m.name)

# Escolhendo o modelo de AI, ex:
 model = genai.GenerativeModel("gemini-1.5-pro-latest")

 # Iniciar o chatbot:
chat = model.start_chat(history=[])

# Criando o Chatbot com enfase em Correção de Código:
```python
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
