# Ibrahim

Frontend do sistema de acompanhamento financeiro, feito com Vue 3 e TypeScript.
Os componentes Vue devem usar `<script setup lang="ts">`.

## API

O cliente HTTP compartilhado fica em `src/lib/axios.ts`. Importe-o onde precisar
com `import api from '@/lib/axios'`; a URL base vem de `VITE_API_BASE_URL` (com
fallback para `/api`). Copie `.env.example` para `.env.local` e ajuste a URL para
o backend em desenvolvimento.

Mantenha funções de API agrupadas por domínio em composables, por exemplo
`src/composables/useTransactions.ts`, usando o cliente compartilhado:

```ts
import api from '@/lib/axios'

export function useTransactions() {
  async function getTransactions() {
    const { data } = await api.get('/transactions')
    return data
  }

  return { getTransactions }
}
```

Assim, URL base, timeout e cabeçalhos ficam centralizados, enquanto cada
composable reúne as operações de API de uma área. Adicione Pinia quando houver
estado que precise ser compartilhado entre telas, como autenticação ou dados
persistidos em várias rotas.
