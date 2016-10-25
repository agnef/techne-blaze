import { Template } from 'meteor/templating';
import './ListePosts.html';

Template.liste_posts.helpers({
	liste_posts : [{
      author: "Salvador Dali",
      text: "Paysage avec papillons 2, peinture à l'huile",
      url : "../img/papillons.jpg"
    }, {
      author: "Franz Mark",
      text: "Renards, peinture à l'huile",
      url: "../img/renards.jpg"
    }, {
      author: "Franz Mark",
      text: "Cheval, peinture à l'huile",
      url: "../img/cheval.jpg"
    }],
});


