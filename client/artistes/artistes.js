import { Template } from 'meteor/templating';
import './artistes.html';

Template.artistes.helpers({
	artistes : [{
      firstname  : "Salvador",
      lastname   : "Dali",
      photo      : "../img/salvador_dali.jpeg",
      description: "Le réalisme ? Avec modération.",
      email      : "salvador.dali@mail.com"
    }, {
      firstname  : "Jackson",
      lastname   : "Pollock",
      photo      : "../img/jackson_pollock.jpeg",
      description: "Je m'inscris dans le mouvement expressioniste abstrait, c'est ce qu'il se passe quand on fait des gribouillis. J'aime beaucoup le travail de Lee Krasner et de Mark Tobey.",
      email      : "jackson.pollock@mail.com"
    }, {
      firstname  : "Vivian",
      lastname   : "Maier",
      photo      : "../img/vivian_maier.jpg",
      description: "J'ai toujours été passionnée par la photographie. J'y consacre tout mon temps libre.",
      email      : "vivian.maier@mail.com"
    }, {
      firstname  : "Vassily",
      lastname   : "Kandinsky",
      photo      : "../img/vassily_kandinsky.jpg",
      description: "Je suis passionné par la science, ma synesthésie m'aide à mieux comprendre nos découvertes en plein essort.",
      email      : "vassily.kandinsky@mail.com"
    }, {
      firstname  : "Franz",
      lastname   : "Marc",
      photo      : "../img/franz_marc.jpeg",
      description: "J'ai une grande admiration pour Edvard Munch et Vincent van Gogh.",
      email      : "franz.marc@mail.com"
    }]
});
