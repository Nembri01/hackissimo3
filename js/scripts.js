// scripts.js
// Codice JavaScript per Hackissimo.tech
// Gestisce la visualizzazione del "Tip del Giorno" e altre funzionalità

document.addEventListener('DOMContentLoaded', () => {
  // Array di suggerimenti su come usare ChatGPT e l'informatica in modo efficace
  const tips = [
    "Sfrutta le descrizioni dettagliate: più contesto fornisci a ChatGPT, più pertinenti saranno le risposte.",
    "Prova a chiedere riepiloghi: ChatGPT può riassumere articoli o documenti lunghi in pochi paragrafi utili.",
    "Utilizza ChatGPT per brainstorming: poni domande aperte per ottenere idee creative su progetti o contenuti.",
    "Chiedi spiegazioni passo‑passo: il modello può guidarti attraverso procedure complesse in modo chiaro.",
    "Perfeziona le tue domande: se la risposta non ti convince, riformula la richiesta aggiungendo dettagli.",
    "Controlla sempre le fonti: usa le risposte di ChatGPT come spunto, ma verifica con fonti ufficiali.",
    "Imposta limiti: indica la lunghezza desiderata della risposta (es. 'in 100 parole') per risultati più precisi.",
    "Integra l’AI nei flussi di lavoro: automatizza compiti ripetitivi con script che chiamano l’API di ChatGPT.",
    "Sperimenta con lingue diverse: ChatGPT supporta molte lingue e può aiutarti a tradurre o praticare.",
    "Usa la modalità conversazionale: fai domande successive per approfondire un argomento mantenendo il contesto.",
    "Combina strumenti: abbina ChatGPT a programmi di fotoritocco o fogli di calcolo per flussi creativi.",
    "Impara a creare prompt efficaci: investi tempo per capire quali parole chiave generano le risposte migliori.",
    "Richiedi esempi di codice: ChatGPT può generare snippet e spiegazioni per varie lingue di programmazione.",
    "Proteggi la privacy: evita di inserire dati sensibili nelle tue richieste quando utilizzi il modello.",
    "Mantieni la curiosità: esplora nuove funzionalità come gli agenti AI per scoprire modi innovativi di lavorare."
  ];

  // Funzione per selezionare un tip in base al giorno del mese
  function getTipOfTheDay() {
    const today = new Date();
    const index = today.getDate() % tips.length;
    return tips[index];
  }

  const tipElement = document.getElementById('tip-text');
  if (tipElement) {
    tipElement.textContent = getTipOfTheDay();
  }
});