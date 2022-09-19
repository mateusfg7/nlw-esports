# NLW eSports | Server
The Back-end app for NLW eSports

<br>
<br>

# Back-end

## Entidades

### Game

- id
- title
- bannerUrl

### Ad

- id
- gameId
- name
- yearsPlaying
- discord
- weekDays
- hourStart
- hourEnd
- useVoiceChannel
- createdAt

## Use Cases

- Listagem de games com contagem de anúncios
- Criação de novo anúncio
- Listagem de anúncios por game
- Buscar discord pelo ID do anúncio


<br>
<br>

# Notes

CDN (Content Delivery Network)

1:30h -> 90min

R$ 179,89 -> 17989 (x100)

Datas (fuso horário / formatos diferentes i18n)

Pontos Flutuantes

_Status Code_
* **2**00: Sucesso
* **3**00: Redirecionamento
* **4**00: Erros do lado do cliente ou erros de código
* **5**00: Erros do lado do servidor ou erros inesperados

_Lib Recommendations_
* **Zod**: _validação de requisições_