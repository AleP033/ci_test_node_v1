Progetto per la creazione di una Pipeline di CI utilizzando GitHub Actions, il progetto e su questa repository in locale sulla quale c'e una REST API in Node.Js

- Video 2/10: creazione manuale dei test in index.test.js e verifica del corretto funzionamento
- Video 3/10: automazione con GitHub Actions: creo una repo su github con lo stesso nome di questa repo in locale, creazione e compilazione file yaml nella cartella .github e workflows
- Video 5 e 6/10: riepilogo dei video precedenti
- Video 7/10: creazione del Dockerfile
- Video 8/10: creazione immagine su Docker Hub, autorizzo GitHub Actions ad eseguire il delivery, tramite l'aggiornamento del file yml
- Video 9/10: effettuo il setup dell'username e della password, su docker hub creo un token e copio l'username e la password inserendoli nella sezione Secrets and Variables -> Actions -> New Repository Secret e creandone due, una per l'username e l'altra per la password. Da lì il processo in automatico riuscirà a prendere le credenziali private ed a effettuare l'accesso 
- Video 10/10: aggiunta delle modifiche su GitHub(git add . git commit -m "messagio" git push) e avvio del processo in automatico anche su docker, una volta che il tutto va a buon fine vado su Docker Desktop, prendo l'immagine dall'hub e faccio una pull, la starto e specifico la porta inserita nel file index.js(3000) e se tutto va a buon fine dovrei vedere le informazioni che ho specificato nelle operazioni CRUD(in questo caso alla route '/' dovrei vedere Hello World! e sulla route '/client', dovrei vedere Hello Client!).
Provo a fare una modifica su tutto aggiungendo un nuovo endpoint('/friend' che restituisce Hello Friend!). Uso npm test per vedere se funzionano in locale



