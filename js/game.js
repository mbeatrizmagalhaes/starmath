// Cenario
var cenario;
var velocidadeScrollCenario;
// Jogador
var navinha;
// Movimentação
var controles;
// Tiros
var botaoAtirar;
var tiro;	
var tiroVelocidade;
// Barulho do Tiro - audio
var somTiro;
// Elementos textuais
var textoPergunta;
var textoPontuacao;

var pontuacao;
// Meteoros com a resposta
var meteoros;
var meteoroCerto;
var meteoroErrado1;
var meteoroErrado2;

var respostaCorreta;

var Game = {

	preload: function(){
		carregaRecursos();
	},

	create: function(){
			criaCenarioBackground();
			criaNave();
			criaTiros();
			//Texto
			textoPergunta = jogo.add.text(jogo.world.centerX - 100, jogo.world.centerY - 300, '', {
				font: "65px Arial",
		        fill: "#ff0044",
		        align: "center"
			});
			alteraPergunta();

			pontuacao = 0;
			textoPontuacao = jogo.add.text(jogo.world.centerX + 325, jogo.world.centerY - 300, pontuacao,{
				font: '32px Arial',
				fill: '#ff0044',
				align: 'center'
			});

			// Meteoros com a resposta
			meteoros = jogo.add.group();
			meteoros.enableBody = true;
			meteoros.physicsBodyType = Phaser.Physics.ARCADE;
			criaMeteoros();
	},

	update: function(){
		atualizoes();
		// Faz meteoros descer (O GRUPO)
		

		if(pontuacao > 40){
			meteoros.y += 1;
			textCorreto.y +=  1;
			textErrado1.y += 1;
			textErrado2.y += 1;
		} else if(pontuacao > 100){
			meteoros.y += 8;
			textCorreto.y +=  1.5;
			textErrado1.y += 1.5;
			textErrado2.y += 1.5;
		} else {
			meteoros.y += 0.5;			
			textCorreto.y +=  0.5;
			textErrado1.y += 0.5;
			textErrado2.y += 0.5;
		}

		// Identificando colisão para cada um dos meteoros
			// objetos que recebem colisao, funcao, 
		jogo.physics.arcade.overlap(tiro, meteoroCerto, quandoAconteceColisaoCorreta, null, this);
		jogo.physics.arcade.overlap(tiro, meteoroErrado1, quandoAconteceColisaoErrada, null, this);
		jogo.physics.arcade.overlap(tiro, meteoroErrado2, quandoAconteceColisaoErrada, null, this);

	}
};