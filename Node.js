// Função para calcular a soma das notas de Teste, Projeto, Qualitativo e Prova
function calcularNotaFinal(notas) {
    const { teste, projeto, qualitativo, prova } = notas;
    return (teste + projeto + qualitativo + prova).toFixed(1);  // A soma de todas as partes da nota
}

// Função para calcular a média final das notas de uma disciplina
function calcularMediaFinal(notasTrimestres) {
    const soma = notasTrimestres.reduce((acc, notas) => acc + calcularNotaFinal(notas), 0);
    return (soma / notasTrimestres.length).toFixed(1);  // Média das notas dos trimestres
}

// Função para gerar o mapa de notas
function gerarMapaDeNotas() {
    const disciplinas = ['Português', 'Redação', 'Matemática', 'História', 'Geografia', 'Ciências', 'Inglês', 'Educação Física'];
    const trimestres = ['I Trimestre', 'II Trimestre', 'III Trimestre'];

    // Nome dos estudantes e suas notas por trimestre
    const estudantes = [
        {
            nome: "Ana Silva",
            notas: {
                'I Trimestre': [
                    { teste: 1.5, projeto: 1.8, qualitativo: 0.8, prova: 4.0 },
                    { teste: 2.0, projeto: 2.0, qualitativo: 1.0, prova: 5.0 },
                    { teste: 1.8, projeto: 1.7, qualitativo: 0.7, prova: 4.5 },
                    { teste: 1.6, projeto: 1.9, qualitativo: 0.9, prova: 3.5 },
                    { teste: 1.8, projeto: 1.9, qualitativo: 1.0, prova: 3.8 },
                    { teste: 2.0, projeto: 2.0, qualitativo: 0.8, prova: 4.7 },
                    { teste: 1.8, projeto: 1.9, qualitativo: 1.0, prova: 4.3 },
                    { teste: 2.0, projeto: 2.0, qualitativo: 1.0, prova: 4.5 }
                ],
                'II Trimestre': [
                    { teste: 1.7, projeto: 1.6, qualitativo: 0.9, prova: 4.0 },
                    { teste: 1.9, projeto: 2.0, qualitativo: 1.0, prova: 4.8 },
                    { teste: 1.6, projeto: 1.7, qualitativo: 0.8, prova: 4.0 },
                    { teste: 1.7, projeto: 1.6, qualitativo: 0.9, prova: 3.8 },
                    { teste: 1.7, projeto: 1.8, qualitativo: 0.9, prova: 4.0 },
                    { teste: 1.9, projeto: 2.0, qualitativo: 1.0, prova: 5.0 },
                    { teste: 1.7, projeto: 1.7, qualitativo: 0.9, prova: 4.0 },
                    { teste: 2.0, projeto: 2.0, qualitativo: 1.0, prova: 5.0 }
                ],
                'III Trimestre': [
                    { teste: 2.0, projeto: 1.9, qualitativo: 1.0, prova: 4.5 },
                    { teste: 1.9, projeto: 2.0, qualitativo: 1.0, prova: 5.0 },
                    { teste: 2.0, projeto: 1.8, qualitativo: 1.0, prova: 4.8 },
                    { teste: 1.8, projeto: 1.7, qualitativo: 0.9, prova: 4.0 },
                    { teste: 1.9, projeto: 1.9, qualitativo: 1.0, prova: 4.5 },
                    { teste: 1.9, projeto: 1.8, qualitativo: 1.0, prova: 4.8 },
                    { teste: 1.9, projeto: 1.9, qualitativo: 1.0, prova: 4.7 },
                    { teste: 1.8, projeto: 2.0, qualitativo: 1.0, prova: 4.5 }
                ]
            }
        },
        // Adicione outros estudantes aqui no mesmo formato...
    ];

    // Calcula a média final de cada disciplina por trimestre para cada estudante
    estudantes.forEach(estudante => {
        disciplinas.forEach((disciplina, index) => {
            const notasTrimestres = trimestres.map(trimestre => estudante.notas[trimestre][index]);
            estudante[disciplina] = calcularMediaFinal(notasTrimestres);
        });
    });

    return estudantes;
}

// Gerar e exibir o mapa de notas com as médias finais por disciplina
console.log(gerarMapaDeNotas());
