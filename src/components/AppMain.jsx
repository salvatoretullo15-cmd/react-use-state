import { useState } from "react";

const languages = [
  {
    id: 1,
    title: "HTML",
    description: "HTML (HyperText Markup Language) è il linguaggio standard per creare pagine e applicazioni web. Struttura il contenuto web e fornisce elementi di base come titoli, paragrafi e immagini."
  },
  {
    id: 2,
    title: "CSS",
    description: "CSS (Cascading Style Sheets) è un linguaggio di stile utilizzato per descrivere la presentazione di un documento scritto in HTML o XML. Controlla il layout, i colori, i caratteri e l'aspetto complessivo di una pagina web."
  },
  {
    id: 3,
    title: "JavaScript",
    description: "JavaScript è un linguaggio di programmazione dinamico utilizzato per lo sviluppo web, che consente contenuti interattivi come grafici animati, pulsanti cliccabili e altre funzionalità dinamiche sui siti web."
  },
  {
    id: 4,
    title: "Node.js",
    description: "Node.js è un ambiente di runtime JavaScript lato server che permette di utilizzare JavaScript anche sul backend, consentendo agli sviluppatori di usare lo stesso linguaggio sia sul client che sul server."
  },
  {
    id: 5,
    title: "Express",
    description: "Express è un framework per applicazioni web minimalista e veloce per Node.js. Fornisce strumenti robusti per creare applicazioni web e API e semplifica la gestione delle rotte e delle richieste."
  },
  {
    id: 6,
    title: "ReactJS",
    description: "ReactJS è una libreria JavaScript per costruire interfacce utente, in particolare applicazioni a pagina singola. Consente agli sviluppatori di creare componenti UI riutilizzabili e di gestire efficacemente lo stato dell'applicazione."
  }
];

export default function AppMain() {

    const [activeButton,setActiveButton] = useState(0)

    return(
        <>
        <div className="d-flex justify-content-center row mt-5">
            {
            languages.map((language,id) => (
                <button className="col btn btn-primary m-5" 
                        onClick={()=>setActiveButton(id)}
                        key={id}>
                            {language.title}
                </button>
            ))
            }
            <div className="row card mt-5">
                <h3>
                    {languages[activeButton].title}<br/>
                </h3>
                <p>
                    {languages[activeButton].description}
                </p>
            </div>

        </div>
        </>
    )
}