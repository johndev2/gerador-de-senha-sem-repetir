const request = require('request');
const process = require('process');
var fs = require('fs');


var contador = 0;
    (async function github() {
        setInterval(() => {
        function geraStringAleatoria(tamanho) {
           
            var stringAleatoria = '';
            var caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

            for (var i = 0; i < tamanho; i++) {
           

                stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
                var existe = false;
                var string = stringAleatoria;
                var linhas = fs.readFileSync('senhas.txt').toString().split("\n");
                for (var j = 0; j < linhas.length; j++) {
                    if (linhas[j] == string) {
                        existe = true;
                        break;
                    }
                }
                if (existe) {
                    stringAleatoria = '';
                    i = -1;
                    console.log(`----------senha repetida: ${contador}`);
                    contador++;

                    continue;
                }
            }

            try {
                fs.appendFile('senhas.txt', stringAleatoria + '\n', function (err) {
                    if (err) throw err;
                });
                
            } catch (error) {
                fs.writeFile('senhas.txt', stringAleatoria + '\n', function (err) {
                    if (err) throw err;
                });

            }
            
            

            return stringAleatoria;
        }
        const senha = geraStringAleatoria(3) // numero de caracteres da senha
        console.log(senha)
    }, 100);
    })();
