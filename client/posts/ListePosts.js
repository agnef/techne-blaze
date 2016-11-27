import { Template } from 'meteor/templating';
import './ListePosts.html';

Template.liste_posts.helpers({
	liste_posts : [{
      author: "Salvador Dali",
      text: "Landscape With Butterflies, 1956",
      url : "../img/papillons.jpg"
    }, {
      author: "Franz Marc",
      text: "Füchse, 1942",
      url: "../img/renards.jpg"
    }, {
      author: "Franz Marc",
      text: "Blaue Reiter",
      url: "../img/cheval.jpg"
    }],
});


