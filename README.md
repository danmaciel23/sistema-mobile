# 🚗 Sistema Híbrido de Listagem de Veículos

Este projeto é um sistema híbrido composto por um **backend em Django (Python)** e um **frontend mobile em Angular**, onde usuários autenticados podem visualizar uma lista de veículos fornecida por um endpoint REST.

---

## 🔧 Tecnologias Utilizadas

### Backend (Django)
- Django 4.x
- Django REST Framework
- JWT Authentication (ou TokenAuth)
- CORS Headers

### Frontend (Angular)
- Angular 16+
- Angular Services e HTTPClient
- Angular Router
- Guards para rotas autenticadas

---

## 📲 Funcionalidades

- Autenticação de usuários
- Consumo de API protegida com token
- Listagem dinâmica de veículos
- Integração entre frontend Angular e backend Django
- Design responsivo/mobile-first (PWA opcional)

---

## 🚀 Como rodar o projeto

cd backend
python -m venv venv
source venv/bin/activate  # no Windows: venv\Scripts\activate
pip install -r requirements.txt

# Configurar variáveis de ambiente, se necessário

python manage.py migrate
python manage.py runserver

# Comunicação entre Sistemas

GET veiculos/api/
Authorization: Token <seu_token>

# Resposta da API

  {
    "id": 1,
    "modelo": "Fiat Uno",
    "marca": "Fiat",
    "ano": 2012,
    "cor": vermelho,
    "combustivel": gasolina,
  },

### 1. Clonar o repositório
```bash
git clone https://github.com/danmaciel23/sistema-mobile.git
cd sistema-mobile
