'use client';

export default function TestePage() {
  async function handleTest() {
    try {
      const response = await fetch('/api/subjects');
      const data = await response.json();

      console.log('Resposta da API (GET):', data);
    } catch (error) {
      console.error('Erro ao testar GET:', error);
    }
  }

  return (
    <div>
      <button onClick={handleTest}>
        teste
      </button>
    </div>
  );
}
