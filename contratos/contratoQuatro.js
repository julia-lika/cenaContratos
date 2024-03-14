class ContratoQuatro extends Phaser.Scene {
    constructor() {
      super({ key: "ContratoQuatro" });
    }
  
    preload() {
      this.load.image("notebook", "assets/notebook.png");
      this.load.image("pastas", "assets/pasta.png");
      this.load.image("check", "assets/check.png");
      this.load.image("deny", "assets/deny.png");
      this.load.image('fornecedorQuatro', '/assets/fornecedores/fornecedorSprite_4.png');

    }
  
    create() {
      this.add.image(640, 300, "notebook").setScale(0.7);

      this.add.rectangle(640, 230, 240, 260, 0xFFDEAD);

      this.add.image(525, 330, 'fornecedorQuatro').setScale(2);

      this.check = this.add.image(675, 410, "check").setScale(6);
      this.check.setInteractive();
      this.check.on ('pointerdown', () => {
        this.scene.stop('ContratoQuatro');
        this.scene.start('Contratos');
      })

      this.deny = this.add.image(600, 410, "deny").setScale(6);
      this.deny.setInteractive();
      this.deny.on ('pointerdown', () => {
        this.scene.stop('ContratoQuatro');
        this.scene.start('Contratos');
      })

      var textoContratoQuatro = 'Contrato: \n ...';
      this.add.text(550, 200, textoContratoQuatro, {fontSize:'20px', fill:'0xFFFFFF'});
      
    }
  
    update() {
  
    }
  }