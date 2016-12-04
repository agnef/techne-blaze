import { Template } from 'meteor/templating';
import './ListePosts.html';

Template.liste_posts.helpers({
	liste_posts : [{
      author: "Salvador Dali",
      text: "Butterflies, 1956",
      poste_le: "2 décembre 2016",
      url : "../img/papillons.jpg"
    }, {
      author: "Franz Marc",
      text: "Füchse, 1913",
      poste_le: "27 novembre 2016",
      url: "../img/renards.jpg"
    }, {
      author: "Franz Marc",
      text: "Blaues Pferd, 1911",
      poste_le: "22 novembre 2016",
      url: "../img/cheval.jpg"
    }],
});


