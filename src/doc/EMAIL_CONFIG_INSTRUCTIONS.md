# 📧 Configuração do EmailJS para Formulário de Contato

O formulário de contato está configurado para enviar emails para **ian.mgsouza@gmail.com**.

## 🚀 Passo a Passo para Ativar

### 1. Criar Conta no EmailJS (GRATUITO)
- Acesse: https://www.emailjs.com/
- Clique em "Sign Up" e crie sua conta gratuita
- Confirme seu email

### 2. Configurar Serviço de Email
1. No dashboard, clique em **"Email Services"**
2. Clique em **"Add New Service"**
3. Escolha **"Gmail"** (recomendado)
4. Conecte sua conta do Gmail (ian.mgsouza@gmail.com)
5. Copie o **Service ID** (ex: `service_abc123`)

### 3. Criar Template de Email
1. No dashboard, clique em **"Email Templates"**
2. Clique em **"Create New Template"**
3. Configure o template com:

**Subject (Assunto):**
```
Novo contato do site Nanno Solo
```

**Content (Conteúdo):**
```
Novo contato recebido do site!

E-mail do visitante: {{from_email}}

Mensagem: {{message}}

---
Este e-mail foi enviado automaticamente do formulário de contato do site.
```

4. Em **"To email"**, coloque: `ian.mgsouza@gmail.com`
5. Clique em **"Save"**
6. Copie o **Template ID** (ex: `template_xyz789`)

### 4. Pegar a Public Key
1. No dashboard, clique em **"Account"** (canto superior direito)
2. Vá em **"API Keys"** ou **"General"**
3. Copie a **Public Key** (ex: `abc123XYZ456`)

### 5. Atualizar o Código
Abra o arquivo `src/components/sections/Subscribe.jsx` e atualize as linhas 24-26:

```javascript
const serviceID = 'SEU_SERVICE_ID_AQUI'      // Cole o Service ID
const templateID = 'SEU_TEMPLATE_ID_AQUI'    // Cole o Template ID  
const publicKey = 'SUA_PUBLIC_KEY_AQUI'      // Cole a Public Key
```

### Exemplo:
```javascript
const serviceID = 'service_abc123'
const templateID = 'template_xyz789'
const publicKey = 'abc123XYZ456'
```

## ✅ Testar

1. Salve o arquivo
2. Recarregue o site
3. Preencha o formulário com um email de teste
4. Clique em "Enviar"
5. Verifique se recebeu o email em **ian.mgsouza@gmail.com**

## 🎯 O que acontece quando alguém preenche o formulário:

1. Visitante digita o email e clica em "Enviar"
2. Email é enviado automaticamente para **ian.mgsouza@gmail.com**
3. Visitante vê mensagem de sucesso
4. Você recebe o email com o contato do visitante

## 📱 Limite Gratuito do EmailJS

- **200 emails/mês** (plano gratuito)
- Se precisar de mais, pode fazer upgrade depois

## 🆘 Problemas?

Se não funcionar:
1. Verifique se as 3 chaves (serviceID, templateID, publicKey) estão corretas
2. Verifique se conectou o Gmail corretamente no EmailJS
3. Veja o console do navegador (F12) para erros
4. Teste manualmente no dashboard do EmailJS

## 🔗 Links Úteis

- Dashboard EmailJS: https://dashboard.emailjs.com/
- Documentação: https://www.emailjs.com/docs/

---

💡 **Dica:** Depois de configurar, delete este arquivo se quiser manter as chaves privadas!

